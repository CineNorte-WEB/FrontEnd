// KakaoMap.jsx
import { useEffect, useState } from "react";
import Common from "../components/Common";
import LeftSide from "./LeftSide";
import RestaurantOverlay from "./RestaurantOverlay";

const restaurantData = [
  // 북쪽 방면 (화양동 먹자골목/건국대 정문)
  {
    id: 1,
    name: "봉추찜닭 건대점",
    category: "한식",
    rating: "4.5",
    dislikeRating: "3.21",
    goodText: "양이 많고 비교적 저렴해요",
    badText: "주말엔 웨이팅이 길어요",
    address: "서울 광진구 화양동 8-11",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: {
      lat: 37.540632, // 카카오맵 기준 정확한 위도
      lng: 127.069356, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "찜닭 (중)", price: "32,000원" },
      { item: "로제찜닭", price: "34,000원" },
      { item: "치즈찜닭", price: "35,000원" },
    ],
    fullMenu: [
      { item: "찜닭 (소)", price: "24,000원" },
      { item: "찜닭 (중)", price: "32,000원" },
      { item: "찜닭 (대)", price: "40,000원" },
      { item: "로제찜닭", price: "34,000원" },
      { item: "치즈찜닭", price: "35,000원" },
      { item: "매운찜닭", price: "32,000원" },
      { item: "간장찜닭", price: "32,000원" },
      { item: "닭발", price: "16,000원" },
      { item: "닭똥집", price: "15,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "주먹밥", price: "2,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 2,
    name: "진순대 건대본점",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.15",
    goodText: "순대국이 깔끔하고 맛있어요",
    badText: "좌석이 좀 불편해요",
    address: "서울 광진구 화양동 5-4",
    hours: "00:00 - 24:00",
    operatingHours: {
      weekday: "00:00 - 24:00",
      weekend: "00:00 - 24:00",
    },
    position: {
      lat: 37.540251, // 카카오맵 기준 정확한 위도
      lng: 127.069521, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "순대국", price: "9,000원" },
      { item: "순대국밥", price: "9,000원" },
      { item: "수육", price: "25,000원" },
    ],
    fullMenu: [
      { item: "순대국", price: "9,000원" },
      { item: "순대국밥", price: "9,000원" },
      { item: "얼큰순대국", price: "9,500원" },
      { item: "수육", price: "25,000원" },
      { item: "순대", price: "13,000원" },
      { item: "곱창", price: "20,000원" },
      { item: "막창", price: "20,000원" },
      { item: "내장탕", price: "9,000원" },
      { item: "머리고기", price: "25,000원" },
      { item: "공기밥", price: "1,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 3,
    name: "마포구이축산",
    category: "한식",
    rating: "4.6",
    dislikeRating: "3.33",
    goodText: "고기가 신선하고 가성비가 좋아요",
    badText: "환기가 조금 아쉬워요",
    address: "서울 광진구 화양동 9-3",
    hours: "16:00 - 02:00",
    operatingHours: {
      weekday: "16:00 - 02:00",
      weekend: "16:00 - 02:00",
    },
    position: {
      lat: 37.540432, // 카카오맵 기준 정확한 위도
      lng: 127.069234, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "삼겹살", price: "16,000원" },
      { item: "목살", price: "16,000원" },
      { item: "항정살", price: "19,000원" },
    ],
    fullMenu: [
      { item: "삼겹살", price: "16,000원" },
      { item: "목살", price: "16,000원" },
      { item: "항정살", price: "19,000원" },
      { item: "소곱창", price: "25,000원" },
      { item: "막창", price: "25,000원" },
      { item: "양념치킨", price: "18,000원" },
      { item: "냉삼", price: "20,000원" },
      { item: "돼지껍데기", price: "15,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "소주", price: "5,000원" },
    ],
    image: "/images/한식.png",
  }, // 남쪽 방면 (스타시티/롯데백화점)
  {
    id: 4,
    name: "아리랑설렁탕",
    category: "한식",
    rating: "4.3",
    dislikeRating: "3.25",
    goodText: "고기가 푸짐하고 국물이 진해요",
    badText: "가격이 조금 있는 편이에요",
    address: "서울 광진구 화양동 45-8",
    hours: "07:00 - 21:00",
    operatingHours: {
      weekday: "07:00 - 21:00",
      weekend: "07:00 - 21:00",
    },
    position: {
      lat: 37.541782, // 카카오맵 기준 정확한 위도
      lng: 127.079551, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "설렁탕", price: "11,000원" },
      { item: "도가니탕", price: "13,000원" },
      { item: "특양지탕", price: "13,000원" },
    ],
    fullMenu: [
      { item: "설렁탕", price: "11,000원" },
      { item: "도가니탕", price: "13,000원" },
      { item: "특양지탕", price: "13,000원" },
      { item: "소머리국", price: "14,000원" },
      { item: "곰탕", price: "12,000원" },
      { item: "육개장", price: "10,000원" },
      { item: "수육", price: "18,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "김치", price: "3,000원" },
      { item: "계란말이", price: "5,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 5,
    name: "소바노하나",
    category: "일식",
    rating: "4.5",
    dislikeRating: "3.18",
    goodText: "소바가 쫄깃하고 맛있어요",
    badText: "식사시간에 웨이팅이 있어요",
    address: "서울 광진구 화양동 48-12",
    hours: "11:30 - 21:00",
    operatingHours: {
      weekday: "11:30 - 21:00",
      weekend: "11:30 - 21:00",
    },
    position: {
      lat: 37.541923, // 카카오맵 기준 정확한 위도
      lng: 127.079234, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "모리소바", price: "9,000원" },
      { item: "자루소바", price: "8,000원" },
      { item: "튀김소바", price: "11,000원" },
    ],
    fullMenu: [
      { item: "모리소바", price: "9,000원" },
      { item: "자루소바", price: "8,000원" },
      { item: "튀김소바", price: "11,000원" },
      { item: "온소바", price: "8,500원" },
      { item: "냉소바", price: "8,500원" },
      { item: "우동", price: "7,000원" },
      { item: "튀김우동", price: "9,000원" },
      { item: "덴뿌라", price: "12,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "츠유", price: "4,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 6,
    name: "홍콩반점0410 건대스타시티점",
    category: "중식",
    rating: "4.2",
    dislikeRating: "3.12",
    goodText: "가성비가 좋고 양이 많아요",
    badText: "매장이 좁아요",
    address: "서울 광진구 화양동 41-12",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00",
    },
    position: {
      lat: 37.541654, // 카카오맵 기준 정확한 위도
      lng: 127.079123, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "짜장면", price: "6,000원" },
      { item: "짬뽕", price: "7,000원" },
      { item: "탕수육", price: "17,000원" },
    ],
    fullMenu: [
      { item: "짜장면", price: "6,000원" },
      { item: "짬뽕", price: "7,000원" },
      { item: "탕수육", price: "17,000원" },
      { item: "깐풍기", price: "18,000원" },
      { item: "군만두", price: "6,000원" },
      { item: "볶음밥", price: "8,000원" },
      { item: "짜장밥", price: "7,000원" },
      { item: "마파두부", price: "9,000원" },
      { item: "라조기", price: "16,000원" },
      { item: "공기밥", price: "1,000원" },
    ],
    image: "/images/중식.png",
  }, // 동쪽 방면 (화양사거리)
  {
    id: 7,
    name: "미소야 건대점",
    category: "일식",
    rating: "4.4",
    dislikeRating: "3.22",
    goodText: "라멘이 정통 일본 스타일이에요",
    badText: "가게가 좀 좁아요",
    address: "서울 광진구 화양동 32-51",
    hours: "11:00 - 21:30",
    operatingHours: {
      weekday: "11:00 - 21:30",
      weekend: "11:00 - 21:30",
    },
    position: {
      lat: 37.541234, // 카카오맵 기준 정확한 위도
      lng: 127.073521, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "돈코츠라멘", price: "9,000원" },
      { item: "차슈라멘", price: "10,000원" },
      { item: "교자", price: "5,000원" },
    ],
    fullMenu: [
      { item: "돈코츠라멘", price: "9,000원" },
      { item: "차슈라멘", price: "10,000원" },
      { item: "교자", price: "5,000원" },
      { item: "미소라멘", price: "9,500원" },
      { item: "야채라멘", price: "8,500원" },
      { item: "규동", price: "8,000원" },
      { item: "소유동", price: "7,500원" },
      { item: "된장국", price: "4,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "튀김", price: "6,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 8,
    name: "신주쿠카레",
    category: "일식",
    rating: "4.3",
    dislikeRating: "3.17",
    goodText: "카레가 진하고 맛있어요",
    badText: "저녁에는 웨이팅이 있어요",
    address: "서울 광진구 화양동 15-3",
    hours: "11:30 - 21:00",
    operatingHours: {
      weekday: "11:30 - 21:00",
      weekend: "11:30 - 21:00",
    },
    position: {
      lat: 37.541123, // 카카오맵 기준 정확한 위도
      lng: 127.073234, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "카츠카레", price: "9,500원" },
      { item: "치킨카레", price: "9,000원" },
      { item: "함박카레", price: "10,000원" },
    ],
    fullMenu: [
      { item: "카츠카레", price: "9,500원" },
      { item: "치킨카레", price: "9,000원" },
      { item: "함박카레", price: "10,000원" },
      { item: "에비카레", price: "11,000원" },
      { item: "베지터블카레", price: "8,500원" },
      { item: "돈카츠카레", price: "10,500원" },
      { item: "오믈렛카레", price: "9,500원" },
      { item: "샐러드", price: "5,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "아이스크림", price: "3,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 9,
    name: "쿠이신보",
    category: "일식",
    rating: "4.5",
    dislikeRating: "3.28",
    goodText: "우동이 쫄깃하고 맛있어요",
    badText: "자리가 좀 불편해요",
    address: "서울 광진구 화양동 38-19",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00",
    },
    position: {
      lat: 37.541432, // 카카오맵 기준 정확한 위도
      lng: 127.073123, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "기본우동", price: "7,000원" },
      { item: "튀김우동", price: "8,500원" },
      { item: "어묵우동", price: "8,000원" },
    ],
    fullMenu: [
      { item: "기본우동", price: "7,000원" },
      { item: "튀김우동", price: "8,500원" },
      { item: "어묵우동", price: "8,000원" },
      { item: "냉우동", price: "8,000원" },
      { item: "특우동", price: "9,000원" },
      { item: "새우튀김", price: "6,000원" },
      { item: "돈까스", price: "9,000원" },
      { item: "카레우동", price: "9,500원" },
      { item: "공기밥", price: "1,000원" },
      { item: "음료", price: "2,500원" },
    ],
    image: "/images/일식.png",
  }, // 서쪽 방면 (건대입구역)
  {
    id: 10,
    name: "육전식당 건대본점",
    category: "한식",
    rating: "4.6",
    dislikeRating: "3.31",
    goodText: "고기 퀄리티가 좋고 특제소스가 맛있어요",
    badText: "웨이팅이 길 수 있어요",
    address: "서울 광진구 화양동 40-1",
    hours: "11:30 - 22:00",
    operatingHours: {
      weekday: "11:30 - 22:00",
      weekend: "11:30 - 22:00",
    },
    position: {
      lat: 37.539234, // 카카오맵 기준 정확한 위도
      lng: 127.070521, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "육전정식", price: "12,000원" },
      { item: "고기정식", price: "13,000원" },
      { item: "냉면", price: "9,000원" },
    ],
    fullMenu: [
      { item: "육전정식", price: "12,000원" },
      { item: "고기정식", price: "13,000원" },
      { item: "냉면", price: "9,000원" },
      { item: "산적", price: "15,000원" },
      { item: "돼지불백", price: "14,000원" },
      { item: "된장찌개", price: "8,000원" },
      { item: "김치찌개", price: "8,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "소주", price: "5,000원" },
      { item: "맥주", price: "5,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 11,
    name: "신선설농탕 건대점",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.19",
    goodText: "고기가 많이 들어가고 맛있어요",
    badText: "테이블이 좀 좁아요",
    address: "서울 광진구 화양동 36-7",
    hours: "07:00 - 21:00",
    operatingHours: {
      weekday: "07:00 - 21:00",
      weekend: "07:00 - 21:00",
    },
    position: {
      lat: 37.539123, // 카카오맵 기준 정확한 위도
      lng: 127.070234, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "설농탕", price: "10,000원" },
      { item: "특설농탕", price: "12,000원" },
      { item: "곰탕", price: "11,000원" },
    ],
    fullMenu: [
      { item: "설농탕", price: "10,000원" },
      { item: "특설농탕", price: "12,000원" },
      { item: "곰탕", price: "11,000원" },
      { item: "소머리수육", price: "15,000원" },
      { item: "육회", price: "13,000원" },
      { item: "국밥", price: "9,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "김치", price: "3,000원" },
      { item: "된장찌개", price: "8,000원" },
      { item: "소주", price: "5,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 12,
    name: "마포갈매기 건대점",
    category: "한식",
    rating: "4.5",
    dislikeRating: "3.23",
    goodText: "갈매기살이 부드럽고 맛있어요",
    badText: "환기가 조금 아쉬워요",
    address: "서울 광진구 화양동 40-1",
    hours: "16:00 - 02:00",
    operatingHours: {
      weekday: "16:00 - 02:00",
      weekend: "16:00 - 02:00",
    },
    position: {
      lat: 37.539432, // 카카오맵 기준 정확한 위도
      lng: 127.070123, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "갈매기살", price: "16,000원" },
      { item: "항정살", price: "18,000원" },
      { item: "돼지껍데기", price: "13,000원" },
    ],
    fullMenu: [
      { item: "갈매기살", price: "16,000원" },
      { item: "항정살", price: "18,000원" },
      { item: "돼지껍데기", price: "13,000원" },
      { item: "삼겹살", price: "16,000원" },
      { item: "목살", price: "16,000원" },
      { item: "소주", price: "5,000원" },
      { item: "맥주", price: "5,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "김치", price: "3,000원" },
      { item: "된장찌개", price: "8,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 13,
    name: "호호식당",
    category: "중식",
    rating: "4.3",
    dislikeRating: "3.16",
    goodText: "중국 본토 스타일의 맛이에요",
    badText: "매운 음식이 많아요",
    address: "서울 광진구 화양동 46-7",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: {
      lat: 37.541234, // 카카오맵 기준 정확한 위도
      lng: 127.071521, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "마라탕", price: "13,000원" },
      { item: "마라샹궈", price: "18,000원" },
      { item: "꿔바로우", price: "15,000원" },
    ],
    fullMenu: [
      { item: "마라탕", price: "13,000원" },
      { item: "마라샹궈", price: "18,000원" },
      { item: "꿔바로우", price: "15,000원" },
      { item: "마라훠궈", price: "20,000원" },
      { item: "깐풍기", price: "17,000원" },
      { item: "양꼬치", price: "16,000원" },
      { item: "짜장면", price: "7,000원" },
      { item: "짬뽕", price: "8,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "중국식 빵", price: "3,000원" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 14,
    name: "짬뽕타임",
    category: "중식",
    rating: "4.4",
    dislikeRating: "3.24",
    goodText: "해물이 많이 들어가고 시원해요",
    badText: "가격이 조금 있어요",
    address: "서울 광진구 화양동 33-5",
    hours: "11:00 - 21:30",
    operatingHours: {
      weekday: "11:00 - 21:30",
      weekend: "11:00 - 21:30",
    },
    position: {
      lat: 37.541123, // 카카오맵 기준 정확한 위도
      lng: 127.071234, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "짬뽕", price: "8,000원" },
      { item: "해물짬뽕", price: "9,000원" },
      { item: "차돌짬뽕", price: "10,000원" },
    ],
    fullMenu: [
      { item: "짬뽕", price: "8,000원" },
      { item: "해물짬뽕", price: "9,000원" },
      { item: "차돌짬뽕", price: "10,000원" },
      { item: "짜장면", price: "7,000원" },
      { item: "짬뽕밥", price: "9,000원" },
      { item: "탕수육", price: "16,000원" },
      { item: "군만두", price: "6,000원" },
      { item: "깐풍기", price: "17,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "물", price: "1,000원" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 15,
    name: "몽중식",
    category: "중식",
    rating: "4.2",
    dislikeRating: "3.14",
    goodText: "가성비가 좋고 양이 많아요",
    badText: "웨이팅이 있을 수 있어요",
    address: "서울 광진구 화양동 42-8",
    hours: "11:30 - 21:30",
    operatingHours: {
      weekday: "11:30 - 21:30",
      weekend: "11:30 - 21:30",
    },
    position: {
      lat: 37.541432, // 카카오맵 기준 정확한 위도
      lng: 127.071123, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "짜장면", price: "6,000원" },
      { item: "짬뽕", price: "7,000원" },
      { item: "탕수육", price: "16,000원" },
    ],
    fullMenu: [
      { item: "짜장면", price: "6,000원" },
      { item: "짬뽕", price: "7,000원" },
      { item: "탕수육", price: "16,000원" },
      { item: "짜장밥", price: "7,000원" },
      { item: "군만두", price: "6,000원" },
      { item: "깐풍기", price: "17,000원" },
      { item: "볶음밥", price: "8,000원" },
      { item: "마파두부", price: "9,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "물", price: "1,000원" },
    ],
    image: "/images/중식.png",
  },
  {
    id: 16,
    name: "도쿄라멘",
    category: "일식",
    rating: "4.5",
    dislikeRating: "3.27",
    goodText: "국물이 진하고 면이 쫄깃해요",
    badText: "가게가 조금 좁아요",
    address: "서울 광진구 화양동 48-12",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00",
    },
    position: {
      lat: 37.540834, // 카카오맵 기준 정확한 위도
      lng: 127.070521, // 카카오맵 기준 정확한 경도
    },
    menu: [
      { item: "도쿄라멘", price: "9,000원" },
      { item: "챠슈라멘", price: "10,000원" },
      { item: "교자", price: "5,000원" },
    ],
    fullMenu: [
      { item: "도쿄라멘", price: "9,000원" },
      { item: "챠슈라멘", price: "10,000원" },
      { item: "교자", price: "5,000원" },
      { item: "미소라멘", price: "9,500원" },
      { item: "매운라멘", price: "9,500원" },
      { item: "규동", price: "8,000원" },
      { item: "돈카츠", price: "10,000원" },
      { item: "우동", price: "7,500원" },
      { item: "공기밥", price: "1,000원" },
      { item: "음료", price: "2,500원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 17,
    name: "오레노라멘",
    category: "일식",
    rating: "4.4",
    dislikeRating: "3.20",
    goodText: "면이 쫄깃하고 특제 소스가 맛있어요",
    badText: "점심시간에는 웨이팅이 있어요",
    address: "서울 광진구 화양동 7-4",
    hours: "11:30 - 21:00",
    operatingHours: {
      weekday: "11:30 - 21:00",
      weekend: "11:30 - 21:00",
    },
    position: { lat: 37.540723, lng: 127.070234 },
    menu: [
      { item: "돈코츠라멘", price: "9,500원" },
      { item: "매운라멘", price: "10,000원" },
      { item: "중화소바", price: "9,500원" },
    ],
    fullMenu: [
      { item: "돈코츠라멘", price: "9,500원" },
      { item: "매운라멘", price: "10,000원" },
      { item: "중화소바", price: "9,500원" },
      { item: "차슈라멘", price: "11,000원" },
      { item: "교자", price: "5,000원" },
      { item: "규동", price: "8,500원" },
      { item: "미소라멘", price: "9,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "음료", price: "2,000원" },
      { item: "맥주", price: "5,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 18,
    name: "우마이도",
    category: "일식",
    rating: "4.3",
    dislikeRating: "3.13",
    goodText: "덮밥 종류가 다양하고 맛있어요",
    badText: "저녁에는 일찍 마감해요",
    address: "서울 광진구 화양동 9-3",
    hours: "11:00 - 20:30",
    operatingHours: {
      weekday: "11:00 - 20:30",
      weekend: "11:00 - 20:30",
    },
    position: { lat: 37.540932, lng: 127.070123 },
    menu: [
      { item: "가츠동", price: "8,500원" },
      { item: "규동", price: "8,500원" },
      { item: "믹스가츠동", price: "9,500원" },
    ],
    fullMenu: [
      { item: "가츠동", price: "8,500원" },
      { item: "규동", price: "8,500원" },
      { item: "믹스가츠동", price: "9,500원" },
      { item: "치킨가츠동", price: "9,000원" },
      { item: "카레가츠동", price: "9,500원" },
      { item: "우동", price: "7,500원" },
      { item: "미소시루", price: "2,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "사이드 샐러드", price: "3,000원" },
      { item: "음료", price: "2,000원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 19,
    name: "명동돈까스",
    category: "일식",
    rating: "4.2",
    dislikeRating: "3.11",
    goodText: "돈까스가 두툼하고 바삭해요",
    badText: "좌석이 좀 불편해요",
    address: "서울 광진구 화양동 5-4",
    hours: "11:00 - 21:00",
    operatingHours: {
      weekday: "11:00 - 21:00",
      weekend: "11:00 - 21:00",
    },
    position: { lat: 37.539834, lng: 127.071521 },
    menu: [
      { item: "히레카츠", price: "11,000원" },
      { item: "치즈카츠", price: "12,000원" },
      { item: "카레돈까스", price: "11,500원" },
    ],
    fullMenu: [
      { item: "히레카츠", price: "11,000원" },
      { item: "치즈카츠", price: "12,000원" },
      { item: "카레돈까스", price: "11,500원" },
      { item: "왕돈까스", price: "12,500원" },
      { item: "생선까스", price: "11,000원" },
      { item: "우동", price: "7,000원" },
      { item: "돈까스정식", price: "13,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "콜라/사이다", price: "2,000원" },
      { item: "미소국", price: "1,500원" },
    ],
    image: "/images/일식.png",
  },
  {
    id: 20,
    name: "써피스",
    category: "양식",
    rating: "4.6",
    dislikeRating: "3.29",
    goodText: "스테이크가 부드럽고 맛있어요",
    badText: "가격대가 조금 있어요",
    address: "서울 광진구 화양동 45-8",
    hours: "11:30 - 22:00",
    operatingHours: {
      weekday: "11:30 - 22:00",
      weekend: "11:30 - 22:00",
    },
    position: { lat: 37.539723, lng: 127.071234 },
    menu: [
      { item: "립아이 스테이크", price: "32,000원" },
      { item: "토마호크", price: "89,000원" },
      { item: "파스타", price: "17,000원" },
    ],
    fullMenu: [
      { item: "립아이 스테이크", price: "32,000원" },
      { item: "토마호크", price: "89,000원" },
      { item: "파스타", price: "17,000원" },
      { item: "안심스테이크", price: "35,000원" },
      { item: "등심스테이크", price: "30,000원" },
      { item: "샐러드", price: "12,000원" },
      { item: "감자튀김", price: "8,000원" },
      { item: "와인", price: "29,000원" },
      { item: "맥주", price: "7,000원" },
      { item: "음료", price: "3,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 21,
    name: "피자플래닛",
    category: "양식",
    rating: "4.3",
    dislikeRating: "3.26",
    goodText: "도우가 쫄깃하고 토핑이 많아요",
    badText: "배달 시간이 좀 걸려요",
    address: "서울 광진구 화양동 36-7",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.539932, lng: 127.071123 },
    menu: [
      { item: "마르게리타", price: "18,000원" },
      { item: "페퍼로니", price: "19,000원" },
      { item: "고구마피자", price: "20,000원" },
    ],
    fullMenu: [
      { item: "마르게리타", price: "18,000원" },
      { item: "페퍼로니", price: "19,000원" },
      { item: "고구마피자", price: "20,000원" },
      { item: "치즈피자", price: "17,000원" },
      { item: "콤비네이션", price: "21,000원" },
      { item: "파스타", price: "12,000원" },
      { item: "샐러드", price: "8,000원" },
      { item: "콜라/사이다", price: "2,000원" },
      { item: "맥주", price: "5,000원" },
      { item: "윙/봉", price: "8,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 22,
    name: "파스타입니다",
    category: "양식",
    rating: "4.4",
    dislikeRating: "3.15",
    goodText: "면이 알덴테로 잘 삶아져요",
    badText: "매장이 좀 좁아요",
    address: "서울 광진구 화양동 40-1",
    hours: "11:00 - 21:30",
    operatingHours: {
      weekday: "11:00 - 21:30",
      weekend: "11:00 - 21:30",
    },
    position: { lat: 37.540434, lng: 127.072521 },
    menu: [
      { item: "까르보나라", price: "15,000원" },
      { item: "봉골레", price: "15,000원" },
      { item: "알리오올리오", price: "13,000원" },
    ],
    fullMenu: [
      { item: "까르보나라", price: "15,000원" },
      { item: "봉골레", price: "15,000원" },
      { item: "알리오올리오", price: "13,000원" },
      { item: "로제파스타", price: "16,000원" },
      { item: "해물파스타", price: "16,000원" },
      { item: "샐러드", price: "7,000원" },
      { item: "감자튀김", price: "6,000원" },
      { item: "생맥주", price: "5,000원" },
      { item: "와인", price: "25,000원" },
      { item: "음료수", price: "2,000원" },
    ],
    image: "/images/양식.png",
  },
  {
    id: 23,
    name: "광장식당",
    category: "한식",
    rating: "4.5",
    dislikeRating: "3.30",
    goodText: "한우 육회비빔밥이 신선해요",
    badText: "가격이 조금 있어요",
    address: "서울 광진구 화양동 15-3",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.540323, lng: 127.072234 },
    menu: [
      { item: "육회비빔밥", price: "12,000원" },
      { item: "한우국밥", price: "11,000원" },
      { item: "냉면", price: "9,000원" },
    ],
    fullMenu: [
      { item: "육회비빔밥", price: "12,000원" },
      { item: "한우국밥", price: "11,000원" },
      { item: "냉면", price: "9,000원" },
      { item: "육회", price: "25,000원" },
      { item: "김치찌개", price: "8,000원" },
      { item: "된장찌개", price: "8,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "소주", price: "5,000원" },
      { item: "맥주", price: "5,000원" },
      { item: "식혜", price: "2,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 24,
    name: "평양면옥",
    category: "한식",
    rating: "4.4",
    dislikeRating: "3.32",
    goodText: "물냉면이 시원하고 깔끔해요",
    badText: "주차가 어려워요",
    address: "서울 광진구 화양동 41-12",
    hours: "10:30 - 21:00",
    operatingHours: {
      weekday: "10:30 - 21:00",
      weekend: "10:30 - 21:00",
    },
    position: { lat: 37.540532, lng: 127.072123 },
    menu: [
      { item: "물냉면", price: "9,000원" },
      { item: "비빔냉면", price: "9,000원" },
      { item: "만두", price: "7,000원" },
    ],
    fullMenu: [
      { item: "물냉면", price: "9,000원" },
      { item: "비빔냉면", price: "9,000원" },
      { item: "만두", price: "7,000원" },
      { item: "평양냉면", price: "10,000원" },
      { item: "왕만두", price: "8,000원" },
      { item: "수육", price: "25,000원" },
      { item: "편육", price: "23,000원" },
      { item: "김치", price: "3,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "음료", price: "2,000원" },
    ],
    image: "/images/한식.png",
  },
  {
    id: 25,
    name: "삼청당",
    category: "한식",
    rating: "4.5",
    dislikeRating: "3.25",
    goodText: "김치찌개가 진하고 맛있어요",
    badText: "점심시간에 사람이 많아요",
    address: "서울 광진구 화양동 38-19",
    hours: "11:00 - 22:00",
    operatingHours: {
      weekday: "11:00 - 22:00",
      weekend: "11:00 - 22:00",
    },
    position: { lat: 37.540634, lng: 127.071921 },
    menu: [
      { item: "김치찌개", price: "8,000원" },
      { item: "된장찌개", price: "8,000원" },
      { item: "제육볶음", price: "9,000원" },
    ],
    fullMenu: [
      { item: "김치찌개", price: "8,000원" },
      { item: "된장찌개", price: "8,000원" },
      { item: "제육볶음", price: "9,000원" },
      { item: "순두부찌개", price: "8,000원" },
      { item: "불고기", price: "11,000원" },
      { item: "청국장", price: "8,000원" },
      { item: "공기밥", price: "1,000원" },
      { item: "계란말이", price: "7,000원" },
      { item: "소주", price: "5,000원" },
      { item: "맥주", price: "5,000원" },
    ],
    image: "/images/한식.png",
  },
];

function KakaoMap() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [markerClick, setMarkerClick] = useState(false);

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
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
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
        setMarkerClick(true);
        map.panTo(markerPosition);
      });
    });

    window.kakao.maps.event.addListener(map, "click", () => {
      setSelectedRestaurant(null);
      setMarkerClick(false);
    });
  };

  const handleListClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setMarkerClick(false);
  };

  return (
    <div className="relative flex w-full h-screen bg-gray-100">
      <div className="w-1/4 h-full bg-white border-r-2 border-gray-300">
        <div className="relative h-full overflow-hidden border-2 border-black rounded-r-xl">
          <LeftSide
            restaurantData={restaurantData}
            onSelectRestaurant={handleListClick}
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
