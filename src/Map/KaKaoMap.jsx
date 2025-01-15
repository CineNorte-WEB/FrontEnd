import React, { useEffect, useState, useCallback } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

const BASE_URL = "http://43.203.118.59:8080";

const universityLocations = {
  서강대: { lat: 37.551292, lng: 126.940108 },
  시립대: { lat: 37.5849836, lng: 127.057752 },
  이대: { lat: 37.562691, lng: 126.947684 },
  연대: { lat: 37.564512, lng: 126.938977 },
  외대: { lat: 37.5976717, lng: 127.0579181 },
  경희대: { lat: 37.597312, lng: 127.05165 },
};

const API = {
  UNIVS: `${BASE_URL}/univs`,
  UNIV_PLACES: (univId) => `${BASE_URL}/univs/${univId}/places`,
  UNIV_BY_NAME: (name) => `${BASE_URL}/univs/name/${name}`,
  UNIV_BY_ID: (id) => `${BASE_URL}/univs/id/${id}`,
  PLACES: {
    BY_NAME: (name) => `${BASE_URL}/places/name/${name}`,
    BY_ID: (id) => `${BASE_URL}/places/id/${id}`,
  },
  REVIEWS: {
    ALL: `${BASE_URL}/review_posts`,
    BY_ID: (id) => `${BASE_URL}/review_posts/${id}`,
    BY_PLACE: (placeId) => `${BASE_URL}/review_posts/place/${placeId}`,
  },
  ANALYSIS: {
    ALL: `${BASE_URL}/review-analysis`,
    BY_PLACE: (placeId) => `${BASE_URL}/review-analysis/${placeId}`,
  },
  USER: {
    BOOKMARKS: `${BASE_URL}/users/bookmarks`,
    REVIEWS: `${BASE_URL}/users/reviews`,
    BOARDS: `${BASE_URL}/users/boards`,
  },
};

