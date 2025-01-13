import React, { useEffect, useState } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

// University location information
const universityLocations = {
  서강대: { lat: 37.551292, lng: 126.940108 },
  시립대: { lat: 37.5849836, lng: 127.057752 },
  이대: { lat: 37.562691, lng: 126.947684 },
  연대: { lat: 37.564512, lng: 126.938977 },
  외대: { lat: 37.5976717, lng: 127.0579181 },
  경희대: { lat: 37.597312, lng: 127.05165 },
};

function KakaoMap() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [markerClick, setMarkerClick] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [universityOverlays, setUniversityOverlays] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch restaurant data from the API
  useEffect(() => {
    const fetchRestaurantData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Updated API endpoint
        const response = await fetch(
          `http://43.203.118.59:8080/users/register`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("요청하신 데이터를 찾을 수 없습니다.");
          } else if (response.status === 500) {
            throw new Error("서버 내부 오류가 발생했습니다.");
          } else {
            throw new Error(`서버 오류! 상태: ${response.status}`);
          }
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("Invalid data format:", data);
          throw new Error("서버 응답이 올바른 형식이 아닙니다.");
        }

        const transformedData = data
          .map((restaurant) => {
            if (!restaurant || typeof restaurant !== "object") {
              console.warn("Invalid restaurant data:", restaurant);
              return null;
            }

            try {
              return {
                id: restaurant.id || Date.now() + Math.random(),
                name: restaurant.name || "이름 없음",
                category: restaurant.category || "기타",
                rating: parseFloat(restaurant.rating || 0).toFixed(1),
                dislikeRating: parseFloat(
                  restaurant.dislikeRating || 0
                ).toFixed(1),
                goodText: restaurant.goodText || "",
                badText: restaurant.badText || "",
                address: restaurant.address || "",
                hours: restaurant.hours || "",
                operatingHours: {
                  weekday: restaurant.weekdayHours || "",
                  weekend: restaurant.weekendHours || "",
                },
                position: {
                  lat: parseFloat(restaurant.latitude) || 37.564512,
                  lng: parseFloat(restaurant.longitude) || 126.938977,
                },
                like_points: Array.isArray(restaurant.likePoints)
                  ? restaurant.likePoints
                  : [],
                image: `/images/${restaurant.category || "기타"}.png`,
                menu: Array.isArray(restaurant.menu) ? restaurant.menu : [],
              };
            } catch (err) {
              console.error("Error transforming restaurant data:", err);
              return null;
            }
          })
          .filter(Boolean);

        if (transformedData.length === 0) {
          throw new Error("표시할 수 있는 식당 데이터가 없습니다.");
        }

        setRestaurantData(transformedData);
      } catch (error) {
        console.error("식당 데이터 불러오기 오류:", error);
        setError(error.message || "알 수 없는 오류가 발생했습니다.");
        setRestaurantData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  // Initialize Kakao Map
  useEffect(() => {
    const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&libraries=services&autoload=false`;

    const loadKakaoMap = () => {
      if (!document.querySelector(`script[src="${KAKAO_MAP_SRC}"]`)) {
        const script = document.createElement("script");
        script.src = KAKAO_MAP_SRC;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => initializeMap());
          }
        };

        script.onerror = () => {
          setError("카카오맵 로딩 실패");
        };

        document.head.appendChild(script);
      } else if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => initializeMap());
      }
    };

    loadKakaoMap();
  }, []);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      setError("카카오맵 초기화 실패");
      return;
    }

    const container = document.getElementById("map");
    if (!container) {
      setError("맵 컨테이너를 찾을 수 없습니다");
      return;
    }

    try {
      const options = {
        center: new window.kakao.maps.LatLng(37.564512, 126.938977),
        level: 3,
        draggable: true,
        scrollwheel: true,
        disableDoubleClick: false,
      };

      const newMap = new window.kakao.maps.Map(container, options);
      window.map = newMap;
      setMap(newMap);

      createUniversityOverlays(newMap);

      // Only create restaurant markers if we have data
      if (restaurantData.length > 0) {
        createRestaurantMarkers(newMap);
      }

      window.kakao.maps.event.addListener(newMap, "click", () => {
        setSelectedRestaurant(null);
        setMarkerClick(false);
      });
    } catch (error) {
      console.error("맵 초기화 오류:", error);
      setError("맵 초기화 중 오류가 발생했습니다");
    }
  };

  const createUniversityOverlays = (newMap) => {
    try {
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
          img.src = "/images/default-university.png"; // Fallback image
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
    } catch (error) {
      console.error("대학교 오버레이 생성 오류:", error);
      setError("대학교 마커 생성 중 오류가 발생했습니다");
    }
  };

  const createRestaurantMarkers = (newMap) => {
    try {
      const newMarkers = restaurantData.map((place) => {
        const markerPosition = new window.kakao.maps.LatLng(
          place.position.lat,
          place.position.lng
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          map: newMap,
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

        window.kakao.maps.event.addListener(marker, "mouseout", () => {
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

        return marker;
      });

      setMarkers(newMarkers);
    } catch (error) {
      console.error("식당 마커 생성 오류:", error);
      setError("식당 마커 생성 중 오류가 발생했습니다");
    }
  };

  const handleListClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setMarkerClick(false);
  };

  const handleUniversityChange = (university) => {
    if (map && universityLocations[university]) {
      const position = new window.kakao.maps.LatLng(
        universityLocations[university].lat,
        universityLocations[university].lng
      );
      map.panTo(position);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">
          데이터를 불러오는 중...
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="p-4 text-red-500 bg-white rounded-lg shadow-lg">
          <h2 className="mb-2 text-xl font-bold">오류가 발생했습니다</h2>
          <p>{error}</p>
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
          />
        </div>
      </div>
      <div className="relative w-3/4 h-full">
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
