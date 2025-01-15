// restaurantData.js

// 대학교 위치 정보
export const universityLocations = {
  서강대: { lat: 37.551292, lng: 126.940108 },
  시립대: { lat: 37.5849836, lng: 127.057752 },
  이대: { lat: 37.562691, lng: 126.947684 },
  연대: { lat: 37.564512, lng: 126.938977 },
  외대: { lat: 37.5976717, lng: 127.0579181 },
  경희대: { lat: 37.597312, lng: 127.05165 },
};

// 카테고리 이모티콘 매핑
const categoryEmojis = {
  "항목 없음": "🍽️",
  친절: "😊",
  분위기: "✨",
  주차: "🚗",
  일식: "🍱",
  이탈리안: "🍝",
  중국요리: "🥢",
  닭요리: "🍗",
  "제과,베이커리": "🥐",
  "스테이크,립": "🥩",
  "초밥,롤": "🍣",
};
// 레스토랑 데이터
export const restaurantData = [
  {
    id: 1,
    name: "안녕유부",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 경희대로3길 11 1층 (우)02454",
    hours: "매일 10:00 ~ 22:30",
    reviewCount: 89,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '친절', 'score': '4'}, {'category': '분위기', 'score': '4'}, {'category': '가성비', 'score': '3'}, {'category': '항목 없음', 'score': '0'}, {'category': '항목 없음', 'score': '0'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%EC%95%88%EB%85%95%EC%9C%A0%EB%B6%80_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 1,
        name: "한우육회",
        price: 3600,
        description: "쫄깃 고소 달콤한 육회!",
      },
      {
        id: 2,
        name: "생연어",
        price: 3800,
        description: "안녕유부의 자랑 생연어!",
      },
      {
        id: 3,
        name: "안녕유부 2ps",
        price: 3000,
        description: "유부와 밥의 환상적인 만남!",
      },
      {
        id: 4,
        name: "스크램블 에그",
        price: 2300,
        description: "최강의 부드러움!",
      },
      {
        id: 5,
        name: "청양참치마요",
        price: 2500,
        description: "청양고추가 약간의 느끼함마저 깔끔하게!",
      },
      {
        id: 6,
        name: "와사비크래미",
        price: 2500,
        description: "알싸한 와사비와 크래미의 만남!",
      },
      {
        id: 7,
        name: "소고기김치",
        price: 2500,
        description: "김치와 소고기의 만남!",
      },
      {
        id: 8,
        name: "쌈장삼겹",
        price: 2500,
        description: "누구나 아는 그 맛!",
      },
      {
        id: 9,
        name: "소불고기",
        price: 2500,
        description: "말그대로 소불고기!",
      },
      {
        id: 10,
        name: "톡톡날치알",
        price: 2800,
        description: "입안에서 톡톡 터지는 날치알!",
      },
      {
        id: 11,
        name: "타코와사비",
        price: 2800,
        description: "쫄깃함과 알싸함의 만남!",
      },
      {
        id: 12,
        name: "매콤크림새우",
        price: 3000,
        description: "자칫 느끼할수있는 크림을 매콤함이 싹 날려드립니다!",
      },
      {
        id: 13,
        name: "고추장삼겹",
        price: 3000,
        description: "돼지불고기소스와 삼겹의 만남!",
      },
      {
        id: 14,
        name: "단짠우삼겹",
        price: 3500,
        description: "단짠은 국룰!",
      },
      {
        id: 15,
        name: "구운연어",
        price: 3800,
        description: "생연어를 맛봤다면 구운연어도!",
      },
      {
        id: 16,
        name: "유부우동",
        price: 5500,
        description: "유부와 우동의 찰떡궁합!",
      },
      {
        id: 17,
        name: "어묵우동",
        price: 6500,
        description: "엄선한 어묵의 맛이 살아있는 우동!",
      },
      {
        id: 18,
        name: "새우꽃게우동",
        price: 6500,
        description: "해장으로 제격인 매콤한 우동라면!",
      },
      {
        id: 19,
        name: "차돌양지우동",
        price: 8000,
        description: "풍미가득한 육향이 살아있는 우동!",
      },
      {
        id: 20,
        name: "치즈우동볶이",
        price: 7000,
        description: "떡볶이에 빠진 우동! 누구나 좋아하는 그 맛!",
      },
      {
        id: 21,
        name: "장어구이",
        price: 3500,
        description: "설명 없음",
      },
      {
        id: 22,
        name: "차돌치즈우동볶이",
        price: 9000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 2,
    name: "언니네함바그",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 회기로25길 59 1층 (우)02452",
    hours: "월,수,목,금,토,일 11:00 ~ 20:30",
    reviewCount: 102,
    rating: 4.5,
    likePoints:
      "[{'category': '맛', 'score': '19'}, {'category': '친절', 'score': '17'}, {'category': '분위기', 'score': '13'}, {'category': '가성비', 'score': '12'}, {'category': '항목 없음', 'score': '0'}, {'category': '항목 없음', 'score': '0'}, {'category': '항목 없음', 'score': '0'}, {'",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%EC%96%B8%EB%8B%88%EB%84%A4%ED%95%A8%EB%B0%94%EA%B7%B8_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 23,
        name: "매콤함바그",
        price: 11500,
        description: "베트남 건고추로 매콤한 맛을 낸 매콤 함바그 입니다.",
      },
      {
        id: 24,
        name: "카레함바그",
        price: 12000,
        description: "일본식 카레함바그",
      },
      {
        id: 25,
        name: "언니네함바그",
        price: 11000,
        description: "데미그라스 소스가 베이스인 기본 함바그 입니다.",
      },
      {
        id: 26,
        name: "치즈함바그",
        price: 12000,
        description:
          "투움바 스타일의 치즈 함바그 입니다. 100% 생 토마토를 이용해 소스를 만들고 있습니다.",
      },
      {
        id: 27,
        name: "하이볼",
        price: 6000,
        description: "조니워커블랙 베이스",
      },
      {
        id: 28,
        name: "얼그레이하이볼",
        price: 6500,
        description: "조니워커블랙 베이스",
      },
    ],
  },
  {
    id: 3,
    name: "크치치킨 회기점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 회기로 125 1층 (우)02454",
    hours: "월~토 15:00 ~ 24:00",
    reviewCount: 42,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '5'}, {'category': '가성비', 'score': '4'}, {'category': '친절', 'score': '4'}, {'category': '분위기', 'score': '4'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%ED%81%AC%EC%B9%98%EC%B9%98%ED%82%A8+%ED%9A%8C%EA%B8%B0%EC%A0%90_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 29,
        name: "깻잎치킨 후라이드 콤보",
        price: 21000,
        description: "설명 없음",
      },
      {
        id: 30,
        name: "매콤크림파스타",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 31,
        name: "크림어니언치킨 콤보",
        price: 21000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 4,
    name: "푸른하늘",
    category: "😊 친절",
    address: "서울 동대문구 경희대로6길 3-4 (우)02453",
    hours: "'월~금': '10:00 ~ 19:50', '토': '10:00 ~ 16:30'",
    reviewCount: 60,
    rating: 3.8,
    likePoints:
      "[{'category': '가성비', 'score': '8'}, {'category': '맛', 'score': '5'}, {'category': '친절', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%ED%91%B8%EB%A5%B8%ED%95%98%EB%8A%98_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 32,
        name: "원조김밥",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 33,
        name: "야채김밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 34,
        name: "치즈김밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 35,
        name: "김치김밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 36,
        name: "제육김밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 37,
        name: "참치김밥",
        price: 4000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 5,
    name: "회기왕족발보쌈",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 회기로 158 1층 (우)02460",
    hours: "매일: 11:30 ~ 01:00",
    reviewCount: 247,
    rating: 3.6,
    likePoints:
      "[{'category': '맛', 'score': '21'}, {'category': '친절', 'score': '6'}, {'category': '가성비', 'score': '4'}, {'category': '분위기', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%ED%9A%8C%EA%B8%B0%EC%99%95%EC%A1%B1%EB%B0%9C%EB%B3%B4%EC%8C%88_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 38,
        name: "족발 (소)",
        price: 33000,
        description: "설명 없음",
      },
      {
        id: 39,
        name: "보쌈 (소)",
        price: 33000,
        description: "설명 없음",
      },
      {
        id: 40,
        name: "보쌈김치",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 41,
        name: "쟁반막국수",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 42,
        name: "춘천막국수",
        price: 9000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 6,
    name: "회기왕갈비탕",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 이문로 54 1층 (우)02443",
    hours: "'매일': '11:00 ~ 21:00', '매일 라스트오더': '20:30'",
    reviewCount: 267,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '가성비', 'score': '3'}, {'category': '친절', 'score': '1'}, {'category': '분위기', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%ED%9A%8C%EA%B8%B0%EC%99%95%EA%B0%88%EB%B9%84%ED%83%95_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 43,
        name: "한짝소갈비찜 매운맛 (중)",
        price: 53000,
        description: "설명 없음",
      },
      {
        id: 44,
        name: "한짝소갈비찜 매운맛 (대)",
        price: 69000,
        description: "설명 없음",
      },
      {
        id: 45,
        name: "한짝소갈비찜 간장맛 (중)",
        price: 51000,
        description: "설명 없음",
      },
      {
        id: 46,
        name: "한짝소갈비찜 간장맛 (대)",
        price: 67000,
        description: "설명 없음",
      },
      {
        id: 47,
        name: "떡만두왕갈비탕",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 48,
        name: "아롱사태갈비탕",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 49,
        name: "특왕갈비탕",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 50,
        name: "특아릉사태갈비탕",
        price: 19000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 7,
    name: "여기가좋겠네",
    category: "😊 친절",
    address: "서울 동대문구 회기로21길 25 1층 (우)02453",
    hours: "'월~토': '10:30 ~ 24:00', '일': '10:30 ~ 22:00'",
    reviewCount: 178,
    rating: 3.4,
    likePoints:
      "[{'category': '가성비', 'score': '13'}, {'category': '맛', 'score': '12'}, {'category': '분위기', 'score': '4'}, {'category': '친절', 'score': '3'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%B4%E1%84%83%E1%85%A2/%EC%97%AC%EA%B8%B0%EA%B0%80%EC%A2%8B%EA%B2%A0%EB%84%A4_img.png",
    univName: "경희대학교",
    menus: [
      {
        id: 51,
        name: "닭도리탕 (대)",
        price: 27000,
        description: "설명 없음",
      },
      {
        id: 52,
        name: "닭도리탕 (중)",
        price: 20000,
        description: "설명 없음",
      },
      {
        id: 53,
        name: "닭도리탕 (소)",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 54,
        name: "고기 떡볶이",
        price: 7000,
        description: "설명 없음",
      },
      {
        id: 55,
        name: "뼈없는찜닭(대)",
        price: 32000,
        description: "설명 없음",
      },
      {
        id: 56,
        name: "뼈없는찜닭(중)",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 57,
        name: "뼈없는찜닭(소)",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 58,
        name: "뼈없는닭발",
        price: 7000,
        description: "설명 없음",
      },
      {
        id: 59,
        name: "닭목살볶음",
        price: 7000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 8,
    name: "가야가야 이대점",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 이화여대5길 7-3 1층 (우)03766",
    hours: "'매일': '11:00 ~ 20:00', '매일 휴게시간': '14:50 ~ 17:00'",
    reviewCount: 83,
    rating: 2.8,
    likePoints:
      "[{'category': '맛', 'score': '17'}, {'category': '분위기', 'score': '8'}, {'category': '친절', 'score': '7'}, {'category': '가성비', 'score': '5'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%80%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%80%E1%85%A1%E1%84%8B%E1%85%A3+%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 60,
        name: "돈코츠라멘",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 61,
        name: "돈코츠야사이라멘",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 62,
        name: "돈코츠차슈멘",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 63,
        name: "카라이돈코츠라멘",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 64,
        name: "돈코츠미소라멘",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 65,
        name: "돈코츠미소야사이라멘",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 66,
        name: "돈코츠미소차슈멘",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 67,
        name: "히야시소바",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 68,
        name: "돈코츠교카이라멘",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 69,
        name: "돈코츠교카이야사이라멘",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 70,
        name: "돈코츠교카이차슈멘",
        price: 11500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 9,
    name: "고냉지",
    category: "✨ 분위기",
    address: "서울 서대문구 연세로2마길 30 (우)03777",
    hours: "'화~일': '10:00 ~ 22:00', '화~일 라스트오더': '~ 21:20'",
    reviewCount: 101,
    rating: 4.1,
    likePoints:
      "[{'category': '맛', 'score': '22'}, {'category': '친절', 'score': '16'}, {'category': '가성비', 'score': '15'}, {'category': '분위기', 'score': '3'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%80%E1%85%A9%E1%84%82%E1%85%A2%E1%86%BC%E1%84%8C%E1%85%B5_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 71,
        name: "고냉지정식(1인분)",
        price: 15000,
        description: "김치찌개+보쌈+비빔밥",
      },
      {
        id: 72,
        name: "김치찌개(1인분)+비빔밥",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 73,
        name: "계란말이",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 74,
        name: "보쌈 (소)",
        price: 30000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 10,
    name: "마더린러베이글(이대점)",
    category: "🥐 제과,베이커리",
    address: "서울 서대문구 이화여대5길 5 1층 (우)03766",
    hours: "'월~금': '08:30 ~ 16:30', '토': '10:00 ~ 16:30'",
    reviewCount: 231,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://mblogthumb-phinf.pstatic.net/20160715_55/hausmann__146854597305280imi_JPEG/%C0%CC%B4%EB_%BA%A3%C0%CC%B1%DB_%B8%B6%B4%F5%B8%B0%B7%AF_%BA%A3%C0%CC%B1%DB_MATHER-IN-LAW_Bagel__Ewha_Women%27s_University_%2812%29.jpg?type=w800",
    univName: "이화여자대학교",
    menus: [
      {
        id: 75,
        name: "전국택배(더즌베이글/12개)",
        price: 32000,
        description:
          "10개 구매 시 2개 free / https://smartstore.naver.com/motherinlawbagel/products/5229393038",
      },
      {
        id: 76,
        name: "크림치즈(14종)",
        price: 3500,
        description: "설명 없음",
      },
      {
        id: 77,
        name: "노바",
        price: 9900,
        description:
          "훈제연어와 크림치즈의 환상적인 조화! 마더린러의 베스트셀러!",
      },
      {
        id: 78,
        name: "필리치즈스테이크",
        price: 8900,
        description:
          "육즙이  d~~~악 풍부한 등심살과 모짜렐라의 풍미가 입안 한가득",
      },
      {
        id: 79,
        name: "치킨타임",
        price: 8900,
        description: "베이컨과 담백한 저칼로리 닭가슴살의 건강한 풍미!",
      },
      {
        id: 80,
        name: "베이글클럽",
        price: 8900,
        description:
          "이런 맛 처음이지? 담백한 저칼로리 터키햄과 치즈의 찰떡궁합!",
      },
      {
        id: 81,
        name: "이탈리안클럽",
        price: 8900,
        description:
          "페퍼로니,살라미 그리고 햄과 야채가 만들어내는 환상적인 조화!",
      },
      {
        id: 82,
        name: "낫소",
        price: 8900,
        description:
          "마더린러 크림치즈와 오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함이 그대로!",
      },
      {
        id: 83,
        name: "포트워싱턴스타일",
        price: 8900,
        description: "육즙의 끝.판.왕! 누구도 따라올 수 없는 위대한 그 맛!",
      },
      {
        id: 84,
        name: "그릴치즈멜트",
        price: 8900,
        description:
          "호떡처럼 납짝하게! 상큼한 토마토와 모짜렐라치즈의 절묘한 궁합!",
      },
      {
        id: 85,
        name: "러쉬아워",
        price: 8900,
        description: "짭쪼름한서도 담백한 그 맛! 이런 맛 처음이지?",
      },
      {
        id: 86,
        name: "베이컨(햄)에그치즈",
        price: 8900,
        description: "간단한 아침식사? 이거 하나면 충!분!해!",
      },
      {
        id: 87,
        name: "BLT",
        price: 8900,
        description:
          "기본중의 기본! 베이컨+양상추+토마토가 만들어내는 입안 가득 넘치는 맛의 향연!",
      },
      {
        id: 88,
        name: "애그샐러드 샌드위치",
        price: 7900,
        description: "설명 없음",
      },
      {
        id: 89,
        name: "치킨샐러드",
        price: 7900,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 11,
    name: "비밀",
    category: "✨ 분위기",
    address: "서울 서대문구 이화여대7길 48 경국빌딩 1층 101호 (우)03766",
    hours: "'월~토': '08:30 ~ 21:00', '일': '09:00 ~ 17:00'",
    reviewCount: 35,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '14'}, {'category': '친절', 'score': '9'}, {'category': '가성비', 'score': '5'}, {'category': '분위기', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%87%E1%85%B5%E1%84%86%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5%E1%84%85%E1%85%B5_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 90,
        name: "올리브 치아바타",
        price: 3900,
        description: "설명 없음",
      },
      {
        id: 91,
        name: "바질 치아바타",
        price: 3900,
        description: "설명 없음",
      },
      {
        id: 92,
        name: "바게트",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 93,
        name: "치즈 치아바타",
        price: 3900,
        description: "설명 없음",
      },
      {
        id: 94,
        name: "베리얼랏스콘",
        price: 3500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 12,
    name: "비아37 신촌본점",
    category: "🍝 이탈리안",
    address: "서울 서대문구 이화여대길 77-1 (우)03766",
    hours: "'월~토': '11:30 ~ 21:00', '월~토 휴게시간': '14:30 ~ 17:00'",
    reviewCount: 346,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A137+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A9%E1%86%AB%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 95,
        name: "바질페스토 감자뇨끼",
        price: 22000,
        description:
          "몽글몽글 포실한 감자뇨끼와 바질페스토 크림소스. 고소하고 담백한 맛",
      },
      {
        id: 96,
        name: "신호등 뇨끼 밀키트 ( 단호박 크림소스, 바질크림소스, 볼로네제 토마토소스)",
        price: 13900,
        description:
          "4만명의 비아 손님이 인정한 뇨끼..!! 1.5만 그릇 누적판매. 이제 집에서도 간편하게 레스토랑 메뉴를 드실 수 있습니다. 스마트 스토어에서 구매가능.",
      },
      {
        id: 97,
        name: "클래식 라자냐 (생면)",
        price: 22000,
        description:
          "생면 파스타를 볼로네제 소스와 구운가지와 함께 겹겹이 쌓아 모짜렐라 치즈를 듬뿍 올려 오븐에 구운 클래식한 라자냐",
      },
      {
        id: 98,
        name: "부라타치즈",
        price: 21000,
        description:
          "믹스야채와 베이비루꼴라, 체리토마토, 후레쉬 부라타 치즈. 식전에 입맛을 살리는 안티파스티",
      },
      {
        id: 99,
        name: "코톨레타 밀라네제",
        price: 25000,
        description:
          "밀라노식 커틀렛을 비아 스타일로 재해석한 뼈등심 커틀렛, (믹스야채와 메쉬감자)",
      },
      {
        id: 100,
        name: "볼로네제 뇨키",
        price: 23000,
        description:
          "SbS 생방송 투데이 먹킷리스트에 선정되어 방영된 제품. 볼로네제와 관찰레로 맛을 낸 토마토소스의 뇨끼",
      },
      {
        id: 101,
        name: "파파르델레(생면)",
        price: 21000,
        description:
          "베이컨과 포르치니 버섯, 고기육수로 맛을 낸 소스와, 매장에서 직접 반죽한 생면 파파르델레.",
      },
      {
        id: 102,
        name: "와인 세트 메뉴",
        price: 77000,
        description: "부라타치즈,마팔디네,코돌렛타,와인2잔 선택",
      },
      {
        id: 103,
        name: "마팔디네",
        price: 23000,
        description: "설명 없음",
      },
      {
        id: 104,
        name: "콘낄리에",
        price: 21000,
        description: "설명 없음",
      },
      {
        id: 105,
        name: "까사레체",
        price: 23000,
        description: "설명 없음",
      },
      {
        id: 106,
        name: "생트러플 파케리",
        price: 34000,
        description: "설명 없음",
      },
      {
        id: 107,
        name: "링귀니 스콜리오",
        price: 24000,
        description: "설명 없음",
      },
      {
        id: 108,
        name: "초리조 스파게티",
        price: 21000,
        description: "설명 없음",
      },
      {
        id: 109,
        name: "채끝 스테이크(200g)",
        price: 45000,
        description: "설명 없음",
      },
      {
        id: 110,
        name: "까르토치오",
        price: 35000,
        description: "설명 없음",
      },
      {
        id: 111,
        name: "별두라 샐러드",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 112,
        name: "까르파치오",
        price: 22000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 13,
    name: "삭",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 이화여대3길 12 1층 (우)03766",
    hours: "'월~금': '12:00 ~ 23:20', '토,일': '12:00 ~ 21:20'",
    reviewCount: 113,
    rating: 4.1,
    likePoints:
      "[{'category': '맛', 'score': '23'}, {'category': '가성비', 'score': '13'}, {'category': '친절', 'score': '12'}, {'category': '분위기', 'score': '9'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%89%E1%85%A1%E1%86%A8_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 113,
        name: "치즈스틱",
        price: 1000,
        description: "설명 없음",
      },
      {
        id: 114,
        name: "고기만두튀김",
        price: 1200,
        description: "설명 없음",
      },
      {
        id: 115,
        name: "고구마튀김",
        price: 1200,
        description: "설명 없음",
      },
      {
        id: 116,
        name: "국물오뎅",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 117,
        name: "삭떡볶이",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 118,
        name: "찹쌀순대",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 119,
        name: "바나나튀김",
        price: 1200,
        description: "설명 없음",
      },
      {
        id: 120,
        name: "해쉬브라운",
        price: 1200,
        description: "설명 없음",
      },
      {
        id: 121,
        name: "새우튀김",
        price: 1400,
        description: "설명 없음",
      },
      {
        id: 122,
        name: "오징어튀김",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 123,
        name: "김말이튀김",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 124,
        name: "고추튀김",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 125,
        name: "오징어치즈완자",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 126,
        name: "참치치즈완자",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 127,
        name: "닭가슴살튀김",
        price: 2500,
        description: "설명 없음",
      },
      {
        id: 128,
        name: "왕새우튀김",
        price: 2700,
        description: "설명 없음",
      },
      {
        id: 129,
        name: "모둠튀김(13가지맛)",
        price: 18000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 14,
    name: "아건 이대점",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 이화여대길 37 2층 (우)03766",
    hours: "매일 11:00 ~ 22:00",
    reviewCount: 310,
    rating: 4.1,
    likePoints:
      "[{'category': '맛', 'score': '16'}, {'category': '친절', 'score': '13'}, {'category': '가성비', 'score': '12'}, {'category': '분위기', 'score': '8'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%8B%E1%85%A1%E1%84%80%E1%85%A5%E1%86%AB+%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 130,
        name: "탄두리치킨 (Half)",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 131,
        name: "치킨빈달루",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 132,
        name: "머튼빈달루",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 133,
        name: "달마카니",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 134,
        name: "프라운빈달루",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 135,
        name: "프라운브리야니",
        price: 11000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 15,
    name: "아민 이화",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 이화여대길 52-31 1층 (우)03765",
    hours: "'월~금': '10:00 ~ 21:30', '토,일': '09:00 ~ 21:30'",
    reviewCount: 936,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '33'}, {'category': '분위기', 'score': '30'}, {'category': '친절', 'score': '21'}, {'category': '가성비', 'score': '6'}, {'category': '주차', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%B5%E1%86%AB+%E1%84%8B%E1%85%B5%E1%84%92%E1%85%AA_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 136,
        name: "잘룩",
        price: 25000,
        description: "모로코 요리 잘룩입니다.",
      },
      {
        id: 137,
        name: "츨브르",
        price: 23000,
        description: "터키의 츨브르 입니다.",
      },
      {
        id: 138,
        name: "살라타",
        price: 25500,
        description: "그리스 살라타 입니다.",
      },
      {
        id: 139,
        name: "샥슈카",
        price: 22000,
        description: "이스라엘의 시금치 샥슈카 입니다.",
      },
    ],
  },
  {
    id: 16,
    name: "오르랔베이커리",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 신촌로 241 2,3층 (우)03774",
    hours: "매일 08:00 ~ 20:00",
    reviewCount: 270,
    rating: 3.5,
    likePoints:
      "[{'category': '맛', 'score': '16'}, {'category': '분위기', 'score': '5'}, {'category': '친절', 'score': '4'}, {'category': '항목 없음', 'score': '0'}, {'category': '항목 없음', 'score': '0'}, {'category': '항목 없음', 'score': '0'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B3%E1%84%85%E1%85%A1%E1%86%BF%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5%E1%84%85%E1%85%B5_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 140,
        name: "아메리카노",
        price: 4300,
        description: "설명 없음",
      },
      {
        id: 141,
        name: "라떼",
        price: 4600,
        description: "설명 없음",
      },
      {
        id: 142,
        name: "플랫화이트",
        price: 4600,
        description: "설명 없음",
      },
      {
        id: 143,
        name: "바닐라라떼",
        price: 4800,
        description: "설명 없음",
      },
      {
        id: 144,
        name: "초코라떼",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 145,
        name: "녹차라떼",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 146,
        name: "시나몬라떼",
        price: 5500,
        description: "설명 없음",
      },
      {
        id: 147,
        name: "딸기라떼",
        price: 5500,
        description: "설명 없음",
      },
      {
        id: 148,
        name: "밀크티",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 149,
        name: "믹스베리",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 150,
        name: "패선후르츠",
        price: 6500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 17,
    name: "카우떡볶이",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 이화여대길 88-21 1층 (우)03765",
    hours: "월,화,수,목,금,일: 11:00 ~ 22:00",
    reviewCount: 177,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '가성비', 'score': '3'}, {'category': '친절', 'score': '3'}, {'category': '분위기', 'score': '2'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 151,
        name: "채식마라떡볶이 (2인분)",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 152,
        name: "채식 까르보나라떡볶이",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 153,
        name: "채식짜장떡볶이",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 154,
        name: "채식떡볶이",
        price: 5500,
        description: "설명 없음",
      },
      {
        id: 155,
        name: "채식로제떡볶이",
        price: 17500,
        description: "설명 없음",
      },
      {
        id: 156,
        name: "채식시래기주먹밥",
        price: 5500,
        description: "설명 없음",
      },
      {
        id: 157,
        name: "채식갈릭감자튀김",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 158,
        name: "채식김밥마요주먹밥",
        price: 7000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 18,
    name: "하늘초밥",
    category: "🍣 초밥,롤",
    address: "서울 서대문구 이화여대2길 14 1층 (우)03767",
    hours:
      "'화~토': '11:30 ~ 22:00', '화~토 라스트오더' : '~ 21:00', '화~토 라스트오더': '~ 13:30', '화~토 휴게시간': '14:00 ~ 16:30'",
    reviewCount: 453,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AF%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A1%E1%86%B8_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 159,
        name: "포장(13피스)",
        price: 26000,
        description: "설명 없음",
      },
      {
        id: 160,
        name: "하늘초밥(13피스, 매장전용)",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 161,
        name: "하늘초밥 플러스(18피스, 매장전용)",
        price: 36000,
        description: "설명 없음",
      },
      {
        id: 162,
        name: "욕심쟁이(30피스, 매장전용)",
        price: 57000,
        description: "설명 없음",
      },
      {
        id: 163,
        name: "흑심(24피스, 매장전용)",
        price: 57000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 19,
    name: "미스터서왕만두",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 신촌역로 16 103호 (우)03766",
    hours:
      "'매일': '11:00 ~ 21:00', '매일 라스트오더': '~ 20:50', '매일 휴게시간': '15:00 ~ 16:00'",
    reviewCount: 154,
    rating: 4.5,
    likePoints:
      "[{'category': '맛', 'score': '57'}, {'category': '가성비', 'score': '33'}, {'category': '친절', 'score': '12'}, {'category': '분위기', 'score': '5'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%86%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AA%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%AE_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 164,
        name: "소롱보",
        price: 6900,
        description: "설명 없음",
      },
      {
        id: 165,
        name: "찐만두",
        price: 6900,
        description: "설명 없음",
      },
      {
        id: 166,
        name: "군만두",
        price: 7900,
        description: "설명 없음",
      },
      {
        id: 167,
        name: "새우만두",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 168,
        name: "해물탕",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 169,
        name: "사이다",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 170,
        name: "콜라",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 171,
        name: "해물수제비 (한정메뉴)",
        price: 6900,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 20,
    name: "소바연구소",
    category: "🍱 일식",
    address: "서울 서대문구 명물길 50-9 1층 (우)03777",
    hours:
      "'화~일': '11:30 ~ 20:00', '화~일 휴게시간': '16:00 ~ 17:00', '월': '11:30 ~ 21:00', '월 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 379,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%89%E1%85%A9%E1%84%87%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%AE%E1%84%89%E1%85%A9_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 172,
        name: "에고마아부라소바",
        price: 13000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 21,
    name: "란주탕슉",
    category: "😊 친절",
    address: "서울 서대문구 이화여대2가길 18 (우)03767",
    hours:
      "'매일': '11:40 ~ 21:10', '매일 라스트오더': '~ 20:30', '매일 휴게시간': '14:50 ~ 16:10'",
    reviewCount: 120,
    rating: 3.3,
    likePoints:
      "[{'category': '맛', 'score': '12'}, {'category': '가성비', 'score': '4'}, {'category': '친절', 'score': '3'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%85%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%AE%E1%84%90%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B2%E1%86%A8_img.png",
    univName: "이화여자대학교",
    menus: [
      {
        id: 173,
        name: "사천해물자장도삭면",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 174,
        name: "해물볶음도삭면",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 175,
        name: "해선도삭면",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 176,
        name: "새우볶음밥",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 177,
        name: "사천짬뽕도삭면",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 178,
        name: "마라탕도삭면",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 179,
        name: "사천꿔빠로우 (R)",
        price: 24000,
        description: "설명 없음",
      },
      {
        id: 180,
        name: "사천탕수새우 (R)",
        price: 30000,
        description: "설명 없음",
      },
      {
        id: 181,
        name: "깐풍기 (R)",
        price: 26000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 22,
    name: "김광석신촌칼국수",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 신촌로 124 (우)04101",
    hours: "'매일': '10:00 ~ 24:00'",
    reviewCount: 70,
    rating: 3.6,
    likePoints:
      "[{'category': '맛', 'score': '15'}, {'category': '친절', 'score': '11'}, {'category': '가성비', 'score': '10'}, {'category': '분위기', 'score': '3'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EA%B9%80%EA%B4%91%EC%84%9D%EC%8B%A0%EC%B4%8C%EC%B9%BC%EA%B5%AD%EC%88%98_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 182,
        name: "버섯얼큰소고기샤브",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 183,
        name: "버섯얼큰칼국수",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 184,
        name: "감자만두(10개)",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 185,
        name: "볶음밥",
        price: 2000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 23,
    name: "롤앤롤 김밥",
    category: "✨ 분위기",
    address: "서울 마포구 백범로 74 1층 101호 (우)04110",
    hours:
      "'월~금': '08:00 ~ 20:30', '토,일': '08:00 ~ 20:00', '매일 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 320,
    rating: 3.8,
    likePoints:
      "[{'category': '맛', 'score': '22'}, {'category': '친절', 'score': '13'}, {'category': '가성비', 'score': '11'}, {'category': '분위기', 'score': '8'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EB%A1%A4%EC%95%A4%EB%A1%A4+%EA%B9%80%EB%B0%A5_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 186,
        name: "참치김밥",
        price: 5000,
        description: "감칠맛 폭발하는 와사비 참치가 헤엄치는 김밥",
      },
      {
        id: 187,
        name: "계란김밥",
        price: 5000,
        description: "두툼한 지단안에 계란, 감자샐러드를 품은 김밥",
      },
      {
        id: 188,
        name: "유부김밥",
        price: 4500,
        description: "새콤 달콤하게 조려진 유부가 눈을 뙇하게 만드는 김밥",
      },
      {
        id: 189,
        name: "필리치즈스테이크 김밥",
        price: 6000,
        description:
          "두툼한 지단, 치즈, 소고기가 어우러진 미쿡으로 순간이동 시키는 김밥",
      },
      {
        id: 190,
        name: "서강김밥",
        price: 3500,
        description: "매운잡채가 입맛을 땡기게 하는 김밥",
      },
      {
        id: 191,
        name: "우엉김밥",
        price: 4000,
        description:
          "우엉 당근 지단 단무지 시금치가 들어있는 기본기 탄탄한 야채김밥",
      },
      {
        id: 192,
        name: "트리플치즈김밥",
        price: 5500,
        description: "설명 없음",
      },
      {
        id: 193,
        name: "소고기김밥",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 194,
        name: "스페셜김밥",
        price: 6000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 24,
    name: "스키당",
    category: "🚗 주차",
    address: "서울 마포구 백범로20길 12 2층 (우)04149",
    hours: "'월~토': '11:00 ~ 22:00', '월~토 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 1639,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '16'}, {'category': '분위기', 'score': '15'}, {'category': '친절', 'score': '9'}, {'category': '가성비', 'score': '3'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%8A%A4%ED%82%A4%EB%8B%B9_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 195,
        name: "1인 스키야키 (점심 살치100g)",
        price: 25000,
        description:
          "일본 관서식 지방의 요리로 최상급 가쓰오브시 육수 간장과 프라임급(상위3%) 소고기의 조화가 환상적인 맛을 선사합니다. 일본식 불고기라고 생각하시면 됩니다.",
      },
      {
        id: 196,
        name: "1인 샤브샤브",
        price: 23000,
        description:
          "최고급 가쓰오브시 육수로 일본식 샤브샤브를 맛보실 수 있습니다. 담백하고 깔끔한 맛이 일품으로, 식사 후 우동or 칼국수로 든든한 한끼 식사가 가능한 메뉴입닏ㆍ.",
      },
      {
        id: 197,
        name: "양송이 새우튀김",
        price: 19000,
        description:
          "일본식 튀김옷을 입힌 노바시 새우와 바삭한 양송이 튀김의 조화 수제 타르타르소스와 스파이시마요로 감칠맛을 한층올린 스키당 대표 사이드 메뉴",
      },
      {
        id: 198,
        name: "가라아게",
        price: 17000,
        description:
          "일본 전통 가라아게(닭다리살 튀김) 짭쪼름한 맛이 일품인 메뉴",
      },
      {
        id: 199,
        name: "하이볼 6종",
        price: 9000,
        description: "진저에일, 얼그레이, 자몽, 애플, 청포도, 오렌지 하이볼",
      },
    ],
  },
  {
    id: 25,
    name: "을밀대 본점",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 숭문길 24 (우)04138",
    hours: "'매일': '11:00 ~ 22:00'",
    reviewCount: 1182,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '244'}, {'category': '분위기', 'score': '76'}, {'category': '친절', 'score': '71'}, {'category': '가성비', 'score': '25'}, {'category': '주차', 'score': '19'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%9D%84%EB%B0%80%EB%8C%80+%EB%B3%B8%EC%A0%90_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 200,
        name: "물냉면",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 201,
        name: "수육 (대)",
        price: 70000,
        description: "설명 없음",
      },
      {
        id: 202,
        name: "수육 (소)",
        price: 35000,
        description: "설명 없음",
      },
      {
        id: 203,
        name: "녹두전",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 204,
        name: "홍어",
        price: 60000,
        description: "설명 없음",
      },
      {
        id: 205,
        name: "비빔냉면",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 206,
        name: "회냉면",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 207,
        name: "양지탕밥",
        price: 12000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 26,
    name: "정정 공덕1호점",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 백범로24길 27 1층 (우)04149",
    hours:
      "'월~금': '11:00 ~ 21:00(재료소진 시 조기마감)', '토': '11:30 ~ 21:00(재료소진 시 조기마감)', '월~금 휴게시간': '15:00 ~ 17:00', '토 휴게시간': '15:30 ~ 17:30'",
    reviewCount: 400,
    rating: 3.9,
    likePoints:
      "[{'category': '맛', 'score': '32'}, {'category': '친절', 'score': '18'}, {'category': '분위기', 'score': '13'}, {'category': '가성비', 'score': '11'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%A0%95%EC%A0%95+%EA%B3%B5%EB%8D%951%ED%98%B8%EC%A0%90_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 208,
        name: "해물탕면",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 209,
        name: "우육면",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 210,
        name: "새우볶음밥",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 211,
        name: "소롱포 (6개)",
        price: 8800,
        description: "설명 없음",
      },
      {
        id: 212,
        name: "새우완자튀김",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 213,
        name: "멘보샤",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 214,
        name: "탄탄면",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 215,
        name: "비빔탄탄면",
        price: 8800,
        description: "설명 없음",
      },
      {
        id: 216,
        name: "비빔냉면",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 217,
        name: "게살소롱포",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 218,
        name: "마파두부",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 219,
        name: "중화냉면",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 220,
        name: "유린기",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 221,
        name: "XO 볶음밥",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 222,
        name: "하가우",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 223,
        name: "칠리가지볶음",
        price: 16000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 27,
    name: "수저가",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 광성로4길 10 1층 (우)04096",
    hours:
      "'월,화,수,목,토': '10:30 ~ 20:00', '월,화,수,목,토 휴게시간': '15:00 ~ 16:30'",
    reviewCount: 71,
    rating: 4.5,
    likePoints:
      "[{'category': '맛', 'score': '48'}, {'category': '가성비', 'score': '48'}, {'category': '친절', 'score': '42'}, {'category': '분위기', 'score': '6'}, {'category': '주차', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%88%98%EC%A0%80%EA%B0%80_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 224,
        name: "수저가짬뽕",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 225,
        name: "차돌짬뽕",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 226,
        name: "옛날짜장면",
        price: 6000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 28,
    name: "정각",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 백범로20길 28 1층 (우)04151",
    hours:
      "'매일': '11:30 ~ 23:00', '매일 휴게시간': '15:00 ~ 17:00', '매일 라스트오더': '~ 22:00'",
    reviewCount: 524,
    rating: 3,
    likePoints:
      "[{'category': '분위기', 'score': '9'}, {'category': '맛', 'score': '7'}, {'category': '친절', 'score': '6'}, {'category': '가성비', 'score': '3'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%A0%95%EA%B0%81_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 227,
        name: "소고기구이",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 228,
        name: "1+등심 스테이크",
        price: 60000,
        description: "설명 없음",
      },
      {
        id: 229,
        name: "꽃게탕",
        price: 24000,
        description: "설명 없음",
      },
      {
        id: 230,
        name: "김태전복",
        price: 22000,
        description: "설명 없음",
      },
      {
        id: 231,
        name: "차돌박이 된장",
        price: 19000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 29,
    name: "정든그릇",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 독막로 239 1층 101호 (우)04096",
    hours: "'월~토': '11:30 ~ 21:00', '월~토 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 104,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '26'}, {'category': '친절', 'score': '16'}, {'category': '분위기', 'score': '15'}, {'category': '가성비', 'score': '12'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%A0%95%EB%93%A0%EA%B7%B8%EB%A6%87_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 232,
        name: "정든 카츠(경양식)",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 233,
        name: "소고기 덮밥",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 234,
        name: "돈까스 덮밥",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 235,
        name: "매콤 카레라이스",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 236,
        name: "연어덮밥",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 237,
        name: "탄탄 무동",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 238,
        name: "마제 소바",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 239,
        name: "연어 소바",
        price: 10000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 30,
    name: "쭈꾸미블루스 신촌본점",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 백범로1길 21 1층 (우)04101",
    hours:
      "'매일': '11:30 ~ 22:00', '매일 휴게시간': '15:00 ~ 17:00', '매일 라스트오더': '~ 14:00'",
    reviewCount: 1629,
    rating: 2.6,
    likePoints:
      "[{'category': '맛', 'score': '5'}, {'category': '분위기', 'score': '4'}, {'category': '친절', 'score': '3'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%EC%AD%88%EA%BE%B8%EB%AF%B8%EB%B8%94%EB%A3%A8%EC%8A%A4+%EC%8B%A0%EC%B4%8C%EB%B3%B8%EC%A0%90_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 240,
        name: "바삭튀김",
        price: 7000,
        description: "설명 없음",
      },
      {
        id: 241,
        name: "떡갈비",
        price: 7000,
        description: "설명 없음",
      },
      {
        id: 242,
        name: "대왕돈까스",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 243,
        name: "신촌 쭈꾸미",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 244,
        name: "꽃쭈(꽃게쭈꾸미)",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 245,
        name: "쭈삼(쭈꾸미삼겹살)",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 246,
        name: "쭈새(쭈꾸미새우)",
        price: 18000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 31,
    name: "파사주",
    category: "🍽️ 항목 없음",
    address: "서울 마포구 백범로20길 24-5 상수라이크 1층 (우)04151",
    hours:
      "'월~금': '11:30 ~ 22:00', '월~금 휴게시간': '15:00 ~ 17:00', '토,일': '11:00 ~ 21:00', '토,일 휴게시간': '15:00 ~ 16:00'",
    reviewCount: 181,
    rating: 3.8,
    likePoints:
      "[{'category': '맛', 'score': '18'}, {'category': '분위기', 'score': '14'}, {'category': '친절', 'score': '9'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%ED%8C%8C%EC%82%AC%EC%A3%BC_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 247,
        name: "프렌치 어니언 수프",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 248,
        name: "파흐망티에",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 249,
        name: "파리지엥 뇨끼",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 250,
        name: "라구",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 251,
        name: "로얄비스크 링귀네",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 252,
        name: "클래식프렌치 토스트",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 253,
        name: "스테이크 프랑세",
        price: 29000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 31,
    name: "파사주",
    category: "항목 없음",
    address: "서울 마포구 백범로20길 24-5 상수라이크 1층 (우)04151",
    hours:
      "'월~금': '11:30 ~ 22:00', '월~금 휴게시간': '15:00 ~ 17:00', '토,일': '11:00 ~ 21:00', '토,일 휴게시간': '15:00 ~ 16:00'",
    reviewCount: 181,
    rating: 3.8,
    likePoints:
      "[{'category': '맛', 'score': '18'}, {'category': '분위기', 'score': '14'}, {'category': '친절', 'score': '9'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%E1%84%89%E1%85%A5%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2/%ED%8C%8C%EC%82%AC%EC%A3%BC_img.png",
    univName: "서강대학교",
    menus: [
      {
        id: 247,
        name: "프렌치 어니언 수프",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 248,
        name: "파흐망티에",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 249,
        name: "파리지엥 뇨끼",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 250,
        name: "라구",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 251,
        name: "로얄비스크 링귀네",
        price: 19000,
        description: "설명 없음",
      },
      {
        id: 252,
        name: "클래식프렌치 토스트",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 253,
        name: "스테이크 프랑세",
        price: 29000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 32,
    name: "라구식당",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로 42-24 1층 (우)03776",
    hours:
      "'매일': '11:30 ~ 21:00', '월~금 휴게시간': '15:00 ~ 17:00', '토,일 휴게시간': '15:00 ~ 16:00'",
    reviewCount: 1347,
    rating: 4,
    likePoints:
      "[{'category': '맛', 'score': '59'}, {'category': '분위기', 'score': '39'}, {'category': '친절', 'score': '20'}, {'category': '가성비', 'score': '16'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%85%E1%85%A1%E1%84%80%E1%85%AE%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A1%E1%86%BC_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 254,
        name: "라구파스타",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 255,
        name: "라자냐",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 256,
        name: "볼 샐러드",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 257,
        name: "바게트빵",
        price: 3000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 33,
    name: "대포찜닭",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로 27-1 3층 (우)03788",
    hours: "'월~토': '11:00 ~ 22:00'",
    reviewCount: 67,
    rating: 4.6,
    likePoints:
      "[{'category': '맛', 'score': '96'}, {'category': '친절', 'score': '72'}, {'category': '분위기', 'score': '45'}, {'category': '가성비', 'score': '29'}, {'category': '주차', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%83%E1%85%A2%E1%84%91%E1%85%A9%E1%84%8D%E1%85%B5%E1%86%B7%E1%84%83%E1%85%A1%E1%86%B0_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 258,
        name: "둥지토핑(1인~)",
        price: 2500,
        description: "독특한 비주얼과 풍미로 유명한 메뉴. 대포찜닭의 필수메뉴",
      },
      {
        id: 259,
        name: "몬스터토핑(반마리~)",
        price: 4900,
        description:
          "이 곳에서만 맛볼 수 있는 몬스터토핑은 시그니처 메뉴. 추천합니다.",
      },
      {
        id: 260,
        name: "대포찜닭",
        price: 28000,
        description: "안녕하세요 대포찜닭입니다^^ (1인 14,000원)",
      },
      {
        id: 261,
        name: "구름토핑(1인~)",
        price: 2500,
        description: "대포짐닭과 치즈토핑의 환성적인 조합을 추천합니다!",
      },
    ],
  },
  {
    id: 34,
    name: "김판석초밥",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로9길 37 1층 102호 (우)03787",
    hours: "'월~토': '11:30 ~ 23:00', '월~토 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 34,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '가성비', 'score': '5'}, {'category': '친절', 'score': '3'}, {'category': '분위기', 'score': '3'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%91%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A1%E1%86%B8_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 262,
        name: "김판석초밥",
        price: 16000,
        description: "모듬초밥12p +냉모밀",
      },
      {
        id: 263,
        name: "2인 커플초밥세트",
        price: 34000,
        description:
          "특선초밥 20p + 연어후토마끼 4p +왕새우튀김 2p + 냉모밀 가성비갑!",
      },
      {
        id: 264,
        name: "김판석 특초밥",
        price: 21000,
        description: "특선초밥 (12PCS) + 냉모밀+ 왕새우튀김",
      },
      {
        id: 265,
        name: "모듬회덮밥",
        price: 12000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 35,
    name: "공복식당",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로12길 23 1층 (우)03776",
    hours: "'매일': '16:00 ~ 23:00'",
    reviewCount: 3019,
    rating: 3.5,
    likePoints:
      "[{'category': '맛', 'score': '8'}, {'category': '친절', 'score': '5'}, {'category': '분위기', 'score': '3'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A1%E1%86%BC_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 266,
        name: "생갈비",
        price: 16000,
        description: "국내산 +1등급 암퇘지 5번~11번 갈비와 고소한 삼겹부위",
      },
      {
        id: 267,
        name: "특목살",
        price: 14000,
        description:
          "국내산 +1등급 암퇘지 적절한 살코기와 지방의 비율로 풍부한 육즙과 진한 풍미",
      },
      {
        id: 268,
        name: "등심덧살",
        price: 17000,
        description:
          "국내산 +1등급 암퇘지 돼지 한마리당 450g 공급되는 육향이 진한 특수부위",
      },
      {
        id: 269,
        name: "토장찌개",
        price: 7000,
        description:
          "메주에서 간장을 걸러내지 않은 토장에 우삼겹을 넣은 진한 토속적 된장찌개",
      },
      {
        id: 270,
        name: "누룽지",
        price: 3000,
        description: "뚝배기에 담긴 마무리 숭늉 누룽지",
      },
      {
        id: 271,
        name: "천겹살",
        price: 15000,
        description: "돼지 한마리당 400g 공급되는 마블링 천개인 특수부위",
      },
      {
        id: 272,
        name: "맘마",
        price: 5000,
        description:
          "옛날소시지 볶은김치 반숙후라이 김가루 특제간장소스로 비벼먹는 옛날 간장계란밥",
      },
      {
        id: 273,
        name: "공기밥",
        price: 1000,
        description: "압력밥솥에 갓지은 윤기 좔좔 따끈따끈한 밥",
      },
    ],
  },
  {
    id: 36,
    name: "쿳사 연희",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 증가로 48 대로변 (우)03698",
    hours:
      "'월,화': '09:00 ~ 16:00', '수': '11:00 ~ 16:00', '목~일': '08:00 ~ 21:00'",
    reviewCount: 340,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '32'}, {'category': '친절', 'score': '25'}, {'category': '분위기', 'score': '23'}, {'category': '가성비', 'score': '13'}, {'category': '주차', 'score': '7'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%8F%E1%85%AE%E1%86%BA%E1%84%89%E1%85%A1+%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%92%E1%85%B4_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 274,
        name: "쿳사베네딕트",
        price: 15300,
        description:
          "홀랜다이즈 소스 자체에도 약간의 매콤한 맛이 가미된 에그베네딕트로, **쿳사에서 가장 사랑받고 또 유명한 메뉴**이기도 합니다. *미취학 아동의 기준으로 맵다고 느낄 수 있습니다",
      },
      {
        id: 275,
        name: "크랩&새우 토스타다",
        price: 18500,
        description:
          "제철을 맞은 풍성한 허브샐러드와 그릴에 구운 로메인을 곁들인 토스타다는, 오븐에서 알맞게 구워진 탱글한 새우와 부드러운 홍게살에 유자와 라임으로 기분좋은 산미를 더한 요리입니다.",
      },
      {
        id: 276,
        name: "그린 바질페스토 & 샐러드 파스타 볼",
        price: 16300,
        description:
          "쿳사 바질페스토를 곁들여 조리한 쌀 모양의 파스타 면(오르조)과 봄여름의 계절감을 완연하게 느낄 수 있는 시즈널 그린 믹스가 더해져 풍부하면서도 산뜻함을 강조한 샐러드 볼입니다.",
      },
      {
        id: 277,
        name: "아시안 포크밸리 라이스",
        price: 17600,
        description:
          "8시간의 숙성과 8시간의 저온조리로 부드럽게 익힌 삼겹살, 은은한 코코넛, 라임 향의 아시안 라이스, 고수 샐러드 & 파인애플 살사를 균형있게 쌓아올려 맛과 향이 완성되었습니다",
      },
      {
        id: 278,
        name: "화이트라구 파스타 w 치미추리",
        price: 17600,
        description:
          "라구 비앙코(ragu bianco)의 형식으로 선보입니다. 화이트 라구는 야채와 고기를 따로 볶아 각각의 감칠맛을 끌어올린 후 함께 또 다시 오랜시간 녹진하게 끓여 깊이를 더합니다",
      },
      {
        id: 279,
        name: "블랙 콘 프리터 & 칠리 꼰 카르네",
        price: 17600,
        description:
          "호주에서 흔히 브런치로 접할 수 있는 콘 프리터를 쿳사만의 색으로 만든 메뉴입니다. \\살짝 매콤하지만 부드러운 맛의 조화가 특히나 인상깊은 메뉴입니다.",
      },
      {
        id: 280,
        name: "치킨콩피 & 보리 버섯 필라프",
        price: 15800,
        description:
          "콩피한 닭다리를 다시 한 번 크리스피하게 구워, 매쉬 포테이토와 버섯 보리필라프가 한데 어우러진 디쉬입니다. 비교적 고소하고 부드럽게 드실 수 있는 식사입니다",
      },
    ],
  },
  {
    id: 37,
    name: "오늘통닭 신촌직영점",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로11길 8 1~3층 (우)03788",
    hours: "'매일': '11:00 ~ 02:00'",
    reviewCount: 316,
    rating: 3.2,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '친절', 'score': '3'}, {'category': '분위기', 'score': '3'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AF%E1%84%90%E1%85%A9%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B0+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%A8%E1",
    univName: "연세대학교",
    menus: [
      {
        id: 281,
        name: "똥집후라이드",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 282,
        name: "쫄면",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 283,
        name: "유부우동",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 284,
        name: "쥐포튀김",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 285,
        name: "국물닭발",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 286,
        name: "윙봉삼총사",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 287,
        name: "윙봉후라이드",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 288,
        name: "커리클치킨",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 289,
        name: "오늘통닭1977",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 290,
        name: "마늘통닭1984",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 291,
        name: "콘치즈폭탄2010",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 292,
        name: "로제치킨2021",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 293,
        name: "양념치킨",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 294,
        name: "단짠소이치킨",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 295,
        name: "치킨삼총사",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 296,
        name: "국물떡볶이",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 297,
        name: "크림떡볶이",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 298,
        name: "로제떡볶이",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 299,
        name: "크림파스타",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 300,
        name: "로제파스타",
        price: 0,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 38,
    name: "강남불백 3호점",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로4길 6 1층 (우)03779",
    hours: "'매일': '10:00 ~ 23:00'",
    reviewCount: 1426,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '62'}, {'category': '가성비', 'score': '53'}, {'category': '친절', 'score': '42'}, {'category': '분위기', 'score': '37'}, {'category': '주차', 'score': '12'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%82%E1%85%A1%E1%86%B7%E1%84%87%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8+3%E1%84%92%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 301,
        name: "불백정식",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 302,
        name: "우삼겹정식",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 303,
        name: "불낙정식(2인)",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 304,
        name: "불쭈정식(2인)",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 305,
        name: "해물김치전",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 306,
        name: "계란말이",
        price: 10000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 39,
    name: "대성이네",
    category: "🍗 닭요리",
    address: "서울 서대문구 연세로5나길 33 1층 (우)03787",
    hours: "'화~일': '12:00 ~ 23:00'",
    reviewCount: 774,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%83%E1%85%A2%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A6_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 307,
        name: "깻잎찜닭(2인)",
        price: 28000,
        description: "설명 없음",
      },
      {
        id: 308,
        name: "주먹밥",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 309,
        name: "볶음밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 310,
        name: "깻잎찜닭(3인)",
        price: 39000,
        description: "설명 없음",
      },
      {
        id: 311,
        name: "깻잎찜닭(4인)",
        price: 49000,
        description: "설명 없음",
      },
      {
        id: 312,
        name: "간장찜닭(2인)",
        price: 30000,
        description: "설명 없음",
      },
      {
        id: 313,
        name: "간장찜닭(3인)",
        price: 41000,
        description: "설명 없음",
      },
      {
        id: 314,
        name: "간장찜닭(4인)",
        price: 51000,
        description: "설명 없음",
      },
      {
        id: 315,
        name: "치즈",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 316,
        name: "치즈떡",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 317,
        name: "소세지",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 318,
        name: "납작당면",
        price: 3000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 40,
    name: "명성양꼬치 본점",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로4길 33 1층 (우)03777",
    hours: "'매일': '15:00 ~ 23:00'",
    reviewCount: 19,
    rating: 4.1,
    likePoints:
      "[{'category': '맛', 'score': '8'}, {'category': '친절', 'score': '7'}, {'category': '가성비', 'score': '1'}, {'category': '분위기', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%81%E1%85%A9%E1%84%8E%E1%85%B5+%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 319,
        name: "양꼬치(1인)",
        price: 14000,
        description: "기본 2인분 주문",
      },
      {
        id: 320,
        name: "어깨갈비(1인)",
        price: 14000,
        description: "기본 2인분 주문",
      },
      {
        id: 321,
        name: "마라갈비(1인)",
        price: 14000,
        description: "기본 2인분 주문",
      },
      {
        id: 322,
        name: "마파두부",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 323,
        name: "꿔바로우",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 324,
        name: "가지요리",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 325,
        name: "건두부볶음",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 326,
        name: "토마토계란탕",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 327,
        name: "계란탕",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 328,
        name: "옥수수국수",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 329,
        name: "마라옥수수면",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 330,
        name: "물만두",
        price: 6000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 41,
    name: "정육면체",
    category: "🚗 주차",
    address: "서울 서대문구 연세로5다길 22-8 1층 (우)03789",
    hours: "'매일': '11:30 ~ 21:00'",
    reviewCount: 657,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '79'}, {'category': '친절', 'score': '38'}, {'category': '분위기', 'score': '37'}, {'category': '가성비', 'score': '26'}, {'category': '주차', 'score': '6'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B2%E1%86%A8%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8E%E1%85%A6_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 331,
        name: "홍탄",
        price: 11000,
        description:
          "자작한 국물에 으깬 땅콩과 볶은 돼지고기를 비벼 먹는 고소하고 담백한 국물 탄탄면",
      },
      {
        id: 332,
        name: "깨부수면",
        price: 13000,
        description:
          "깨 즈마장 소스에 고추 양념장과 쪽파, 깨, 땅콩을 비벼 먹는 꾸덕한 텍스처의 비빔 탄탄면",
      },
      {
        id: 333,
        name: "백탄",
        price: 11000,
        description:
          "자작한 국물에 으깬 땅콩과 볶은 돼지고기를 비벼 먹는 고소하고 담백한 국물 탄탄면",
      },
      {
        id: 334,
        name: "깨매운면",
        price: 13500,
        description:
          "즈마장 소스에 고추 양념장을 듬뿍 얹어 수란과 비벼 먹는 중독성 있는 매운맛의 비빔 탄탄면",
      },
      {
        id: 335,
        name: "마라새우면",
        price: 13000,
        description:
          "특제 마라소스에 두부, 표고버섯, 알새우를 함께 비벼 먹는 알싸한면",
      },
      {
        id: 336,
        name: "항정살비빔면",
        price: 13500,
        description:
          "특제 간장 소스에 항정살, 아삭한 무피클, 쪽파, 수란을 함께 비벼 먹는 달짝지근한 비빔면",
      },
      {
        id: 337,
        name: "초유린기(小)",
        price: 4500,
        description: "부드럽고 촉촉한 새콤단짠 닭가슴살 유린기",
      },
      {
        id: 338,
        name: "초유린기(大)",
        price: 8500,
        description: "부드럽고 촉촉한 새콤단짠 닭가슴살 유린기",
      },
      {
        id: 339,
        name: "제로펩시라임(355ml)",
        price: 2500,
        description: "설명 없음",
      },
      {
        id: 340,
        name: "콜라(355ml)",
        price: 2500,
        description: "설명 없음",
      },
      {
        id: 341,
        name: "스프라이트(355ml)",
        price: 2500,
        description: "설명 없음",
      },
      {
        id: 342,
        name: "카스(500ml)",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 343,
        name: "클라우드(500ml)",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 344,
        name: "홍탕우육면",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 345,
        name: "백탕우육면",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 346,
        name: "청계탕면(시즌메뉴)",
        price: 13000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 42,
    name: "카츠업",
    category: "🍽️ 항목 없음",
    address: "서울 서대문구 연세로5길 32 1층 (우)03789",
    hours: "'매일': '11:00 ~ 21:40'",
    reviewCount: 438,
    rating: 4.3,
    likePoints:
      "[{'category': '맛', 'score': '52'}, {'category': '가성비', 'score': '37'}, {'category': '친절', 'score': '21'}, {'category': '분위기', 'score': '9'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B3%E1%84%8B%E1%85%A5%E1%86%B8_img.png",
    univName: "연세대학교",
    menus: [
      {
        id: 347,
        name: "믹스카츠",
        price: 9900,
        description:
          "제주산 1등급 돈육을 저온숙성한 카츠업의 겉바속촉 부드러운 안심카츠와 촉촉한 등심카츠를 모두 맛볼 수 있는 메뉴",
      },
      {
        id: 348,
        name: "맵크반반카츠",
        price: 13900,
        description: "화끈한 매콤양념카츠& 고소한 크림카츠 반반. 양도 1.5배!",
      },
      {
        id: 349,
        name: "안심카츠",
        price: 9500,
        description:
          "제주산 1등급 150시간 숙성 돈육 겉바속촉 부드러운 안심카츠",
      },
      {
        id: 350,
        name: "모듬카츠",
        price: 13900,
        description:
          "등심카츠+안심카츠+치킨카츠+새우카츠까지 카츠업의 모든 수제카츠를 만날 수 있는 모듬카츠!",
      },
      {
        id: 351,
        name: "치즈불카츠",
        price: 12900,
        description:
          "고소한 1등급 국내산 치즈가 듬뿍! 불카츠 소스를 얹은 제주산 1등급 등심카츠",
      },
      {
        id: 352,
        name: "김치카츠나베",
        price: 9500,
        description:
          "진~하고 칼칼한 김치나베 위에 제주산 1등급 등심카츠와 신선한 국내산 계란이 올라가는 메뉴",
      },
      {
        id: 353,
        name: "크림오므카레",
        price: 12900,
        description:
          "부드러운 회오리 오믈렛과 수제 크림 소스, 메콤한 카레의 만남 거기에 제주산 생등심 카츠까지!",
      },
      {
        id: 354,
        name: "돈카츠카레",
        price: 8900,
        description:
          "제주산 1등급 겉바속촉 등심 카츠에 진한 감칠맛의 수제 카레를 곁들인 메뉴",
      },
      {
        id: 355,
        name: "냉모밀+미니카츠 정식",
        price: 11500,
        description:
          "주문즉시 삶아내 쫄~ 깃한 생면에 살얼음 동동 특제 육수 가슴속까지 시~원한 냉모밀!",
      },
      {
        id: 356,
        name: "등심카츠",
        price: 8500,
        description: "제주 돼지의 풍미 그대로 150시간 저온숙성한 생등심카츠",
      },
      {
        id: 357,
        name: "경양식 돈카츠",
        price: 9500,
        description:
          "겉바속촉 등심카츠 위에 토마토와 와인이 들어간 수제 데미그라스 소스를 얹은 메뉴",
      },
      {
        id: 358,
        name: "매콤양념카츠",
        price: 10500,
        description:
          "화끈~한 매운맛! 겉바속촉 등심카츠 위 매콤달달한 양념위 송송썬 청양고추가 올라갑니다",
      },
    ],
  },
  {
    id: 43,
    name: "자가제빵선명희피자 외대점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 이문로 65 1층 (우)02451",
    hours: "'매일': '12:00 ~ 22:30'",
    reviewCount: 4,
    rating: 5,
    likePoints:
      "[{'category': '맛', 'score': '4'}, {'category': '가성비', 'score': '4'}, {'category': '친절', 'score': '2'}, {'category': '분위기', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EC%9E%90%EA%B0%80%EC%A0%9C%EB%B9%B5%EC%84%A0%EB%AA%85%ED%9D%AC%ED%94%BC%EC%9E%90+%EC%99%B8%EB%8C%80%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 359,
        name: "달콤불고기피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 360,
        name: "매운바싹불고기피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 361,
        name: "콤비네이션피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 362,
        name: "바싹불고기피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 363,
        name: "고추불고기피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 364,
        name: "베이컨불고기피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 365,
        name: "베이컨할라피뇨피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 366,
        name: "고구마무스피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 367,
        name: "페페로니피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 368,
        name: "베이컨피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 369,
        name: "고르곤졸라피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 370,
        name: "파인애플피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 371,
        name: "야채피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 372,
        name: "쉬림프피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 373,
        name: "베이컨포테이토피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 374,
        name: "베이컨소세지피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 375,
        name: "직화매운갈비피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 376,
        name: "딥치즈베이컨피자",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 377,
        name: "불고기오븐스파게티",
        price: 0,
        description: "설명 없음",
      },
      {
        id: 378,
        name: "치즈오븐스파게티",
        price: 0,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 44,
    name: "성화금탕마라탕&튀김꼬치",
    category: "🥢 중국요리",
    address: "서울 동대문구 휘경로 7-1 3층 (우)02419",
    hours: "'매일': '10:30 ~ 01:30'",
    reviewCount: 1,
    rating: 5,
    likePoints: "[]",
    imageUrl: "[]",
    univName: "한국외국어대학교",
    menus: [],
  },
  {
    id: 45,
    name: "이상한떡볶이집",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 휘경로2가길 6 1층 (우)02441",
    hours:
      "'월,화,수,목,금,일': '11:00 ~ 21:00', '월,화,수,목,금,일 라스트오더': '~ 20:00'",
    reviewCount: 46,
    rating: 3.9,
    likePoints:
      "[{'category': '맛', 'score': '7'}, {'category': '가성비', 'score': '4'}, {'category': '분위기', 'score': '4'}, {'category': '친절', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EC%9D%B4%EC%83%81%ED%95%9C%EB%96%A1%EB%B3%B6%EC%9D%B4%EC%A7%91_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 380,
        name: "김치볶음밥",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 381,
        name: "매콤토마토파스타",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 382,
        name: "오므라이스",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 383,
        name: "함박스테이크",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 384,
        name: "매운 토마토 함박스테이크",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 385,
        name: "베이컨 크림 파스타",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 386,
        name: "날치알 새우 크림 파스타",
        price: 11000,
        description: "설명 없음",
      },
      {
        id: 387,
        name: "로제 파스타(해산물)",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 388,
        name: "새우볶음밥",
        price: 9500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 46,
    name: "파치 외대점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 천장산로 36 지하1층 (우)02405",
    hours: "'월~금': '10:30 ~ 20:30', '월~금 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 54,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '3'}, {'category': '가성비', 'score': '2'}, {'category': '친절', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%ED%8C%8C%EC%B9%98+%EC%99%B8%EB%8C%80%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 389,
        name: "베이컨토마토파스타",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 390,
        name: "체다치즈토마토파스타",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 391,
        name: "훈제삼겹필라프",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 392,
        name: "새우필라프",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 393,
        name: "치킨필라프",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 394,
        name: "버섯크림리소토",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 395,
        name: "매운통베이컨리소토",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 396,
        name: "토마토라구파스타",
        price: 12500,
        description: "설명 없음",
      },
      {
        id: 397,
        name: "트러플크림라구파스타",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 398,
        name: "투움바파스타",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 399,
        name: "새우바질파스타",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 400,
        name: "까르보나라파스타",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 401,
        name: "치킨크림파스타",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 402,
        name: "베이컨로제파스타",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 403,
        name: "새우로제파스타",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 404,
        name: "매운새우토마토파스타",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 405,
        name: "치킨토마토파스타",
        price: 11500,
        description: "설명 없음",
      },
      {
        id: 406,
        name: "베이컨올리오파스타",
        price: 10000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 47,
    name: "서가네 정육식당 본점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 휘경로2길 4 1층 (우)02440",
    hours: "'매일': '00:00 ~ 24:00'",
    reviewCount: 134,
    rating: 4.4,
    likePoints:
      "[{'category': '맛', 'score': '4'}, {'category': '가성비', 'score': '4'}, {'category': '친절', 'score': '3'}, {'category': '분위기', 'score': '3'}, {'category': '주차', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EC%84%9C%EA%B0%80%EB%84%A4+%EC%A0%95%EC%9C%A1%EC%8B%9D%EB%8B%B9+%EB%B3%B8%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 407,
        name: "돼지한마리(1kg)",
        price: 60000,
        description: "설명 없음",
      },
      {
        id: 408,
        name: "큰소한마리(1.2kg)",
        price: 74000,
        description: "설명 없음",
      },
      {
        id: 409,
        name: "작은소한마리(900g)",
        price: 59000,
        description: "설명 없음",
      },
      {
        id: 410,
        name: "소살치살",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 411,
        name: "소갈비살",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 412,
        name: "소꽃등심",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 413,
        name: "생삼겹살",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 414,
        name: "생목살",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 415,
        name: "생항정살",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 416,
        name: "소차돌박이",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 417,
        name: "소부채살",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 418,
        name: "소토시살",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 419,
        name: "소우삼겹",
        price: 16000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 48,
    name: "샤로스톤 외대점",
    category: "🥩 스테이크,립",
    address: "서울 동대문구 휘경로2가길 5 1층 (우)02441",
    hours: "'매일': '11:00 ~ 21:30', '매일 라스트오더': '~ 21:30'",
    reviewCount: 115,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EC%83%A4%EB%A1%9C%EC%8A%A4%ED%86%A4+%EC%99%B8%EB%8C%80%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 420,
        name: "살치살(180g)",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 421,
        name: "등심(180g)",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 422,
        name: "갈비살(200g)",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 423,
        name: "부채살(200g)",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 424,
        name: "규카츠(160g)",
        price: 17000,
        description: "설명 없음",
      },
      {
        id: 425,
        name: "리코타 치즈 샐러드",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 426,
        name: "쉬림프 샐러드",
        price: 8000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 49,
    name: "베브릿지 한국외대점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 휘경로 4-10 1층 (우)02440",
    hours: "'월~금': '09:00 ~ 23:00', '토,일 10:00 ~ 22:00'",
    reviewCount: 71,
    rating: 4.3,
    likePoints:
      "[{'category': '맛', 'score': '9'}, {'category': '분위기', 'score': '7'}, {'category': '가성비', 'score': '2'}, {'category': '친절', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EB%B2%A0%EB%B8%8C%EB%A6%BF%EC%A7%80+%ED%95%9C%EA%B5%AD%EC%99%B8%EB%8C%80%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 427,
        name: "아메리카노",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 428,
        name: "차오메이나이차",
        price: 4500,
        description: "설명 없음",
      },
      {
        id: 429,
        name: "알뿌깟",
        price: 4800,
        description: "설명 없음",
      },
      {
        id: 430,
        name: "오르차따",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 431,
        name: "마일로 다이노소어",
        price: 4000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 50,
    name: "무초타코",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 이문로12길 4-19 1층 (우)02443",
    hours:
      "'월,화,목,금,토,일': '11:00 ~ 22:00', '월,화,목,금,토,일 휴게시간': '15:00 ~ 17:00'",
    reviewCount: 36,
    rating: 4.7,
    likePoints:
      "[{'category': '맛', 'score': '16'}, {'category': '친절', 'score': '14'}, {'category': '분위기', 'score': '10'}, {'category': '가성비', 'score': '7'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EB%AC%B4%EC%B4%88%ED%83%80%EC%BD%94_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 432,
        name: "타코(2pcs)",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 433,
        name: "브리또",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 434,
        name: "퀘사디아",
        price: 11000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 51,
    name: "분99",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 천장산로4길 36 (우)02405",
    hours:
      "'매일': '11:00 ~ 20:30', '매일 휴게시간': '15:30 ~ 16:30', '매일 접수마감': '~ 20:00'",
    reviewCount: 45,
    rating: 4.3,
    likePoints:
      "[{'category': '맛', 'score': '14'}, {'category': '가성비', 'score': '9'}, {'category': '친절', 'score': '5'}, {'category': '분위기', 'score': '5'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EB%B6%8499_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 435,
        name: "소고기쌀국수 (양지)",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 436,
        name: "소고기쌀국수 (양지,힘줄)",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 437,
        name: "분짜",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 438,
        name: "토마토해산물쌀국수",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 439,
        name: "넴",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 440,
        name: "베트남 라이스",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 441,
        name: "돼지고기비빔쌀국수",
        price: 10500,
        description: "설명 없음",
      },
      {
        id: 442,
        name: "코코넛바나나튀김",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 443,
        name: "가라아게",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 444,
        name: "닭봉튀김",
        price: 4000,
        description: "설명 없음",
      },
      {
        id: 445,
        name: "해산물쌀국수",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 446,
        name: "구운목살스테이크",
        price: 9000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 52,
    name: "번패티번 외대점",
    category: "🚗 주차",
    address: "서울 동대문구 휘경로 13 1,2층 (우)02419",
    hours: "'매일': '11:00 ~ 21:30', '매일 라스트오더': '~ 21:00'",
    reviewCount: 129,
    rating: 4.3,
    likePoints:
      "[{'category': '맛', 'score': '10'}, {'category': '친절', 'score': '9'}, {'category': '분위기', 'score': '4'}, {'category': '가성비', 'score': '2'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EB%B2%88%ED%8C%A8%ED%8B%B0%EB%B2%88+%EC%99%B8%EB%8C%80%EC%A0%90_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 447,
        name: "치즈버거",
        price: 8300,
        description: "설명 없음",
      },
      {
        id: 448,
        name: "닭가술살치킨버거",
        price: 9300,
        description: "설명 없음",
      },
      {
        id: 449,
        name: "닭다리살치킨버거",
        price: 10800,
        description: "설명 없음",
      },
      {
        id: 450,
        name: "과카몰리버거",
        price: 10800,
        description: "설명 없음",
      },
      {
        id: 451,
        name: "트러플머쉬룸버거",
        price: 10800,
        description: "설명 없음",
      },
      {
        id: 452,
        name: "트러플리코타치즈버거",
        price: 10800,
        description: "설명 없음",
      },
      {
        id: 453,
        name: "하와이안버거",
        price: 12800,
        description: "설명 없음",
      },
      {
        id: 454,
        name: "아보카도쉬림프버거",
        price: 12800,
        description: "설명 없음",
      },
      {
        id: 455,
        name: "버라이어티팩",
        price: 20800,
        description: "설명 없음",
      },
      {
        id: 456,
        name: "플래터",
        price: 23800,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 53,
    name: "도란도란곱창",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 휘경로2길 5-10 (우)02441",
    hours: "'매일': '15:00 ~ 02:00'",
    reviewCount: 95,
    rating: 3.3,
    likePoints:
      "[{'category': '맛', 'score': '7'}, {'category': '가성비', 'score': '6'}, {'category': '친절', 'score': '4'}, {'category': '분위기', 'score': '3'}, {'category': '주차', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%EB%8F%84%EB%9E%80%EB%8F%84%EB%9E%80%EA%B3%B1%EC%B0%BD_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 457,
        name: "야채곱창",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 458,
        name: "순대볶음",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 459,
        name: "오돌뼈",
        price: 8500,
        description: "설명 없음",
      },
      {
        id: 460,
        name: "알곱창",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 461,
        name: "계란말이",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 462,
        name: "막창(소금/양념/간장)",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 463,
        name: "닭발",
        price: 9500,
        description: "설명 없음",
      },
      {
        id: 464,
        name: "닭똥집",
        price: 9500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 54,
    name: "153스트리트",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 휘경로 10 2층 (우)02440",
    hours: "'월~토': '11:00 ~ 21:30'",
    reviewCount: 225,
    rating: 3.9,
    likePoints:
      "[{'category': '맛', 'score': '4'}, {'category': '가성비', 'score': '2'}, {'category': '친절', 'score': '2'}, {'category': '분위기', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/153%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 465,
        name: "스트리트버거 (싱글)",
        price: 8900,
        description: "설명 없음",
      },
      {
        id: 466,
        name: "클래식버거 (싱글)",
        price: 9900,
        description: "설명 없음",
      },
      {
        id: 467,
        name: "치킨버거 (싱글)",
        price: 10900,
        description: "설명 없음",
      },
      {
        id: 468,
        name: "매버릭버거 (싱글)",
        price: 3900,
        description: "설명 없음",
      },
      {
        id: 469,
        name: "베이컨버거 (싱글)",
        price: 7500,
        description: "설명 없음",
      },
      {
        id: 470,
        name: "더블클래식버거 (싱글)",
        price: 11900,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 55,
    name: "최원석의돼지한판 서해쭈꾸미 시립대점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 전농로 222 시티빌라트 1층 101호 (우)02492",
    hours: "'매일': '11:00 ~ 01:00'",
    reviewCount: 2638,
    rating: 3.3,
    likePoints:
      "[{'category': '맛', 'score': '3'}, {'category': '친절', 'score': '3'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%B5%9C%EC%9B%90%EC%84%9D%EC%9D%98%EB%8F%BC%EC%A7%80%ED%95%9C%ED%8C%90+%EC%84%9C%ED%95%B4%EC%AD%88%EA%BE%B8%EB%AF%B8+%EC%8B%9C%EB%A6%BD%EB%8C%80%EC%A0%90_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 471,
        name: "숙성삼겹살 (180g)",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 472,
        name: "숙성주먹고기 (180g)",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 473,
        name: "가브리살 (180g)",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 474,
        name: "항정살 (180g)",
        price: 20000,
        description: "설명 없음",
      },
      {
        id: 475,
        name: "돼지반판 (600g)",
        price: 57500,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 56,
    name: "후루사토",
    category: "🍱 일본본식주점",
    address: "서울 동대문구 망우로18마길 16-1 지층 (우)02498",
    hours:
      "'화~토': '17:00 ~ 01:00', '일': '17:00 ~ 24:00', '화~토 라스트오더': '~ 00:30', '일 라스트오더 ~ 23:30', '월요일']",
    reviewCount: 88,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%ED%9B%84%EB%A3%A8%EC%82%AC%ED%86%A0_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 476,
        name: "복어지리",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 477,
        name: "복어튀김",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 478,
        name: "삼치된장구이",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 479,
        name: "하몽",
        price: 6000,
        description: "설명 없음",
      },
      {
        id: 480,
        name: "석화",
        price: 8000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 57,
    name: "망우로30",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 망우로 30-1 1층 (우)02494",
    hours: "'월,화,수,목,금,일': '09:30 ~ 20:00'",
    reviewCount: 179,
    rating: 4,
    likePoints:
      "[{'category': '분위기', 'score': '12'}, {'category': '친절', 'score': '6'}, {'category': '맛', 'score': '5'}, {'category': '주차', 'score': '4'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EB%A7%9D%EC%9A%B0%EB%A1%9C30_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 481,
        name: "치킨콥샐러드",
        price: 15000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 58,
    name: "혜성칼국수",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 왕산로 247-1 1층 (우)02488",
    hours: "'화~일': '10:30 ~ 20:00'",
    reviewCount: 416,
    rating: 3.6,
    likePoints:
      "[{'category': '맛', 'score': '39'}, {'category': '가성비', 'score': '20'}, {'category': '친절', 'score': '16'}, {'category': '분위기', 'score': '5'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%ED%98%9C%EC%84%B1%EC%B9%BC%EA%B5%AD%EC%88%98_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 482,
        name: "멸치칼국수",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 483,
        name: "닭칼국수",
        price: 10000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 59,
    name: "청량회관",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 서울시립대로 164 도석프라자 지하1층 (우)02505",
    hours:
      "'월~목': '18:00 ~ 24:00', '금': '18:00 ~ 01:00', '토': '17:00 ~ 01:00'",
    reviewCount: 157,
    rating: 4.7,
    likePoints:
      "[{'category': '맛', 'score': '18'}, {'category': '분위기', 'score': '12'}, {'category': '친절', 'score': '8'}, {'category': '가성비', 'score': '3'}, {'category': '주차', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%B2%AD%EB%9F%89%ED%9A%8C%EA%B4%80_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 484,
        name: "참치한상",
        price: 70000,
        description: "설명 없음",
      },
      {
        id: 485,
        name: "참치애비",
        price: 65000,
        description: "설명 없음",
      },
      {
        id: 486,
        name: "아마애비",
        price: 30000,
        description: "설명 없음",
      },
      {
        id: 487,
        name: "차돌박이라구스튜",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 488,
        name: "바지락술탕",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 489,
        name: "모듬튀김 (굴,새우,표고,고로케)",
        price: 23000,
        description: "설명 없음",
      },
      {
        id: 490,
        name: "단품튀김 (튀김 1종 선택)",
        price: 18000,
        description: "설명 없음",
      },
      {
        id: 491,
        name: "우니파스타",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 492,
        name: "닭정육구이",
        price: 22000,
        description: "설명 없음",
      },
      {
        id: 493,
        name: "오징어내장파스타",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 494,
        name: "바질명란파스타",
        price: 20000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 60,
    name: "서울뼈구이매운족발",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 왕산로 274-1 (우)02554",
    hours: "'화~일': '12:00 ~ 22:00'",
    reviewCount: 644,
    rating: 3.5,
    likePoints:
      "[{'category': '맛', 'score': '29'}, {'category': '가성비', 'score': '8'}, {'category': '분위기', 'score': '8'}, {'category': '친절', 'score': '5'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%84%9C%EC%9A%B8%EB%BC%88%EA%B5%AC%EC%9D%B4%EB%A7%A4%EC%9A%B4%EC%A1%B1%EB%B0%9C_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 495,
        name: "뼈구이 (1인분)",
        price: 13000,
        description: "안매운맛/중간맛/매운맛",
      },
      {
        id: 496,
        name: "뼈구의~리 (1인분)",
        price: 14000,
        description: "아주매운맛",
      },
      {
        id: 497,
        name: "미니족발",
        price: 20000,
        description: "안매운맛 매운맛 22,000원",
      },
      {
        id: 498,
        name: "양푼주먹밥",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 499,
        name: "날치알주먹밥",
        price: 4000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 61,
    name: "이모네왕파전",
    category: "✨ 분위기",
    address: "서울 동대문구 회기로28길 12-3 (우)02446",
    hours: "'매일': '00:00 ~ 24:00'",
    reviewCount: 225,
    rating: 3.2,
    likePoints:
      "[{'category': '가성비', 'score': '14'}, {'category': '맛', 'score': '9'}, {'category': '친절', 'score': '4'}, {'category': '분위기', 'score': '4'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%9D%B4%EB%AA%A8%EB%84%A4%EC%99%95%ED%8C%8C%EC%A0%84_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 500,
        name: "해물파전",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 501,
        name: "김치전",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 502,
        name: "김치치즈파전",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 503,
        name: "고추전",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 504,
        name: "깻잎전",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 505,
        name: "감자전",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 506,
        name: "오삼불고기",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 507,
        name: "치즈계란말이",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 508,
        name: "메밀전방",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 509,
        name: "골뱅이무집",
        price: 15000,
        description: "설명 없음",
      },
      {
        id: 510,
        name: "해물라면전골",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 511,
        name: "A set 파전+생선+닭도리탕+옥수수콘+떡볶이+음료",
        price: 43000,
        description: "설명 없음",
      },
      {
        id: 512,
        name: "B set 파전+메일전영+고추전+옥수수콘+떡볶이+음료",
        price: 34000,
        description: "설명 없음",
      },
      {
        id: 513,
        name: "C set 파전+해물팡뽕+옥수수콘+떡볶이+음료",
        price: 26000,
        description: "설명 없음",
      },
      {
        id: 514,
        name: "D set 파전+곱창전골+옥수수촌+떡M이+지핑막걸리",
        price: 26000,
        description: "설명 없음",
      },
      {
        id: 515,
        name: "E set 파전+도토리묵+옥수수콘+떡볶이+음료",
        price: 21000,
        description: "설명 없음",
      },
      {
        id: 516,
        name: "F set 파진+닭발+옥수수콘+떡볶이+음료",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 517,
        name: "H set 파전+꼬치오뎅탕+옥수수콘+떡볶이+음료",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 518,
        name: "I set 파전+강치치즈파전+옥수수콘+떡볶이+음료",
        price: 29000,
        description: "설명 없음",
      },
      {
        id: 519,
        name: "J set 파전+홍합낙자탕+옥수수콘+떡볶이+음료",
        price: 28000,
        description: "설명 없음",
      },
      {
        id: 520,
        name: "G set 파전+치즈계란말이+옥수수븐+떡튀이+음료",
        price: 0,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 62,
    name: "은하곱창",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 전농로15길 22 1층 (우)02546",
    hours:
      "'월~금': '11:00 ~ 21:30', '월~금 휴게시간': '13:30 ~ 14:30', '토': '11:00 ~ 20:00', '월~금 라스트오더': '~ 12:30', '월~금 라스트오더': '~ 20:30', '토 라스트오더': '~ 19:00'",
    reviewCount: 460,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '26'}, {'category': '가성비', 'score': '19'}, {'category': '친절', 'score': '14'}, {'category': '분위기', 'score': '10'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%9D%80%ED%95%98%EA%B3%B1%EC%B0%BD_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 521,
        name: "돼지곱창전골 (소)",
        price: 30000,
        description: "설명 없음",
      },
      {
        id: 522,
        name: "돼지곱창전골 (중)",
        price: 35000,
        description: "설명 없음",
      },
      {
        id: 523,
        name: "돼지곱창전골 (대)",
        price: 40000,
        description: "설명 없음",
      },
      {
        id: 524,
        name: "오징어볶음",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 525,
        name: "잔치국수",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 526,
        name: "비빔국수",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 527,
        name: "모밀국수",
        price: 5000,
        description: "설명 없음",
      },
      {
        id: 528,
        name: "열무국수",
        price: 5000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 63,
    name: "신락원",
    category: "✨ 분위기",
    address: "서울 동대문구 전농로20길 2 1층 (우)02506",
    hours:
      "'화~토': '11:30 ~ 22:00', '일': '11:30 ~ 21:00', , '화~일 휴게시간': '15:00 ~ 17:00', '화~토 라스트오더': '~ 21:20', '일 라스트오더': '~ 20:20'",
    reviewCount: 82,
    rating: 3.7,
    likePoints:
      "[{'category': '맛', 'score': '9'}, {'category': '가성비', 'score': '6'}, {'category': '친절', 'score': '5'}, {'category': '분위기', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EC%8B%A0%EB%9D%BD%EC%9B%90_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 529,
        name: "양장피",
        price: 32000,
        description: "설명 없음",
      },
      {
        id: 530,
        name: "오향장육",
        price: 30000,
        description: "설명 없음",
      },
      {
        id: 531,
        name: "해파리냉채",
        price: 23000,
        description: "설명 없음",
      },
      {
        id: 532,
        name: "삼풍냉채",
        price: 35000,
        description: "설명 없음",
      },
      {
        id: 533,
        name: "유니자장면",
        price: 5000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 64,
    name: "브레드칸 청량리점",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 왕산로 268-1 (우)02554",
    hours: "'매일': '06:30 ~ 24:00', '둘째,넷째 일요일 휴무'",
    reviewCount: 109,
    rating: 4.5,
    likePoints:
      "[{'category': '가성비', 'score': '24'}, {'category': '맛', 'score': '22'}, {'category': '친절', 'score': '16'}, {'category': '분위기', 'score': '4'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EB%B8%8C%EB%A0%88%EB%93%9C%EC%B9%B8+%EC%B2%AD%EB%9F%89%EB%A6%AC%EC%A0%90_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 534,
        name: "초코머핀",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 535,
        name: "미니케이크",
        price: 12000,
        description: "설명 없음",
      },
      {
        id: 536,
        name: "케이크 1호",
        price: 16000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 65,
    name: "독",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 왕산로 278 (우)02554",
    hours: "'매일': '16:00 ~ 24:00'",
    reviewCount: 83,
    rating: 3.8,
    likePoints:
      "[{'category': '맛', 'score': '10'}, {'category': '가성비', 'score': '10'}, {'category': '친절', 'score': '8'}, {'category': '분위기', 'score': '6'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EB%8F%85_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 537,
        name: "조폭불고기 (200g)",
        price: 7000,
        description: "설명 없음",
      },
      {
        id: 538,
        name: "18K도시락",
        price: 1500,
        description: "설명 없음",
      },
      {
        id: 539,
        name: "김치냉국수",
        price: 2000,
        description: "설명 없음",
      },
      {
        id: 540,
        name: "치즈닭알찜",
        price: 3000,
        description: "설명 없음",
      },
      {
        id: 541,
        name: "날치알닭알찜",
        price: 3000,
        description: "설명 없음",
      },
    ],
  },
  {
    id: 66,
    name: "마루한",
    category: "🍽️ 항목 없음",
    address: "서울 동대문구 서울시립대로27길 3 (우)02557",
    hours: "'매일': '11:00 ~ 22:30'",
    reviewCount: 448,
    rating: 4.2,
    likePoints:
      "[{'category': '맛', 'score': '8'}, {'category': '가성비', 'score': '5'}, {'category': '친절', 'score': '2'}, {'category': '분위기', 'score': '1'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%8B%9C%EB%A6%BD%EB%8C%80/%EB%A7%88%EB%A3%A8%ED%95%9C_img.png",
    univName: "서울시립대학교",
    menus: [
      {
        id: 542,
        name: "양념돼지갈비",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 543,
        name: "육회 한접시",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 544,
        name: "생통목살",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 545,
        name: "생삼겹살",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 546,
        name: "생연어비빔밥",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 547,
        name: "고기양50g 육회비빔밥(기본)",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 548,
        name: "고기양 100g 육회비빔밥(특)",
        price: 9000,
        description: "설명 없음",
      },
      {
        id: 549,
        name: "맑은/ 사골 소곰탕",
        price: 10000,
        description: "설명 없음",
      },
      {
        id: 550,
        name: "두부김치찌개",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 551,
        name: "순두부김치찌개",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 552,
        name: "해물순두부된장찌개",
        price: 8000,
        description: "설명 없음",
      },
      {
        id: 553,
        name: "왕소갈비탕",
        price: 14000,
        description: "설명 없음",
      },
      {
        id: 554,
        name: "한우 차돌박이",
        price: 25000,
        description: "설명 없음",
      },
      {
        id: 555,
        name: "갈매기살",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 556,
        name: "대패삼겹",
        price: 16000,
        description: "설명 없음",
      },
      {
        id: 557,
        name: "가브리살",
        price: 16000,
        description: "설명 없음",
      },
    ],
  },
];