function KakaoMap() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [markerClick, setMarkerClick] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [universityOverlays, setUniversityOverlays] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState("연대");
  const [reviewData, setReviewData] = useState({});
  const [analysisData, setAnalysisData] = useState({});

  const fetchWithErrorHandling = async (url) => {
    try {
      console.log(`🌐 Attempting API call to: ${url}`);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 500) {
          console.error(`❌ Server error (500) for endpoint: ${url}`);
          console.error(`📝 API Path: ${url.replace(BASE_URL, "")}`);
          return {};
        }
        if (response.status === 404) {
          console.error(`❌ Not Found (404) for endpoint: ${url}`);
          console.error(`📝 API Path: ${url.replace(BASE_URL, "")}`);
          return {};
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`✅ Successful API call to: ${url.replace(BASE_URL, "")}`);
      return data;
    } catch (error) {
      console.error(
        `🔥 Error details for ${url.replace(BASE_URL, "")}:`,
        error
      );
      if (error.name === "SyntaxError") {
        console.error("📄 Invalid JSON response from server");
      }
      return {};
    }
  };

  const fetchReviewData = async (placeId) => {
    try {
      console.log(`📊 Fetching review data for place ID: ${placeId}`);

      const [reviews, analysis] = await Promise.all([
        fetchWithErrorHandling(API.REVIEWS.BY_PLACE(placeId)),
        fetchWithErrorHandling(API.ANALYSIS.BY_PLACE(placeId)),
      ]);

      if (!reviews.data) {
        console.warn(`⚠️ No review data received for place ID: ${placeId}`);
      }
      if (!analysis.data) {
        console.warn(`⚠️ No analysis data received for place ID: ${placeId}`);
      }

      setReviewData((prev) => ({
        ...prev,
        [placeId]: reviews.data || [],
      }));
      setAnalysisData((prev) => ({
        ...prev,
        [placeId]: analysis.data || null,
      }));
    } catch (error) {
      console.error(`❌ Error fetching data for place ID ${placeId}:`, error);
      setReviewData((prev) => ({ ...prev, [placeId]: [] }));
      setAnalysisData((prev) => ({ ...prev, [placeId]: null }));
    }
  };

  const parseLikePoints = (likePoints) => {
    if (!likePoints) return [];

    try {
      if (typeof likePoints === "string") {
        const formattedString = likePoints.replace(/'/g, '"');
        if (formattedString.trim().startsWith("[")) {
          return JSON.parse(formattedString);
        }
        return formattedString
          .split(",")
          .map((point) => point.trim())
          .filter(Boolean);
      }
      if (Array.isArray(likePoints)) {
        return likePoints;
      }
      return [];
    } catch (e) {
      console.warn("Error parsing likePoints:", e);
      return [];
    }
  };

  const transformPlaceData = (place) => {
    if (!place || typeof place !== "object") {
      console.warn("Invalid place data:", place);
      return null;
    }
    return {
      id: place.id || 0,
      name: place.name || "",
      category: place.category || "항목 없음",
      address: place.address || "",
      hours: place.hours || "",
      rating: place.rating || 0,
      likePoints: parseLikePoints(place.likePoints),
      imageUrl: place.imageUrl || "",
      univName: place.univName || "",
      menus: Array.isArray(place.menus) ? place.menus : [],
      reviews: reviewData[place.id] || [],
      analysis: analysisData[place.id] || null,
      position: {
        lat:
          place.latitude ||
          universityLocations[place.univName]?.lat ||
          37.564512,
        lng:
          place.longitude ||
          universityLocations[place.univName]?.lng ||
          126.938977,
      },
    };
  };

  useEffect(() => {
    const KAKAO_APP_KEY = "6e8fa510b697aead6db54c7916c11fe1";

    const isKakaoMapLoaded = () => {
      return window.kakao && window.kakao.maps;
    };

    const loadKakaoMapScript = () => {
      return new Promise((resolve, reject) => {
        if (isKakaoMapLoaded()) {
          window.kakao.maps.load(resolve);
          return;
        }

        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;
        script.async = true;

        script.onload = () => {
          window.kakao.maps.load(resolve);
        };

        script.onerror = (error) => {
          console.error("Error loading Kakao Maps script:", error);
          reject(error);
        };

        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      if (!isKakaoMapLoaded()) {
        console.error("Kakao Maps not loaded");
        return;
      }

      const container = document.getElementById("map");
      if (!container) {
        console.error("Map container not found");
        return;
      }

      try {
        const options = {
          center: new window.kakao.maps.LatLng(37.541012, 127.070798),
          level: 3,
        };

        const newMap = new window.kakao.maps.Map(container, options);

        // 지도 인터랙션 옵션 설정
        newMap.setDraggable(true);
        newMap.setZoomable(true);

        setMap(newMap);

        // UI 컨트롤 추가
        const zoomControl = new window.kakao.maps.ZoomControl();
        newMap.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        createUniversityOverlays(newMap);
        createRestaurantMarkers(newMap);

        window.kakao.maps.event.addListener(newMap, "click", () => {
          setSelectedRestaurant(null);
          setMarkerClick(false);
        });

        console.log("Map initialized successfully");
      } catch (error) {
        console.error("Map initialization error:", error);
        setError("지도를 초기화하는 중 오류가 발생했습니다.");
      }
    };

    const init = async () => {
      try {
        await loadKakaoMapScript();
        initMap();
      } catch (error) {
        console.error("Failed to load Kakao Maps:", error);
        setError("지도를 로드하는 데 실패했습니다.");
      }
    };

    init();

    return () => {
      if (map) {
        if (markers.length) {
          markers.forEach((marker) => {
            if (marker) marker.setMap(null);
          });
        }
        if (universityOverlays.length) {
          universityOverlays.forEach((overlay) => {
            if (overlay) overlay.setMap(null);
          });
        }
      }
    };
  }, [restaurantData]);

  const createUniversityOverlays = useCallback((newMap) => {
    const newUniversityOverlays = [];
    Object.entries(universityLocations).forEach(([university, position]) => {
      const universityPosition = new window.kakao.maps.LatLng(
        position.lat,
        position.lng
      );

      const content = document.createElement("div");
      content.style.position = "relative";
      content.style.width = "50px";
      content.style.height = "50px";
      content.style.border = "3px solid #000000";
      content.style.borderRadius = "50%";
      content.style.backgroundColor = "white";
      content.style.padding = "2px";
      content.style.boxSizing = "border-box";

      const img = document.createElement("img");
      img.src = `/images/${university}.png`;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.borderRadius = "50%";
      img.onerror = () => {
        img.src = "/images/default-university.png";
      };
      content.appendChild(img);

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: universityPosition,
        content: content,
        map: newMap,
        zIndex: 3,
      });

      newUniversityOverlays.push(customOverlay);
    });
    setUniversityOverlays(newUniversityOverlays);
  }, []);

  const createRestaurantMarkers = useCallback(
    (newMap) => {
      if (!restaurantData.length || !newMap) return;

      const newMarkers = restaurantData
        .map((place) => {
          if (!place.position || !place.position.lat || !place.position.lng) {
            console.error("Invalid position data for restaurant:", place);
            return null;
          }

          const markerPosition = new window.kakao.maps.LatLng(
            place.position.lat,
            place.position.lng
          );

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: newMap,
          });

          window.kakao.maps.event.addListener(marker, "mouseout", () => {
            setSelectedRestaurant(null);
            setMarkerClick(false);
          });

          window.kakao.maps.event.addListener(marker, "mouseover", () => {
            setSelectedRestaurant({
              ...place,
              markerPosition: {
                left: marker.getPosition().getLng(),
                top: marker.getPosition().getLat(),
              },
            });
            setMarkerClick(true);
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            setSelectedRestaurant({
              ...place,
              markerPosition: {
                left: marker.getPosition().getLng(),
                top: marker.getPosition().getLat(),
              },
            });
            setMarkerClick(true);
          });

          return marker;
        })
        .filter(Boolean);

      setMarkers(newMarkers);
    },
    [restaurantData]
  );

  const handleListClick = useCallback(
    (restaurant) => {
      if (!restaurant || !map) return;

      setSelectedRestaurant(restaurant);
      setMarkerClick(false);

      const position = new window.kakao.maps.LatLng(
        restaurant.position.lat,
        restaurant.position.lng
      );
      map.panTo(position);
    },
    [map]
  );

  const handleUniversityChange = useCallback(
    (university) => {
      if (!map || !universityLocations[university]) return;

      setSelectedUniversity(university);
      const position = new window.kakao.maps.LatLng(
        universityLocations[university].lat,
        universityLocations[university].lng
      );
      map.panTo(position);
    },
    [map]
  );

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        console.log("🏁 Starting to fetch all data...");

        const universities = await fetchWithErrorHandling(API.UNIVS);
        if (!Array.isArray(universities)) {
          console.error("❌ Universities data is not an array:", universities);
          throw new Error("Universities data is not an array");
        }
        console.log(`📚 Found ${universities.length} universities`);

        console.log("🏪 Fetching places for each university...");
        const placesPromises = universities.map((univ) =>
          fetchWithErrorHandling(API.UNIV_PLACES(univ.id))
        );
        const allPlacesData = await Promise.all(placesPromises);
        const validPlacesData = allPlacesData.filter(Array.isArray).flat();
        console.log(`📍 Found ${validPlacesData.length} total places`);

        console.log("🔍 Fetching details for each place...");
        const placeDetailsPromises = validPlacesData.map(async (place) => {
          console.log(`📌 Fetching details for place ID: ${place.id}`);
          const details = await fetchWithErrorHandling(
            API.PLACES.BY_ID(place.id)
          );
          await fetchReviewData(place.id);
          return details;
        });

        const placeDetails = await Promise.all(placeDetailsPromises);
        const transformedData = placeDetails
          .filter((place) => {
            if (!place || !place.id) {
              console.warn("⚠️ Found invalid place data:", place);
              return false;
            }
            return true;
          })
          .map(transformPlaceData);

        console.log(
          `✅ Successfully processed ${transformedData.length} places`
        );
        setRestaurantData(transformedData);
      } catch (error) {
        console.error("🔥 Error in fetchAllData:", error);
        setError(
          "데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // 마커와 오버레이 업데이트
  useEffect(() => {
    if (map && restaurantData.length > 0) {
      createRestaurantMarkers(map);
    }
  }, [map, restaurantData, createRestaurantMarkers]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      if (markers && markers.length) {
        markers.forEach((marker) => {
          if (marker) marker.setMap(null);
        });
      }
      if (universityOverlays && universityOverlays.length) {
        universityOverlays.forEach((overlay) => {
          if (overlay) overlay.setMap(null);
        });
      }
    };
  }, []);

  // 로딩 상태 표시
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">
          데이터를 불러오는 중...
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full h-screen bg-gray-100">
      <div className="w-1/4 h-full bg-white border-r-2 border-gray-300">
        <div className="relative h-full overflow-hidden border-2 border-black rounded-r-xl">
          <LeftSide
            restaurantData={restaurantData}
            onSelectRestaurant={handleListClick}
            onUniversityChange={handleUniversityChange}
            isLoading={isLoading}
            error={error}
            selectedUniversity={selectedUniversity}
          />
        </div>
      </div>
      <div className="relative w-3/4 h-full">
        {error && (
          <div className="absolute z-50 px-4 py-2 text-red-700 transform -translate-x-1/2 bg-red-100 rounded-md top-4 left-1/2">
            {error}
          </div>
        )}
        <div
          id="map"
          className="w-full h-full overflow-hidden border-2 border-gray-400 rounded-xl"
        />
        {selectedRestaurant && (
          <RestaurantOverlay
            restaurant={selectedRestaurant}
            onClose={() => {
              setSelectedRestaurant(null);
              setMarkerClick(false);
            }}
            source={markerClick ? "marker" : "list"}
          />
        )}
      </div>
      <Common />
    </div>
  );
}

export default KakaoMap;
