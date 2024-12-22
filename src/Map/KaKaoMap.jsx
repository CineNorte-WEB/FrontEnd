import { useEffect } from "react";
import Common from "../components/Common";

function KaKaoMap() {
  useEffect(() => {
    // 카카오 맵 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=0eb18bd2485118040d7b24d54d20a331&libraries=services"; // 발급받은 키 사용
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 중심 좌표
          level: 3, // 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options);

        // 지도에 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978); // 마커 좌표
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 마커 클릭 이벤트 추가
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;">서울 중심입니다!</div>', // 마커 클릭 시 표시될 정보
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker); // 클릭 시 인포윈도우 표시
        });

        // 지도 클릭 시 인포윈도우 닫기
        window.kakao.maps.event.addListener(map, "click", () => {
          infowindow.close();
        });
      } else {
        console.error("카카오맵을 로드할 수 없습니다.");
      }
    };

    script.onerror = () => {
      console.error("카카오 맵 스크립트 로드에 실패했습니다.");
    };

    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-100">
      {/* 카카오맵 표시 영역 */}
      <div
        id="map"
        className="w-full h-full border-2 border-gray-400 rounded-lg shadow-lg"
      ></div>

      {/* 오른쪽 상단에 Common 컴포넌트 추가 */}
      <Common />
    </div>
  );
}

export default KaKaoMap;
