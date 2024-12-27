import { useEffect, useState } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

const restaurantData = [
  {
    id: 1,
    name: "현이네 고기국수",
    category: "한식",
    rating: "4.75",
    goodText: "가격도 적당하고 맛도 만족해요",
    badText: "가끔 웨이팅이 있어요",
    address: "서울 광진구 화양동 48-5",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00 (일요일 휴무)",
    },
    position: { lat: 37.541789, lng: 127.071901 },
    menu: [
      { item: "고기국수", price: "9,000원" },
      { item: "비빔국수", price: "8,500원" },
      { item: "물국수", price: "8,000원" },
      { item: "만두국", price: "9,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 2,
    name: "도마29",
    category: "일식",
    rating: "4.8",
    goodText: "가성비 좋고 사시미가 신선해요",
    badText: "좌석이 좀 불편해요",
    address: "서울 광진구 화양동 29-26",
    hours: "16:00 - 24:00",
    operatingHours: {
      weekday: "16:00 - 24:00",
      weekend: "16:00 - 24:00",
    },
    position: { lat: 37.541231, lng: 127.070565 },
    menu: [
      { item: "모듬사시미", price: "32,000원" },
      { item: "연어사시미", price: "18,000원" },
      { item: "참치회", price: "20,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 3,
    name: "마라공방",
    category: "중식",
    rating: "4.6",
    goodText: "마라탕 맛이 중국 본토 스타일",
    badText: "매운 걸 잘 못먹으면 힘들어요",
    address: "서울 광진구 화양동 7-4",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.540997, lng: 127.070818 },
    menu: [
      { item: "마라탕", price: "10,000원" },
      { item: "마라샹궈", price: "18,000원" },
      { item: "꿔바로우", price: "15,000원" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 4,
    name: "로니로니",
    category: "양식",
    rating: "4.7",
    goodText: "파스타가 알덴테로 잘 삶아져요",
    badText: "가격이 조금 있는 편이에요",
    address: "서울 광진구 화양동 5-4",
    hours: "11:30 - 21:30",
    operatingHours: {
      weekday: "11:30 - 21:30",
      weekend: "11:30 - 21:30",
    },
    position: { lat: 37.540635, lng: 127.069477 },
    menu: [
      { item: "트러플 파스타", price: "18,000원" },
      { item: "목살 스테이크", price: "23,000원" },
      { item: "크림 리조또", price: "17,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 5,
    name: "아리랑 부대찌개",
    category: "한식",
    rating: "4.5",
    goodText: "재료가 푸짐하고 국물이 진해요",
    badText: "저녁에는 웨이팅이 있어요",
    address: "서울 광진구 화양동 9-3",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.541086, lng: 127.070757 },
    menu: [
      { item: "부대찌개", price: "10,000원" },
      { item: "치즈부대찌개", price: "11,000원" },
      { item: "라면사리", price: "2,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 6,
    name: "포몬스",
    category: "양식",
    rating: "4.4",
    goodText: "분위기가 좋고 스테이크가 맛있어요",
    badText: "주차가 어려워요",
    address: "서울 광진구 화양동 45-8",
    hours: "17:00 - 23:00",
    operatingHours: {
      weekday: "17:00 - 23:00",
      weekend: "17:00 - 23:00",
    },
    position: { lat: 37.541521, lng: 127.071234 },
    menu: [
      { item: "토마호크 스테이크", price: "89,000원" },
      { item: "감바스", price: "18,000원" },
      { item: "봉골레 파스타", price: "17,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 7,
    name: "쿠이신보",
    category: "일식",
    rating: "4.6",
    goodText: "라멘 국물이 진하고 맛있어요",
    badText: "가게가 좀 좁아요",
    address: "서울 광진구 화양동 48-12",
    hours: "11:30 - 21:00",
    operatingHours: {
      weekday: "11:30 - 21:00",
      weekend: "11:30 - 21:00",
    },
    position: { lat: 37.541892, lng: 127.071567 },
    menu: [
      { item: "돈코츠라멘", price: "9,000원" },
      { item: "매운라멘", price: "9,500원" },
      { item: "교자", price: "5,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 8,
    name: "대복이네 생선구이",
    category: "한식",
    rating: "4.7",
    goodText: "생선이 신선하고 밑반찬이 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 광진구 화양동 32-51",
    hours: "11:30 - 22:00",
    operatingHours: {
      weekday: "11:30 - 22:00",
      weekend: "11:30 - 22:00",
    },
    position: { lat: 37.542012, lng: 127.070987 },
    menu: [
      { item: "고등어구이", price: "13,000원" },
      { item: "삼치구이", price: "15,000원" },
      { item: "갈치구이", price: "18,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 9,
    name: "탄두리",
    category: "인도식",
    rating: "4.5",
    goodText: "커리가 맛있고 난이 쫄깃해요",
    badText: "향신료 냄새가 강해요",
    address: "서울 광진구 화양동 15-3",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.540789, lng: 127.071345 },
    menu: [
      { item: "버터치킨", price: "18,000원" },
      { item: "탄두리치킨", price: "19,000원" },
      { item: "난", price: "3,000원" },
    ],
    image: "/images/인도식.png",
  },
  {
    id: 10,
    name: "쌀국수 익스프레스",
    category: "동남아식",
    rating: "4.3",
    goodText: "국물이 깔끔하고 고기가 많아요",
    badText: "자리가 좀 불편해요",
    address: "서울 광진구 화양동 41-12",
    hours: "10:30 - 21:00",
    operatingHours: {
      weekday: "10:30 - 21:00",
      weekend: "10:30 - 21:00",
    },
    position: { lat: 37.541234, lng: 127.071789 },
    menu: [
      { item: "쌀국수", price: "9,000원" },
      { item: "분짜", price: "11,000원" },
      { item: "월남쌈", price: "12,000원" },
    ],
    image: "/images/동남아식.png",
  },
  {
    id: 11,
    name: "리코타",
    category: "양식",
    rating: "4.6",
    goodText: "피자가 정통 이탈리안 스타일이에요",
    badText: "웨이팅이 길어요",
    address: "서울 광진구 화양동 38-19",
    hours: "11:30 - 22:00",
    operatingHours: {
      weekday: "11:30 - 22:00",
      weekend: "11:30 - 22:00",
    },
    position: { lat: 37.541567, lng: 127.070234 },
    menu: [
      { item: "마르게리타 피자", price: "18,000원" },
      { item: "까르보나라", price: "16,000원" },
      { item: "티라미수", price: "7,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 12,
    name: "왕돈까스",
    category: "일식",
    rating: "4.4",
    goodText: "돈까스가 두껍고 육즙이 가득해요",
    badText: "소스가 조금 달아요",
    address: "서울 광진구 화양동 42-8",
    hours: "11:00 - 21:30",
    operatingHours: {
      weekday: "11:00 - 21:30",
      weekend: "11:00 - 21:30",
    },
    position: { lat: 37.541678, lng: 127.070876 },
    menu: [
      { item: "왕돈까스", price: "11,000원" },
      { item: "치즈돈까스", price: "13,000원" },
      { item: "카레돈까스", price: "12,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 13,
    name: "매화반점",
    category: "중식",
    rating: "4.5",
    goodText: "양이 많고 가성비가 좋아요",
    badText: "가게가 좀 오래됐어요",
    address: "서울 광진구 화양동 36-7",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00",
    },
    position: { lat: 37.541345, lng: 127.071123 },
    menu: [
      { item: "짜장면", price: "6,000원" },
      { item: "짬뽕", price: "7,000원" },
      { item: "탕수육", price: "18,000원" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 14,
    name: "브라질리안 바베큐",
    category: "남미식",
    rating: "4.7",
    goodText: "고기 퀄리티가 좋고 다양해요",
    badText: "가격대가 있는 편이에요",
    address: "서울 광진구 화양동 40-1",
    hours: "17:00 - 23:00",
    operatingHours: {
      weekday: "17:00 - 23:00",
      weekend: "17:00 - 23:00",
    },
    position: { lat: 37.54189, lng: 127.070654 },
    menu: [
      { item: "바베큐 무제한", price: "39,900원" },
      { item: "피칸야", price: "35,000원" },
      { item: "파오 지 케이조", price: "8,000원" },
    ],
    image: "/images/남미식.png",
  },
  {
    id: 15,
    name: "터키케밥",
    category: "중동식",
    rating: "4.4",
    goodText: "케밥이 정통 터키식이에요",
    badText: "자리가 별로 없어요",
    address: "서울 광진구 화양동 33-5",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.541432, lng: 127.071345 },
    menu: [
      { item: "터키케밥", price: "8,000원" },
      { item: "케밥라이스", price: "9,000원" },
      { item: "팔라펠", price: "7,000원" },
    ],
    image: "/images/중동식.png",
  },
];

function KakaoMap() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&libraries=services&autoload=false&_=${Date.now()}`;

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

      document.head.appendChild(script);
    } else if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => initializeMap());
    }
  }, []);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) return;

    const container = document.getElementById("map");
    if (!container) return;

    const options = {
      center: new window.kakao.maps.LatLng(37.541012, 127.070798),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    restaurantData.forEach((place) => {
      const markerPosition = new window.kakao.maps.LatLng(
        place.position.lat,
        place.position.lng
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        setSelectedRestaurant(place);
        map.panTo(markerPosition);
      });
    });

    window.kakao.maps.event.addListener(map, "click", () => {
      setSelectedRestaurant(null);
    });

    map.setOptions({
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
    });
  };

  return (
    <div className="relative flex w-full h-screen bg-gray-100">
      <div className="w-1/4 h-full bg-white border-r-2 border-gray-300">
        <div className="relative h-full overflow-hidden border-2 border-black rounded-r-xl">
          <LeftSide
            restaurantData={restaurantData}
            onSelectRestaurant={setSelectedRestaurant}
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
            onClose={() => setSelectedRestaurant(null)}
          />
        )}
      </div>
      <Common />
    </div>
  );
}

export default KakaoMap;
