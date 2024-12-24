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

    const container = document.getElementById("map");
    if (!container) {
      console.error("맵 컨테이너를 찾을 수 없습니다.");
      return;
    }

    const options = {
      center: new window.kakao.maps.LatLng(37.540997, 127.070818), // 건국대학교 중심 좌표
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    // 실제 식당 위치 데이터
    const places = [
      {
        name: "현이네 고기국수",
        lat: 37.541789,
        lng: 127.071901,
        description: "가격도 적당하고 맛도 만족해요",
      },
      {
        name: "장인닭갈비 건대점",
        lat: 37.541231,
        lng: 127.070565,
        description: "닭갈비가 맛있고 직원분들이 친절해요",
      },
      {
        name: "봉추찜닭 건대입구점",
        lat: 37.540997,
        lng: 127.070818,
        description: "양이 많고 맛있어요",
      },
      {
        name: "한촌설렁탕 건대입구역점",
        lat: 37.540635,
        lng: 127.069477,
        description: "깔끔한 국물맛이 일품이에요",
      },
      {
        name: "더막생오리 건대점",
        lat: 37.541086,
        lng: 127.070757,
        description: "오리고기가 신선하고 맛있어요",
      },
    ];

    places.forEach((place) => {
      const markerPosition = new window.kakao.maps.LatLng(place.lat, place.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `
          <div style="padding:5px; font-size:12px;">
            <b>${place.name}</b><br/>
            ${place.description}
          </div>
        `,
      });

      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        infowindow.open(map, marker);
      });

      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });
    });

    // 지도 컨트롤 추가
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  };

  return (
    <div className="relative flex w-full h-screen bg-gray-100">
      <div className="w-1/4 h-full bg-white border-r-2 border-gray-300">
        <LeftSide />
      </div>
      <div
        id="map"
        className="w-3/4 h-full border-2 border-gray-400 rounded-lg"
      ></div>
      <Common />
    </div>
  );
}

export default KaKaoMap;
