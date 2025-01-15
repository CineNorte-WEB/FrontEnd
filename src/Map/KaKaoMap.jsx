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

    // 수동으로 좌표 매핑
    const manualCoordinates = {
      안녕유부: { lat: 37.5971837, lng: 127.0553028 },
      언니네함바그: { lat: 37.5912458, lng: 127.0562716 },
      "크치치킨 회기점": { lat: 37.5903212, lng: 127.0524384 },
      푸른하늘: { lat: 37.5975058, lng: 127.0556663 },
      회기왕족발보쌈: { lat: 37.5898425, lng: 127.0530133 },
      회기왕갈비탕: { lat: 37.5915625, lng: 127.0516384 },
      여기가좋겠네: { lat: 37.5902841, lng: 127.0563716 },
      "가야가야 이대점": { lat: 37.5577841, lng: 126.9461716 },
      고냉지: { lat: 37.5577841, lng: 126.9472384 },
      "마더린러베이글(이대점)": { lat: 37.5580458, lng: 126.9462716 },
      비밀: { lat: 37.5572841, lng: 126.9463716 },
      "비아37 신촌본점": { lat: 37.5577841, lng: 126.9464384 },
      삭: { lat: 37.5582458, lng: 126.9465716 },
      "아건 이대점": { lat: 37.5587841, lng: 126.9466384 },
      "아민 이화": { lat: 37.5592458, lng: 126.9467716 },
      오르랔베이커리: { lat: 37.5582841, lng: 126.9468384 },
      카우떡볶이: { lat: 37.5572458, lng: 126.9469716 },
      하늘초밥: { lat: 37.5577841, lng: 126.9470384 },
      미스터서왕만두: { lat: 37.5582458, lng: 126.9471716 },
      소바연구소: { lat: 37.5587841, lng: 126.9472384 },
      란주탕슉: { lat: 37.5592458, lng: 126.9473716 },
      김광석신촌칼국수: { lat: 37.5532841, lng: 126.9394384 },
      "롤앤롤 김밥": { lat: 37.5537458, lng: 126.9395716 },
      스키당: { lat: 37.5542841, lng: 126.9396384 },
      "을밀대 본점": { lat: 37.5547458, lng: 126.9397716 },
      "정정 공덕1호점": { lat: 37.5442841, lng: 126.9398384 },
      수저가: { lat: 37.5447458, lng: 126.9399716 },
      정각: { lat: 37.5452841, lng: 126.9400384 },
      정든그릇: { lat: 37.5457458, lng: 126.9401716 },
      "쭈꾸미블루스 신촌본점": { lat: 37.5462841, lng: 126.9402384 },
      파사주: { lat: 37.5467458, lng: 126.9403716 },
      라구식당: { lat: 37.5602841, lng: 126.9374384 },
      대포찜닭: { lat: 37.5607458, lng: 126.9375716 },
      김판석초밥: { lat: 37.5612841, lng: 126.9376384 },
      공복식당: { lat: 37.5617458, lng: 126.9377716 },
      "쿳사 연희": { lat: 37.5662841, lng: 126.9323716 },
      "오늘통닭 신촌직영점": { lat: 37.5607458, lng: 126.9375384 },
      "강남불백 3호점": { lat: 37.5612841, lng: 126.9376716 },
      대성이네: { lat: 37.5617458, lng: 126.9377384 },
      "명성양꼬치 본점": { lat: 37.5622841, lng: 126.9378716 },
      정육면체: { lat: 37.5627458, lng: 126.9379384 },
      카츠업: { lat: 37.5632841, lng: 126.9380716 },
      "자가제빵선명희피자 외대점": { lat: 37.5977458, lng: 127.0589384 },
      "성화금탕마라탕&튀김꼬치": { lat: 37.5982841, lng: 127.0590716 },
      이상한떡볶이집: { lat: 37.5987458, lng: 127.0591384 },
      "파치 외대점": { lat: 37.5992841, lng: 127.0592716 },
      "서가네 정육식당 본점": { lat: 37.5997458, lng: 127.0593384 },
      "샤로스톤 외대점": { lat: 37.6002841, lng: 127.0594716 },
      "베브릿지 한국외대점": { lat: 37.6007458, lng: 127.0595384 },
      무초타코: { lat: 37.6012841, lng: 127.0596716 },
      분99: { lat: 37.6017458, lng: 127.0597384 },
      "번패티번 외대점": { lat: 37.6022841, lng: 127.0598716 },
      도란도란곱창: { lat: 37.6027458, lng: 127.0599384 },
      "153스트리트": { lat: 37.6032841, lng: 127.0600716 },
      "최원석의돼지한판 서해쭈꾸미 시립대점": {
        lat: 37.5847458,
        lng: 127.0551384,
      },
    };

    // 수동 좌표 우선, 없으면 기존 로직
    const manualPosition = manualCoordinates[place.name];
    const position = {
      lat:
        manualPosition?.lat ||
        place.position?.lat ||
        universityLocations[place.univName?.replace("대학교", "")]?.lat ||
        37.564512,
      lng:
        manualPosition?.lng ||
        place.position?.lng ||
        universityLocations[place.univName?.replace("대학교", "")]?.lng ||
        126.938977,
    };

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
      position: position, // 새로 계산된 position 사용
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
          center: new window.kakao.maps.LatLng(37.5535, 126.9368), // 신촌역 좌표로 변경
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
        .slice(0, 66) // 1번부터 66번까지의 가게만 표시
        .map((place) => {
          if (!place.position) {
            console.error("Invalid position data for restaurant:", place);
            return null;
          }

          const markerPosition = new window.kakao.maps.LatLng(
            place.position.lat,
            place.position.lng
          );

          // 커스텀 오버레이 콘텐츠 생성
          const content = document.createElement("div");
          content.className = "marker-content";
          content.innerHTML = `
          <div style="
            padding: 5px;
            background: white;
            border: 1px solid #888;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            white-space: nowrap;
          ">
            ${place.name}
          </div>
        `;

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: newMap,
          });

          // 마커 위에 오버레이 생성
          const overlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content,
            map: null, // 초기에는 숨김
            yAnchor: 2.2,
          });

          window.kakao.maps.event.addListener(marker, "mouseover", () => {
            overlay.setMap(newMap);
            setSelectedRestaurant({
              ...place,
              markerPosition: {
                left: marker.getPosition().getLng(),
                top: marker.getPosition().getLat(),
              },
            });
            setMarkerClick(true);
          });

          window.kakao.maps.event.addListener(marker, "mouseout", () => {
            overlay.setMap(null);
            setSelectedRestaurant(null);
            setMarkerClick(false);
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

          return { marker, overlay };
        })
        .filter(Boolean);

      setMarkers(newMarkers.map((item) => item.marker));
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
