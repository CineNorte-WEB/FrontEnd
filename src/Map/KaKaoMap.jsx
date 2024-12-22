import { useEffect } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
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
      center: new window.kakao.maps.LatLng(37.5409, 127.082), // 건국대학교 중심 좌표
      level: 4,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log("지도 초기화 성공:", map); // 디버깅

    const places = [
      {
        name: "건대 맛집1",
        lat: 37.541,
        lng: 127.081,
        description: "건대 주변 맛집입니다.",
      },
      {
        name: "건대 카페",
        lat: 37.542,
        lng: 127.083,
        description: "건대 근처 인기 카페입니다.",
      },
      {
        name: "건대 쇼핑몰",
        lat: 37.5405,
        lng: 127.084,
        description: "건대 근처 쇼핑몰입니다.",
      },
      {
        name: "건대 학식",
        lat: 37.5407,
        lng: 127.0825,
        description: "건대 학생들을 위한 학식 장소입니다.",
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
      <LeftSide />
      <div
        id="map"
        className="w-full h-full border-2 border-gray-400 rounded-lg shadow-lg"
      ></div>
      <Common />
    </div>
  );
}

export default KaKaoMap;
