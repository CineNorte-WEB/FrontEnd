import { useEffect } from "react";
import Common from "../components/Common";

function KaKaoMap() {
  useEffect(() => {
    const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&libraries=services&autoload=false&_=${Date.now()}`; // 캐시 방지 파라미터 추가

    if (!document.querySelector(`script[src="${KAKAO_MAP_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = KAKAO_MAP_SRC;
      script.async = true;
      script.defer = true; // defer 속성 추가로 document.write 회피

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            console.log("카카오맵 객체 초기화 완료");
            initializeMap();
          });
        } else {
          console.error("카카오맵 객체가 로드되지 않았습니다.");
        }
      };

      script.onerror = () => {
        console.error("카카오 맵 스크립트 로드에 실패했습니다.");
      };

      document.head.appendChild(script);
    } else if (window.kakao && window.kakao.maps) {
      console.log("카카오맵 스크립트 이미 로드됨");
      window.kakao.maps.load(() => {
        console.log("카카오맵 객체 초기화 완료");
        initializeMap();
      });
    }
  }, []);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("카카오맵 객체가 초기화되지 않았습니다.");
      return;
    }
    console.log("LatLng 생성자 확인:", window.kakao.maps.LatLng);

    const container = document.getElementById("map");
    if (!container) {
      console.error("맵 컨테이너를 찾을 수 없습니다.");
      return;
    }

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log("지도 초기화 성공:", map); // 디버깅

    const places = [
      {
        name: "현이네 고기국수",
        lat: 37.5665,
        lng: 126.978,
        description: "서울 중심에 위치한 인기 맛집입니다.",
      },
      {
        name: "진스시",
        lat: 37.567,
        lng: 126.982,
        description: "신선한 스시를 제공하는 전문점입니다.",
      },
      {
        name: "백종원의 홍콩반점",
        lat: 37.565,
        lng: 126.975,
        description: "중식 요리가 유명한 곳입니다.",
      },
      {
        name: "아저씨 식당",
        lat: 37.568,
        lng: 126.98,
        description: "가정식을 전문으로 하는 식당입니다.",
      },
    ];

    places.forEach((place) => {
      const markerPosition = new window.kakao.maps.LatLng(place.lat, place.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px; font-size:12px;"><b>${place.name}</b><br>${place.description}</div>`,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });

      window.kakao.maps.event.addListener(map, "click", () => {
        infowindow.close();
      });
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-100">
      <div
        id="map"
        className="w-full h-full border-2 border-gray-400 rounded-lg shadow-lg"
      ></div>
      <Common />
    </div>
  );
}

export default KaKaoMap;
