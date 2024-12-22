import { useEffect } from "react";
import Common from "../components/Common";

function KaKaoMap() {
  useEffect(() => {
    const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&libraries=services`;

    if (!document.querySelector(`script[src="${KAKAO_MAP_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = KAKAO_MAP_SRC;
      script.async = true;

      script.onload = () => {
        const waitForKakao = setInterval(() => {
          if (window.kakao && window.kakao.maps) {
            clearInterval(waitForKakao);
            initializeMap();
          }
        }, 100);
      };

      script.onerror = () => {
        console.error("카카오 맵 스크립트 로드에 실패했습니다.");
      };

      document.head.appendChild(script);
    } else if (window.kakao && window.kakao.maps) {
      initializeMap(); // 이미 로드된 경우 바로 초기화
    }
  }, []);

  const initializeMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
    const marker = new window.kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    const infowindow = new window.kakao.maps.InfoWindow({
      content: '<div style="padding:5px;">서울 중심입니다!</div>',
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
      infowindow.open(map, marker);
    });

    window.kakao.maps.event.addListener(map, "click", () => {
      infowindow.close();
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
