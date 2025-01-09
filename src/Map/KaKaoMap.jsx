// KakaoMap.jsx
import { useEffect, useState } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

const restaurantData = [
  {
    // 서울 동대문구 지역 가게들
    id: 1,
    name: "안녕돈까스",
    category: "일식",
    rating: "4.2",
    dislikeRating: "3.2",
    goodText: "가성비가 좋고 맛있어요",
    badText: "가게가 좁아요",
    address: "서울 동대문구 경희대로길11 1층(02454)",
    hours: "매일 10:00 ~ 22:30",
    operatingHours: {
      weekday: "10:00 ~ 22:30",
      weekend: "10:00 ~ 22:30",
    },
    position: { lat: 37.591832, lng: 127.059486 },

    like_points: [
      { category: "맛", score: "6" },
      { category: "친절", score: "4" },
      { category: "분위기", score: "4" },
      { category: "가성비", score: "3" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 2,
    name: "오니기리와이규동",
    category: "일식",
    rating: "4.5",
    dislikeRating: "3.1",
    goodText: "규동이 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 동대문구 이문로95길59 1층(02452)",
    hours: "월화수목금토일 11:00 ~ 20:30",
    operatingHours: {
      weekday: "11:00 ~ 20:30",
      weekend: "11:00 ~ 20:30",
    },
    position: { lat: 37.590234, lng: 127.058923 },
    like_points: [
      { category: "맛", score: "19" },
      { category: "친절", score: "17" },
      { category: "분위기", score: "13" },
      { category: "가성비", score: "12" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 3,
    name: "치치치킨 이문점",
    category: "양식",
    rating: "4.2",
    dislikeRating: "3.3",
    goodText: "치킨이 바삭바삭해요",
    badText: "배달 시간이 오래 걸려요",
    address: "서울 동대문구 이문로125 1층(02454)",
    hours: "월화수목금토일15:00 ~ 24:00",
    operatingHours: {
      weekday: "15:00 ~ 24:00",
      weekend: "15:00 ~ 24:00",
    },
    position: { lat: 37.591567, lng: 127.060123 },
    like_points: [
      { category: "맛", score: "5" },
      { category: "가성비", score: "4" },
      { category: "친절", score: "4" },
      { category: "분위기", score: "4" },
      { category: "주차", score: "1" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 4,
    name: "초록하늘",
    category: "한식",
    rating: "3.8",
    dislikeRating: "3.0",
    goodText: "분위기가 좋아요",
    badText: "주차가 어려워요",
    address: "서울 동대문구 경희대로길3-4 (02453)",
    hours: "월~금: 10:00 ~ 19:50, 토: 10:00 ~ 16:30",
    operatingHours: {
      weekday: "10:00 ~ 19:50",
      weekend: "10:00 ~ 16:30",
    },
    position: { lat: 37.591234, lng: 127.059234 },
    like_points: [
      { category: "가성비", score: "8" },
      { category: "맛", score: "5" },
      { category: "친절", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 5,
    name: "이문스테이크발바닥",
    category: "양식",
    rating: "3.6",
    dislikeRating: "3.1",
    goodText: "스테이크가 맛있어요",
    badText: "가격이 조금 비싸요",
    address: "서울 동대문구 이문로158 1층(02460)",
    hours: "매일: 11:30 ~ 01:00",
    operatingHours: {
      weekday: "11:30 ~ 01:00",
      weekend: "11:30 ~ 01:00",
    },
    position: { lat: 37.592123, lng: 127.060567 },
    like_points: [
      { category: "맛", score: "21" },
      { category: "친절", score: "6" },
      { category: "가성비", score: "4" },
      { category: "분위기", score: "2" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 6,
    name: "이문풍컵비빔밥",
    category: "한식",
    rating: "3.7",
    dislikeRating: "3.0",
    goodText: "비빔밥이 든든해요",
    badText: "좌석이 불편해요",
    address: "서울 동대문구 외대로54 1층(02443)",
    hours: "매일: 11:00 ~ 21:00, 매일 라스트오더: 20:30",
    operatingHours: {
      weekday: "11:00 ~ 21:00",
      weekend: "11:00 ~ 21:00",
    },
    position: { lat: 37.591789, lng: 127.059876 },
    like_points: [
      { category: "맛", score: "6" },
      { category: "가성비", score: "3" },
      { category: "친절", score: "1" },
      { category: "분위기", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 7,
    name: "기기가좋케요",
    category: "한식",
    rating: "3.4",
    dislikeRating: "2.9",
    goodText: "가격이 저렴해요",
    badText: "웨이팅이 있어요",
    address: "서울 동대문구 이문로1길25 1층(02453)",
    hours: "월~토: 10:30 ~ 24:00, 일: 10:30 ~ 22:00",
    operatingHours: {
      weekday: "10:30 ~ 24:00",
      weekend: "10:30 ~ 22:00",
    },
    position: { lat: 37.591956, lng: 127.059234 },
    like_points: [
      { category: "가성비", score: "13" },
      { category: "맛", score: "12" },
      { category: "분위기", score: "4" },
      { category: "친절", score: "3" },
    ],
    image: "/images/한식.png",
  },
  {
    // 서대문구 지역 가게들
    id: 8,
    name: "가평양조이대학로",
    category: "한식",
    rating: "2.8",
    dislikeRating: "2.7",
    goodText: "분위기가 좋아요",
    badText: "메뉴가 단조로워요",
    address: "서울 서대문구 대흥로5길7-3 1층(03766)",
    hours: "매일: 11:00 ~ 20:00, 매일 브레이크타임: 14:50 ~ 17:00",
    operatingHours: {
      weekday: "11:00 ~ 20:00",
      weekend: "11:00 ~ 20:00",
    },
    position: { lat: 37.556234, lng: 126.943567 },
    like_points: [
      { category: "맛", score: "17" },
      { category: "분위기", score: "8" },
      { category: "친절", score: "7" },
      { category: "가성비", score: "5" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 9,
    name: "고색집",
    category: "한식",
    rating: "4.1",
    dislikeRating: "3.2",
    goodText: "전통 한식의 맛이 좋아요",
    badText: "주차공간이 부족해요",
    address: "서울 서대문구 성세로말길 30 (03777)",
    hours: "월~토: 10:00 ~ 22:00, 월~토 라스트오더: ~ 21:20",
    operatingHours: {
      weekday: "10:00 ~ 22:00",
      weekend: "10:00 ~ 22:00",
    },
    position: { lat: 37.556789, lng: 126.943912 },
    like_points: [
      { category: "맛", score: "22" },
      { category: "친절", score: "16" },
      { category: "가성비", score: "15" },
      { category: "분위기", score: "3" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 10,
    name: "마더러브베이킹(대학로)",
    category: "카페",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "빵이 신선해요",
    badText: "자리가 부족해요",
    address: "서울 서대문구 대흥로5길5 1층(03766)",
    hours: "월~금: 08:30 ~ 16:30, 토: 10:00 ~ 16:30",
    operatingHours: {
      weekday: "08:30 ~ 16:30",
      weekend: "10:00 ~ 16:30",
    },
    position: { lat: 37.556123, lng: 126.943234 },
    like_points: [],
    image: "/images/카페.png",
  },
  {
    id: 11,
    name: "비듬",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.3",
    goodText: "분위기가 좋고 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 서대문구 대흥로7길48 경국빌딩 1층 101호(03766)",
    hours: "월~토: 08:30 ~ 21:00, 일: 09:00 ~ 17:00",
    operatingHours: {
      weekday: "08:30 ~ 21:00",
      weekend: "09:00 ~ 17:00",
    },
    position: { lat: 37.556567, lng: 126.944123 },
    like_points: [
      { category: "맛", score: "14" },
      { category: "친절", score: "9" },
      { category: "가성비", score: "5" },
      { category: "분위기", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 12,
    name: "비아37 신촌본점",
    category: "이태리안",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "파스타가 맛있어요",
    badText: "웨이팅이 길어요",
    address: "서울 서대문구 대흥로길77-1 (03766)",
    hours: "월~토: 11:30 ~ 21:00, 월~토 브레이크타임: 14:30 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 21:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.55689, lng: 126.944567 },
    like_points: [],
    image: "/images/양식.png",
  },
  {
    id: 13,
    name: "순대",
    category: "한식",
    rating: "4.1",
    dislikeRating: "3.1",
    goodText: "순대가 쫄깃하고 맛있어요",
    badText: "좌석이 좀 불편해요",
    address: "서울 서대문구 대흥로3길12 1층(03766)",
    hours: "월~금: 12:00 ~ 23:20, 토~일: 12:00 ~ 21:20",
    operatingHours: {
      weekday: "12:00 ~ 23:20",
      weekend: "12:00 ~ 21:20",
    },
    position: { lat: 37.556345, lng: 126.943789 },
    like_points: [
      { category: "맛", score: "23" },
      { category: "가성비", score: "13" },
      { category: "친절", score: "12" },
      { category: "분위기", score: "9" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 14,
    name: "튀건 대학로",
    category: "한식",
    rating: "4.1",
    dislikeRating: "3.2",
    goodText: "튀김이 바삭바삭해요",
    badText: "기름진 맛이 있어요",
    address: "서울 서대문구 대흥로길37 2층(03766)",
    hours: "매일 11:00 ~ 22:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.556678, lng: 126.944345 },
    like_points: [
      { category: "맛", score: "16" },
      { category: "친절", score: "13" },
      { category: "가성비", score: "12" },
      { category: "분위기", score: "8" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 15,
    name: "여락 대흥",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.3",
    goodText: "전통 한식의 맛이 살아있어요",
    badText: "주차가 어려워요",
    address: "서울 서대문구 대흥로길52-31 1층(03765)",
    hours: "월~금: 10:00 ~ 21:30, 토~일: 09:00 ~ 21:30",
    operatingHours: {
      weekday: "10:00 ~ 21:30",
      weekend: "09:00 ~ 21:30",
    },
    position: { lat: 37.556912, lng: 126.944789 },
    like_points: [
      { category: "맛", score: "33" },
      { category: "분위기", score: "30" },
      { category: "친절", score: "21" },
      { category: "가성비", score: "6" },
      { category: "주차", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 16,
    name: "커피베케이크카페",
    category: "카페",
    rating: "3.5",
    dislikeRating: "3.0",
    goodText: "커피가 맛있어요",
    badText: "자리가 부족할 때가 있어요",
    address: "서울 서대문구 신촌로241 2,3층(03774)",
    hours: "매일 08:00 ~ 20:00",
    operatingHours: {
      weekday: "08:00 ~ 20:00",
      weekend: "08:00 ~ 20:00",
    },
    position: { lat: 37.557234, lng: 126.936789 },
    like_points: [
      { category: "맛", score: "16" },
      { category: "분위기", score: "5" },
      { category: "친절", score: "4" },
    ],
    image: "/images/카페.png",
  },
  {
    // 신촌/이대 지역 가게들
    id: 17,
    name: "카우앤독",
    category: "양식",
    rating: "3.7",
    dislikeRating: "3.1",
    goodText: "스테이크가 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 서대문구 대흥로길88-21 1층(03765)",
    hours: "월화수목금토일 11:00 ~ 22:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.557567, lng: 126.945123 },
    like_points: [
      { category: "맛", score: "6" },
      { category: "가성비", score: "3" },
      { category: "친절", score: "3" },
      { category: "분위기", score: "2" },
      { category: "주차", score: "1" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 18,
    name: "하늘초밥",
    category: "일식",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "초밥이 신선해요",
    badText: "좌석이 좀 불편해요",
    address: "서울 서대문구 대흥로2길14 1층(03767)",
    hours: "월~토: 11:30 ~ 22:00, 월~토 브레이크타임: 14:00 ~ 16:30",
    operatingHours: {
      weekday: "11:30 ~ 22:00",
      weekend: "11:30 ~ 22:00",
    },
    position: { lat: 37.557123, lng: 126.943567 },
    like_points: [],
    image: "/images/일식.png",
  },
  {
    id: 19,
    name: "미스터서정만두",
    category: "중식",
    rating: "4.5",
    dislikeRating: "3.3",
    goodText: "만두가 알차고 맛있어요",
    badText: "웨이팅이 있어요",
    address: "서울 서대문구 신촌역로 16 103호(03766)",
    hours: "매일: 11:00 ~ 21:00, 매일 브레이크타임: 15:00 ~ 16:00",
    operatingHours: {
      weekday: "11:00 ~ 21:00",
      weekend: "11:00 ~ 21:00",
    },
    position: { lat: 37.558234, lng: 126.937234 },
    like_points: [
      { category: "맛", score: "57" },
      { category: "가성비", score: "33" },
      { category: "친절", score: "12" },
      { category: "분위기", score: "5" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 20,
    name: "파바구리",
    category: "양식",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "파스타가 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 서대문구 명물길50-9 1층(03777)",
    hours: "월~토: 11:30 ~ 20:00, 일: 11:30 ~ 21:00",
    operatingHours: {
      weekday: "11:30 ~ 20:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.558567, lng: 126.93789 },
    like_points: [],
    image: "/images/양식.png",
  },
  {
    id: 21,
    name: "수주갑짬뽕",
    category: "중식",
    rating: "3.3",
    dislikeRating: "2.9",
    goodText: "짬뽕이 시원하고 맛있어요",
    badText: "매장이 좁아요",
    address: "서울 서대문구 대흥로2가길18 (03767)",
    hours: "매일: 11:40 ~ 21:10, 매일 브레이크타임: 14:50 ~ 16:10",
    operatingHours: {
      weekday: "11:40 ~ 21:10",
      weekend: "11:40 ~ 21:10",
    },
    position: { lat: 37.556789, lng: 126.94389 },
    like_points: [
      { category: "맛", score: "12" },
      { category: "가성비", score: "4" },
      { category: "친절", score: "3" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 22,
    name: "김광석신촌치킨점",
    category: "양식",
    rating: "3.6",
    dislikeRating: "3.0",
    goodText: "치킨이 바삭하고 맛있어요",
    badText: "배달이 조금 늦어요",
    address: "서울 마포구 신촌로124 (04101)",
    hours: "매일: 10:00 ~ 24:00",
    operatingHours: {
      weekday: "10:00 ~ 24:00",
      weekend: "10:00 ~ 24:00",
    },
    position: { lat: 37.558123, lng: 126.937567 },
    like_points: [
      { category: "맛", score: "15" },
      { category: "친절", score: "11" },
      { category: "가성비", score: "10" },
      { category: "분위기", score: "3" },
      { category: "주차", score: "1" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 23,
    name: "롤앤롤김밥",
    category: "한식",
    rating: "3.8",
    dislikeRating: "3.1",
    goodText: "김밥이 신선하고 맛있어요",
    badText: "웨이팅이 있어요",
    address: "서울 마포구 백범로74 1층 101호(04110)",
    hours: "월~금: 08:00 ~ 20:30, 토~일: 08:00 ~ 20:00",
    operatingHours: {
      weekday: "08:00 ~ 20:30",
      weekend: "08:00 ~ 20:00",
    },
    position: { lat: 37.55789, lng: 126.936234 },
    like_points: [
      { category: "맛", score: "22" },
      { category: "친절", score: "13" },
      { category: "가성비", score: "11" },
      { category: "분위기", score: "8" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 24,
    name: "스키야",
    category: "일식",
    rating: "4.2",
    dislikeRating: "3.2",
    goodText: "돈까스가 두툼하고 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 마포구 백범로0길12 2층(04149)",
    hours: "월~토: 11:00 ~ 22:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.557678, lng: 126.93589 },
    like_points: [
      { category: "맛", score: "16" },
      { category: "분위기", score: "15" },
      { category: "친절", score: "9" },
      { category: "가성비", score: "3" },
      { category: "주차", score: "1" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 25,
    name: "홍대개미 본점",
    category: "한식",
    rating: "4.2",
    dislikeRating: "3.3",
    goodText: "전통 한식의 맛이 좋아요",
    badText: "주차가 어려워요",
    address: "서울 마포구 어울길24 (04138)",
    hours: "매일: 11:00 ~ 22:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.552567, lng: 126.925678 },
    like_points: [
      { category: "맛", score: "244" },
      { category: "분위기", score: "76" },
      { category: "친절", score: "71" },
      { category: "가성비", score: "25" },
      { category: "주차", score: "19" },
    ],
    image: "/images/한식.png",
  },
  {
    // 마포구 지역 가게들
    id: 26,
    name: "정정 공덕1호점",
    category: "한식",
    rating: "3.9",
    dislikeRating: "3.1",
    goodText: "분위기가 좋고 깔끔해요",
    badText: "가격이 조금 있어요",
    address: "서울 마포구 백범로4길27 1층(04149)",
    hours: "월~금: 11:00 ~ 21:00, 토~일: 11:30 ~ 21:00",
    operatingHours: {
      weekday: "11:00 ~ 21:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.547234, lng: 126.935234 },
    like_points: [
      { category: "맛", score: "32" },
      { category: "친절", score: "18" },
      { category: "분위기", score: "13" },
      { category: "가성비", score: "11" },
      { category: "주차", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 27,
    name: "평양막",
    category: "한식",
    rating: "4.5",
    dislikeRating: "3.3",
    goodText: "전통의 맛이 살아있어요",
    badText: "웨이팅이 길 수 있어요",
    address: "서울 마포구 광성로길10 1층(04096)",
    hours: "월화수목금토일: 10:30 ~ 20:00",
    operatingHours: {
      weekday: "10:30 ~ 20:00",
      weekend: "10:30 ~ 20:00",
    },
    position: { lat: 37.547567, lng: 126.93489 },
    like_points: [
      { category: "맛", score: "48" },
      { category: "가성비", score: "48" },
      { category: "친절", score: "42" },
      { category: "분위기", score: "6" },
      { category: "주차", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 28,
    name: "부갱",
    category: "양식",
    rating: "3.0",
    dislikeRating: "2.8",
    goodText: "파스타가 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 마포구 백범로0길28 1층(04151)",
    hours: "매일: 11:30 ~ 23:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 23:00",
      weekend: "11:30 ~ 23:00",
    },
    position: { lat: 37.547123, lng: 126.935567 },
    like_points: [
      { category: "분위기", score: "9" },
      { category: "맛", score: "7" },
      { category: "친절", score: "6" },
      { category: "가성비", score: "3" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 29,
    name: "부든그룹",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.2",
    goodText: "한식의 깊은 맛이 있어요",
    badText: "주차가 어려워요",
    address: "서울 마포구 숭문로239 1층 101호(04096)",
    hours: "월~토: 11:30 ~ 21:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 21:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.547456, lng: 126.934234 },
    like_points: [
      { category: "맛", score: "26" },
      { category: "친절", score: "16" },
      { category: "분위기", score: "15" },
      { category: "가성비", score: "12" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 30,
    name: "쿠쿠미떡볶이스 신촌본점",
    category: "분식",
    rating: "2.6",
    dislikeRating: "2.5",
    goodText: "떡볶이가 맛있어요",
    badText: "웨이팅이 길어요",
    address: "서울 마포구 백범로길21 1층(04101)",
    hours: "매일: 11:30 ~ 22:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 22:00",
      weekend: "11:30 ~ 22:00",
    },
    position: { lat: 37.55789, lng: 126.936567 },
    like_points: [
      { category: "맛", score: "5" },
      { category: "분위기", score: "4" },
      { category: "친절", score: "3" },
      { category: "가성비", score: "2" },
    ],
    image: "/images/분식.png",
  },
  {
    id: 31,
    name: "팔삭주",
    category: "한식",
    rating: "3.8",
    dislikeRating: "3.0",
    goodText: "안주가 맛있어요",
    badText: "저녁에는 사람이 많아요",
    address: "서울 마포구 백범로0길24-5 상수일번가1층(04151)",
    hours: "월~금: 11:30 ~ 22:00, 토~일: 11:00 ~ 21:00",
    operatingHours: {
      weekday: "11:30 ~ 22:00",
      weekend: "11:00 ~ 21:00",
    },
    position: { lat: 37.547789, lng: 126.935789 },
    like_points: [
      { category: "맛", score: "18" },
      { category: "분위기", score: "14" },
      { category: "친절", score: "9" },
      { category: "가성비", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    // 서대문구 성산/연희동 지역 가게들
    id: 32,
    name: "신규식당",
    category: "한식",
    rating: "4.0",
    dislikeRating: "3.1",
    goodText: "한식의 정성이 느껴져요",
    badText: "주차가 불편해요",
    address: "서울 서대문구 성세로42-24 1층(03776)",
    hours: "매일: 11:30 ~ 21:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 21:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.553567, lng: 126.945234 },
    like_points: [
      { category: "맛", score: "59" },
      { category: "분위기", score: "39" },
      { category: "친절", score: "20" },
      { category: "가성비", score: "16" },
      { category: "주차", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 33,
    name: "살사삭",
    category: "양식",
    rating: "4.6",
    dislikeRating: "3.4",
    goodText: "치킨이 바삭하고 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 서대문구 성세로27-1 3층(03788)",
    hours: "월~토: 11:00 ~ 22:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.553234, lng: 126.945678 },
    like_points: [
      { category: "맛", score: "96" },
      { category: "친절", score: "72" },
      { category: "분위기", score: "45" },
      { category: "가성비", score: "29" },
      { category: "주차", score: "2" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 34,
    name: "김석초밥",
    category: "일식",
    rating: "3.7",
    dislikeRating: "3.0",
    goodText: "초밥이 신선해요",
    badText: "좌석이 좀 불편해요",
    address: "서울 서대문구 성세로길37 1층 102호(03787)",
    hours: "월~토: 11:30 ~ 23:00, 브레이크타임: 15:00 ~ 17:00",
    operatingHours: {
      weekday: "11:30 ~ 23:00",
      weekend: "11:30 ~ 23:00",
    },
    position: { lat: 37.55389, lng: 126.94589 },
    like_points: [
      { category: "맛", score: "6" },
      { category: "가성비", score: "5" },
      { category: "친절", score: "3" },
      { category: "분위기", score: "3" },
      { category: "주차", score: "1" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 35,
    name: "공닭식당",
    category: "한식",
    rating: "3.5",
    dislikeRating: "2.9",
    goodText: "닭요리가 맛있어요",
    badText: "매장이 좀 좁아요",
    address: "서울 서대문구 성세로2길23 1층(03776)",
    hours: "매일: 16:00 ~ 23:00",
    operatingHours: {
      weekday: "16:00 ~ 23:00",
      weekend: "16:00 ~ 23:00",
    },
    position: { lat: 37.553456, lng: 126.945123 },
    like_points: [
      { category: "맛", score: "8" },
      { category: "친절", score: "5" },
      { category: "분위기", score: "3" },
      { category: "가성비", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 36,
    name: "쿡싸 파희",
    category: "양식",
    rating: "4.2",
    dislikeRating: "3.2",
    goodText: "파스타가 맛있어요",
    badText: "주차가 어려워요",
    address: "서울 서대문구 증가로48 프로보 (03698)",
    hours: "월~토: 09:00 ~ 16:00, 일: 11:00 ~ 16:00",
    operatingHours: {
      weekday: "09:00 ~ 16:00",
      weekend: "11:00 ~ 16:00",
    },
    position: { lat: 37.554234, lng: 126.946234 },
    like_points: [
      { category: "맛", score: "32" },
      { category: "친절", score: "25" },
      { category: "분위기", score: "23" },
      { category: "가성비", score: "13" },
      { category: "주차", score: "7" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 37,
    name: "오늘통닭 신촌직영점",
    category: "한식",
    rating: "3.2",
    dislikeRating: "2.8",
    goodText: "치킨이 바삭해요",
    badText: "가격이 조금 있어요",
    address: "서울 서대문구 성세로1길8 1~3층(03788)",
    hours: "매일: 11:00 ~ 02:00",
    operatingHours: {
      weekday: "11:00 ~ 02:00",
      weekend: "11:00 ~ 02:00",
    },
    position: { lat: 37.553789, lng: 126.945567 },
    like_points: [
      { category: "맛", score: "6" },
      { category: "친절", score: "3" },
      { category: "분위기", score: "3" },
      { category: "가성비", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 38,
    name: "강남불막 3호점",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.3",
    goodText: "고기가 신선하고 맛있어요",
    badText: "웨이팅이 길 수 있어요",
    address: "서울 서대문구 성세로길6 1층(03779)",
    hours: "매일: 10:00 ~ 23:00",
    operatingHours: {
      weekday: "10:00 ~ 23:00",
      weekend: "10:00 ~ 23:00",
    },
    position: { lat: 37.553567, lng: 126.94589 },
    like_points: [
      { category: "맛", score: "62" },
      { category: "가성비", score: "53" },
      { category: "친절", score: "42" },
      { category: "분위기", score: "37" },
      { category: "주차", score: "12" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 39,
    name: "부잣이들",
    category: "중식",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "중식의 정통 맛이 있어요",
    badText: "가격대가 있어요",
    address: "서울 서대문구 성세로옆길 33 1층(03787)",
    hours: "월~토: 12:00 ~ 23:00",
    operatingHours: {
      weekday: "12:00 ~ 23:00",
      weekend: "12:00 ~ 23:00",
    },
    position: { lat: 37.55389, lng: 126.946123 },
    like_points: [],
    image: "/images/중식.png",
  },
  {
    id: 40,
    name: "명성칼국수본점",
    category: "한식",
    rating: "4.1",
    dislikeRating: "3.1",
    goodText: "칼국수가 시원해요",
    badText: "저녁에는 일찍 마감해요",
    address: "서울 서대문구 성세로길33 1층(03777)",
    hours: "매일: 15:00 ~ 23:00",
    operatingHours: {
      weekday: "15:00 ~ 23:00",
      weekend: "15:00 ~ 23:00",
    },
    position: { lat: 37.553234, lng: 126.946234 },
    like_points: [
      { category: "맛", score: "8" },
      { category: "친절", score: "7" },
      { category: "가성비", score: "1" },
      { category: "분위기", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    // 동대문구 회기/경희대 지역 가게들
    id: 41,
    name: "정육면체",
    category: "한식",
    rating: "3.7",
    dislikeRating: "3.0",
    goodText: "고기가 신선하고 맛있어요",
    badText: "주차가 불편해요",
    address: "서울 서대문구 성세로북길 22-8 1층(03789)",
    hours: "매일: 11:30 ~ 21:00",
    operatingHours: {
      weekday: "11:30 ~ 21:00",
      weekend: "11:30 ~ 21:00",
    },
    position: { lat: 37.593567, lng: 127.05889 },
    like_points: [
      { category: "맛", score: "79" },
      { category: "친절", score: "38" },
      { category: "분위기", score: "37" },
      { category: "가성비", score: "26" },
      { category: "주차", score: "6" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 42,
    name: "카츠몽",
    category: "일식",
    rating: "4.3",
    dislikeRating: "3.2",
    goodText: "돈까스가 두툼하고 맛있어요",
    badText: "웨이팅이 있어요",
    address: "서울 서대문구 성세로길32 1층(03789)",
    hours: "매일: 11:00 ~ 21:40",
    operatingHours: {
      weekday: "11:00 ~ 21:40",
      weekend: "11:00 ~ 21:40",
    },
    position: { lat: 37.593234, lng: 127.059123 },
    like_points: [
      { category: "맛", score: "52" },
      { category: "가성비", score: "37" },
      { category: "친절", score: "21" },
      { category: "분위기", score: "9" },
      { category: "주차", score: "1" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 43,
    name: "먹고싶은돈까스명성피자앤돈까스",
    category: "양식",
    rating: "5.0",
    dislikeRating: "3.5",
    goodText: "돈까스와 피자 모두 맛있어요",
    badText: "가격이 조금 있어요",
    address: "서울 동대문구 외대로65 1층(02451)",
    hours: "매일: 12:00 ~ 22:30",
    operatingHours: {
      weekday: "12:00 ~ 22:30",
      weekend: "12:00 ~ 22:30",
    },
    position: { lat: 37.59389, lng: 127.059567 },
    like_points: [
      { category: "맛", score: "4" },
      { category: "가성비", score: "4" },
      { category: "친절", score: "2" },
      { category: "분위기", score: "1" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 44,
    name: "서화금깜마라샹궈치",
    category: "중식",
    rating: "5.0",
    dislikeRating: "3.4",
    goodText: "마라 맛이 정통이에요",
    badText: "매운 음식이 많아요",
    address: "서울 동대문구 약령로7-1 3층(02419)",
    hours: "매일: 10:30 ~ 01:30",
    operatingHours: {
      weekday: "10:30 ~ 01:30",
      weekend: "10:30 ~ 01:30",
    },
    position: { lat: 37.593456, lng: 127.05989 },
    like_points: [],
    image: "/images/중식.png",
  },
  {
    id: 45,
    name: "이상욱돈볶이지",
    category: "한식",
    rating: "3.9",
    dislikeRating: "3.1",
    goodText: "돈까스가 바삭하고 맛있어요",
    badText: "좌석이 좀 불편해요",
    address: "서울 동대문구 약령로가길6 1층(02441)",
    hours: "월화수목금토일: 11:00 ~ 21:00",
    operatingHours: {
      weekday: "11:00 ~ 21:00",
      weekend: "11:00 ~ 21:00",
    },
    position: { lat: 37.594234, lng: 127.060123 },
    like_points: [
      { category: "맛", score: "7" },
      { category: "가성비", score: "4" },
      { category: "분위기", score: "4" },
      { category: "친절", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 46,
    name: "팔찌 한양대",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.2",
    goodText: "전통 한식의 맛이 좋아요",
    badText: "주차가 어려워요",
    address: "서울 동대문구 천장로 36 지하층(02405)",
    hours: "월~금: 10:30 ~ 20:30",
    operatingHours: {
      weekday: "10:30 ~ 20:30",
      weekend: "10:30 ~ 20:30",
    },
    position: { lat: 37.593789, lng: 127.060567 },
    like_points: [
      { category: "맛", score: "3" },
      { category: "가성비", score: "2" },
      { category: "친절", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 47,
    name: "청기와정육식당 본점",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.3",
    goodText: "고기가 신선하고 맛있어요",
    badText: "웨이팅이 있어요",
    address: "서울 동대문구 약령로길4 1층(02440)",
    hours: "매일: 00:00 ~ 24:00",
    operatingHours: {
      weekday: "00:00 ~ 24:00",
      weekend: "00:00 ~ 24:00",
    },
    position: { lat: 37.593567, lng: 127.06089 },
    like_points: [
      { category: "맛", score: "4" },
      { category: "가성비", score: "4" },
      { category: "친절", score: "3" },
      { category: "분위기", score: "3" },
      { category: "주차", score: "2" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 48,
    name: "슬로우스톡 한양대",
    category: "양식",
    rating: "0.0",
    dislikeRating: "0.0",
    goodText: "스테이크가 부드러워요",
    badText: "가격대가 있어요",
    address: "서울 동대문구 약령로가길5 1층(02441)",
    hours: "매일: 11:00 ~ 21:30",
    operatingHours: {
      weekday: "11:00 ~ 21:30",
      weekend: "11:00 ~ 21:30",
    },
    position: { lat: 37.59389, lng: 127.061123 },
    like_points: [],
    image: "/images/양식.png",
  },
  {
    id: 49,
    name: "베브리즈 한국한양대",
    category: "카페",
    rating: "4.3",
    dislikeRating: "3.2",
    goodText: "커피가 맛있어요",
    badText: "자리가 부족할 때가 있어요",
    address: "서울 동대문구 약령로4-10 1층(02440)",
    hours: "월~금: 09:00 ~ 23:00, 토~일:10:00 ~ 22:00",
    operatingHours: {
      weekday: "09:00 ~ 23:00",
      weekend: "10:00 ~ 22:00",
    },
    position: { lat: 37.594234, lng: 127.061567 },
    like_points: [
      { category: "맛", score: "9" },
      { category: "분위기", score: "7" },
      { category: "가성비", score: "2" },
      { category: "친절", score: "2" },
    ],
    image: "/images/카페.png",
  },
  {
    id: 50,
    name: "무추로",
    category: "한식",
    rating: "4.7",
    dislikeRating: "3.4",
    goodText: "한식의 깊은 맛이 있어요",
    badText: "주차가 어려워요",
    address: "서울 동대문구 외대로2길4-19 1층(02443)",
    hours: "월화수목금토일: 11:00 ~ 22:00",
    operatingHours: {
      weekday: "11:00 ~ 22:00",
      weekend: "11:00 ~ 22:00",
    },
    position: { lat: 37.594567, lng: 127.06189 },
    like_points: [
      { category: "맛", score: "16" },
      { category: "친절", score: "14" },
      { category: "분위기", score: "10" },
      { category: "가성비", score: "7" },
      { category: "주차", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 51,
    name: "봉구9",
    category: "한식",
    rating: "4.3",
    dislikeRating: "3.2",
    goodText: "맛있고 가성비가 좋아요",
    badText: "주차가 어려워요",
    address: "서울 동대문구 천장로4길36 (02405)",
    hours:
      "매일: 11:00 ~ 20:30, 매일 브레이크타임: 15:30 ~ 16:30, 매일 접수마감: ~ 20:00",
    operatingHours: {
      weekday: "11:00 ~ 20:30",
      weekend: "11:00 ~ 20:30",
    },
    position: { lat: 37.593678, lng: 127.060234 },
    like_points: [
      { category: "맛", score: "14" },
      { category: "가성비", score: "9" },
      { category: "친절", score: "5" },
      { category: "분위기", score: "5" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 52,
    name: "번패슈번 한양대",
    category: "한식",
    rating: "4.3",
    dislikeRating: "3.2",
    goodText: "맛있고 친절해요",
    badText: "주차공간이 부족해요",
    address: "서울 동대문구 약령로13 1,2층(02419)",
    hours: "매일: 11:00 ~ 21:30, 매일 라스트오더: ~ 21:00",
    operatingHours: {
      weekday: "11:00 ~ 21:30",
      weekend: "11:00 ~ 21:30",
    },
    position: { lat: 37.593912, lng: 127.060567 },
    like_points: [
      { category: "맛", score: "10" },
      { category: "친절", score: "9" },
      { category: "분위기", score: "4" },
      { category: "가성비", score: "2" },
      { category: "주차", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 53,
    name: "신대한돈가스랩",
    category: "한식",
    rating: "3.3",
    dislikeRating: "2.9",
    goodText: "가성비가 좋아요",
    badText: "자리가 좀 좁아요",
    address: "서울 동대문구 약령로길5-10 (02441)",
    hours: "매일: 15:00 ~ 02:00",
    operatingHours: {
      weekday: "15:00 ~ 02:00",
      weekend: "15:00 ~ 02:00",
    },
    position: { lat: 37.594123, lng: 127.060789 },
    like_points: [
      { category: "맛", score: "7" },
      { category: "가성비", score: "6" },
      { category: "친절", score: "4" },
      { category: "분위기", score: "3" },
      { category: "주차", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 54,
    name: "153스트리트",
    category: "한식",
    rating: "3.9",
    dislikeRating: "3.1",
    goodText: "맛있어요",
    badText: "웨이팅이 있어요",
    address: "서울 동대문구 약령로10 2층(02440)",
    hours: "매일: 11:00 ~ 21:30",
    operatingHours: {
      weekday: "11:00 ~ 21:30",
      weekend: "11:00 ~ 21:30",
    },
    position: { lat: 37.594345, lng: 127.060912 },
    like_points: [
      { category: "맛", score: "4" },
      { category: "가성비", score: "2" },
      { category: "친절", score: "2" },
      { category: "분위기", score: "1" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 55,
    name: "최원장의만냉쌀국수재해쿠쿠미떡볶이김밥",
    category: "분식",
    rating: "3.3",
    dislikeRating: "2.9",
    goodText: "가성비가 좋아요",
    badText: "웨이팅이 있어요",
    address: "서울 동대문구 왕산로222 원티빌라상가 1층 101호(02492)",
    hours: "매일: 11:00 ~ 01:00",
    operatingHours: {
      weekday: "11:00 ~ 01:00",
      weekend: "11:00 ~ 01:00",
    },
    position: { lat: 37.59489, lng: 127.062123 },
    like_points: [
      { category: "맛", score: "3" },
      { category: "친절", score: "3" },
      { category: "가성비", score: "2" },
    ],
    image: "/images/분식.png",
  },
];

// 대학교 위치 정보는 그대로 유지
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
      center: new window.kakao.maps.LatLng(37.564512, 126.938977), // 연세대학교 중심
      level: 3,
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
    };

    const newMap = new window.kakao.maps.Map(container, options);
    window.map = newMap;
    setMap(newMap);

    // 대학교 마커/오버레이 생성
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

    // 식당 마커 생성
    const newMarkers = restaurantData.map((place) => {
      const markerPosition = new window.kakao.maps.LatLng(
        place.position.lat,
        place.position.lng
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: newMap,
      });

      // 마커에 마우스 이벤트 추가
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

    window.kakao.maps.event.addListener(newMap, "click", () => {
      setSelectedRestaurant(null);
      setMarkerClick(false);
    });
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
