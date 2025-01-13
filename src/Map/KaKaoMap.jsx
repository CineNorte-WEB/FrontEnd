import React, { useEffect, useState } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://43.203.118.59:8080/places/{place_id}",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
          throw new Error("No data received from server");
        }

        const transformedData = {
          id: data.id,
          name: data.name,
          category: data.category || "항목 없음",
          address: data.address || "",
          hours: data.hours || "",
          rating: data.rating || 0,
          likePoints: data.likePoints ? JSON.parse(data.likePoints) : [],
          imageUrl: data.imageUrl || "",
          univName: data.univName || "",
          menus: data.menus || [],
          position: {
            lat:
              data.latitude ||
              universityLocations[data.univName]?.lat ||
              37.564512,
            lng:
              data.longitude ||
              universityLocations[data.univName]?.lng ||
              126.938977,
          },
        };

        setRestaurantData([transformedData]);
        setError(null);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setError(
          "데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  useEffect(() => {
    const loadKakaoMap = () => {
      const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_APP_KEY
      }&libraries=services&autoload=false`;

      return new Promise((resolve, reject) => {
        if (window.kakao && window.kakao.maps) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = KAKAO_MAP_SRC;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          window.kakao.maps.load(() => resolve());
        };
        script.onerror = (error) =>
          reject(new Error("Kakao maps script loading failed"));

        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        await loadKakaoMap();
        initializeMap();
      } catch (error) {
        console.error("Error loading Kakao maps:", error);
        setError("지도를 불러오는데 실패했습니다. 페이지를 새로고침해주세요.");
      }
    };

    initMap();
  }, []);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) return;

    const container = document.getElementById("map");
    if (!container) return;

    const options = {
      center: new window.kakao.maps.LatLng(37.564512, 126.938977),
      level: 3,
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
    };

    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);

    createUniversityOverlays(newMap);
    createRestaurantMarkers(newMap);

    window.kakao.maps.event.addListener(newMap, "click", () => {
      setSelectedRestaurant(null);
      setMarkerClick(false);
    });
  };

  const createUniversityOverlays = (newMap) => {
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
  };

  const createRestaurantMarkers = (newMap) => {
    if (!restaurantData.length) return;

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
      })
      .filter(Boolean); // Remove null markers

    setMarkers(newMarkers);
  };

  const handleListClick = (restaurant) => {
    if (!restaurant) return;

    setSelectedRestaurant(restaurant);
    setMarkerClick(false);

    if (map && restaurant.position) {
      const position = new window.kakao.maps.LatLng(
        restaurant.position.lat,
        restaurant.position.lng
      );
      map.panTo(position);
    }
  };

  const handleUniversityChange = (university) => {
    if (!map || !universityLocations[university]) return;

    const position = new window.kakao.maps.LatLng(
      universityLocations[university].lat,
      universityLocations[university].lng
    );
    map.panTo(position);
  };

  useEffect(() => {
    if (map && restaurantData.length > 0) {
      createRestaurantMarkers(map);
    }
  }, [map, restaurantData]);

  useEffect(() => {
    return () => {
      // Clean up markers when component unmounts
      markers.forEach((marker) => marker.setMap(null));
      universityOverlays.forEach((overlay) => overlay.setMap(null));
    };
  }, []);

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