// likePoints 파싱 함수
export const parseLikePoints = (likePoints) => {
  if (!likePoints) return [];

  try {
    if (typeof likePoints === "string") {
      if (likePoints.trim().startsWith("[")) {
        return JSON.parse(likePoints);
      }
      return likePoints.split(",").map((point) => point.trim());
    }
    if (Array.isArray(likePoints)) {
      return likePoints;
    }
    return [];
  } catch (e) {
    console.warn("Error parsing likePoints:", e);
    return [];
  }
};

// 레스토랑 데이터 변환 함수
export const transformPlaceData = (place) => {
  // 카테고리 이모티콘 매핑 로직 추가
  const categoryWithoutEmoji =
    place.category.replace(/^[^a-zA-Z가-힣]+/, "") || "항목 없음";
  const emoji = categoryEmojis[categoryWithoutEmoji] || "🍽️";

  // 변경 코드 (수정 후)
  const sanitizeImageUrl = (url, id) => {
    // 1번부터 66번까지의 가게 이미지 URL만 사용
    if (id >= 1 && id <= 66) {
      if (!url) return "";
      try {
        // URL이 이미 인코딩되어 있는지 확인
        if (url.includes("%")) {
          return url;
        }
        // S3 버킷 URL 형식 확인
        if (url.includes("camchelin-bucket.s3")) {
          return encodeURI(url);
        }
        return url;
      } catch (e) {
        console.warn("Image URL processing error:", e);
        return "";
      }
    }
    // 67번 이상의 가게는 빈 문자열 반환
    return "";
  };

 // transformPlaceData 함수 수정
return {
  id: place.id || 0,
  name: place.name || "",
  category: `${emoji} ${categoryWithoutEmoji}`, // 이모티콘 + 카테고리명
  address: place.address || "",
  hours: place.hours || "",
  rating: place.rating || 0,
  likePoints: parseLikePoints(place.likePoints),
  imageUrl: sanitizeImageUrl(place.imageUrl, place.id),  // id 전달
  univName: place.univName || "",
  menus: Array.isArray(place.menus) ? place.menus : [],
  position: {
    lat:
      universityLocations[place.univName?.replace("대학교", "")]?.lat ||
      37.564512,
    lng:
      universityLocations[place.univName?.replace("대학교", "")]?.lng ||
      126.938977,
  },
};

// 초기 데이터 로드 함수
export const loadInitialData = () => {
  return restaurantData.map(transformPlaceData);
};
