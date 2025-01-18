// restaurantData.js

// 대학교 위치 정보
export const universityLocations = {
  서강대: { lat: 37.551292, lng: 126.940108 },
  시립대: { lat: 37.5849836, lng: 127.057752 },
  이대: { lat: 37.562691, lng: 126.947684 },
  연대: { lat: 37.564512, lng: 126.938977 },
  외대: { lat: 37.5977017, lng: 127.0579181 },
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
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "떡이 별로 없고 전체적으로 얕은 맛이어서 아쉬움이 남습니다.",
      ],
      topSentence:
        "유부초밥과 우동은 맛이 뛰어나며, 특히 소고기김치 유부초밥과 타코와사비가 인기가 있습니다.",
      positiveSentences: [
        "유부초밥과 우동은 맛이 뛰어나며, 특히 소고기김치 유부초밥과 타코와사비가 인기가 있습니다.",
        "음식과 매장이 깔끔하여 포장 서비스도 훌륭합니다.",
        "직원들의 친절한 서비스와 친밀한 분위기 덕분에 자주 방문하고 싶은 곳입니다.",
        "우드톤의 아기자기한 인테리어와 조용한 분위기로 혼밥하기에 좋은 아늑한 공간입니다.",
        "가격대비 양과 질이 훌륭하여 재방문의사가 있습니다.",
      ],
    },
  },
  {
    id: 2,
    name: "언니네함바그",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "함바그의 간이 약하고 소스가 싱거워 맛이 부족했으며, 고기 잡내가 느껴져 풍미가 아쉬워요.",
        "좌석 수가 적어 피크타임에 방문을 피해야 하고, 에어커튼 설치가 필요합니다.",
      ],
      topSentence:
        "매운 함바그와 치즈 함바그의 맛은 매우 훌륭하며, 다양한 맛의 하모니가 입맛을 사로잡습니다. 샐러드와 함박스테이크는 양도 푸짐하고 꾸준한 맛을 유지하며, 데미그라스 소스가 매콤함을 강조한 요리는 특히 쫄깃한 식감을 자랑합니다.",
      positiveSentences: [
        "매운 함바그와 치즈 함바그의 맛은 매우 훌륭하며, 다양한 맛의 하모니가 입맛을 사로잡습니다. 샐러드와 함박스테이크는 양도 푸짐하고 꾸준한 맛을 유지하며, 데미그라스 소스가 매콤함을 강조한 요리는 특히 쫄깃한 식감을 자랑합니다.",
        "직원과 사장님의 친절한 서비스는 손님들에게 큰 만족을 주며, 핑크색 맨투맨을 입은 직원은 특히 친절하게 응대합니다.",
        "가게는 따뜻하고 아기자기하게 꾸며져 있으며, 고객에게 아늑하고 편안한 분위기를 제공합니다. 특히 내부 인테리어와 음악이 잘 어우러져 외출하기에도 적합한 장소입니다.",
        "가격 대비 음식의 양이 많아 가성비가 우수하며, 손님들에게 만족감을 줍니다.",
      ],
    },
  },
  {
    id: 3,
    name: "크치치킨 회기점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [],
      topSentence:
        "크치치킨 회기점의 음식은 엄청난 양과 맛으로 손님들의 만족도를 높이며 특히 깻잎치킨, 매콤파스타, 크리미어니언치킨은 바삭한 식감과 촉촉한 속살로 인기가 많습니다.",
      positiveSentences: [
        "크치치킨 회기점의 음식은 엄청난 양과 맛으로 손님들의 만족도를 높이며 특히 깻잎치킨, 매콤파스타, 크리미어니언치킨은 바삭한 식감과 촉촉한 속살로 인기가 많습니다.",
        "크치치킨 회기점은 직원들이 친절하고 서비스가 훌륭하여 방문객들에게 좋은 인상을 줍니다.",
        "이곳은 넓고 쾌적한 매장과 세련된 펍 같은 분위기로 단체 모임에 적합하며 친구들과 행복한 시간을 보낼 수 있습니다.",
        "크치치킨 회기점은 양과 구성이 훌륭하며 무료 순살 변경이 가능한 뛰어난 가성비로 만족감을 줍니다.",
      ],
    },
  },
  {
    id: 4,
    name: "푸른하늘",
    category: "친절",
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
    representativeSentenceMap: {
      negativeSentences: [
        "김밥이 느끼하고 순대가 평범하며, 참치김밥의 마요네즈 배분이 균일하지 않아, 전체적으로 음식 맛은 기대 이하입니다.",
        "미나리에서 돌이 나와 위생에 문제가 있으며, 전반적으로 철수세미 등 위생 관리가 부족합니다.",
        "직원의 불친절함과 정신없는 매장 분위기로, 전반적인 서비스에 불만족스럽습니다.",
      ],
      topSentence:
        "푸른하늘에서는 매콤하면서 달달한 떡볶이와 토종순대 맛이 일품이며, 참치김밥과 치즈김밥도 아주 맛있습니다.",
      positiveSentences: [
        "푸른하늘에서는 매콤하면서 달달한 떡볶이와 토종순대 맛이 일품이며, 참치김밥과 치즈김밥도 아주 맛있습니다.",
        "푸른하늘은 추억의 분식집 스타일로 옛날 느낌이 가득하고, 경희대 대표 분식집으로 자주 찾는 사람들이 많습니다.",
        "푸른하늘은 저렴한 가격과 풍부한 양으로 가성비가 뛰어나며, 특히 참치김밥과 라볶이는 곱빼기도 무료로 제공되어 배부르게 먹을 수 있습니다.",
      ],
    },
  },
  {
    id: 5,
    name: "회기왕족발보쌈",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "족발은 차고 질겨서 기대와 달리 식감이 좋지 않으며, 가끔은 누린내가 나거나 부위의 운에 따라 달라지는 맛입니다.",
        "직원들이 인상을 쓰고 불친절하며, 손님을 무시하는 태도가 불편함을 줍니다.",
        "위생 상태가 좋지 않으며, 국물에 머리카락이 나오는 등 전반적으로 청결하지 못한 환경입니다.",
        "김치 추가에 추가 요금이 필요하며, 가격에 비해 만족도가 낮아 비용이 아깝다는 느낌을 줍니다.",
        "매장이 좁고 시끄러워서 복잡한 분위기를 자아냅니다.",
      ],
      topSentence:
        "이곳의 김치는 맛있고, 보쌈 및 족발은 부드러우며 잡내 없이 깔끔하게 조리되어 특히 김치와 함께 먹기 좋은 맛집입니다.",
      positiveSentences: [
        "이곳의 김치는 맛있고, 보쌈 및 족발은 부드러우며 잡내 없이 깔끔하게 조리되어 특히 김치와 함께 먹기 좋은 맛집입니다.",
        "친절한 서비스가 인상적인 맛집으로, 사장님의 친절한 응대와 직원들의 배려가 돋보입니다.",
        "음식에서 잡내가 나지 않아서 기분 좋게 식사할 수 있는 위생적인 장점이 있습니다.",
        "대학가 근처에 위치해 다양한 연령대의 손님들이 많고, 활기찬 분위기에서 식사할 수 있는 곳입니다.",
        "가격 대비 푸짐한 양을 제공하며, 가성비 높은 보쌈을 제공합니다.",
      ],
    },
  },
  {
    id: 6,
    name: "회기왕갈비탕",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식이 전반적으로 슴슴하고, 고기에서 냄새가 나며 양이 적어 맛에 불만족스럽습니다.",
        "서비스가 부족하여 예약 손님 때문에 나가라는 응대와 좌석 부족으로 웨이팅이 발생했습니다.",
        "가격이 비싼데 비해 제공되는 음식의 양과 질이 아쉽습니다.",
      ],
      topSentence:
        "갈비탕은 부드럽고 야들야들한 고기가 많고, 국물은 깊은 감칠맛을 자랑하여 아주 맛있습니다.",
      positiveSentences: [
        "갈비탕은 부드럽고 야들야들한 고기가 많고, 국물은 깊은 감칠맛을 자랑하여 아주 맛있습니다.",
        "매장은 조용한 분위기이며, 혼밥하기 좋은 공간으로 인테리어가 잘 되어 있습니다.",
        "가격 대비 맛과 양 모두 훌륭하여 가성비가 뛰어나 강력추천합니다.",
      ],
    },
  },
  {
    id: 7,
    name: "여기가좋겠네",
    category: "친절",
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
    representativeSentenceMap: {
      negativeSentences: [
        "닭볶음탕의 맛이 싱겁고 잡내가 나며 양념이 간이 안 베어 음식 전반적으로 맛이 떨어집니다.",
        "음식에서 생닭냄새와 비린맛이 나서 위생 상태가 좋지 않습니다.",
        "직원들의 불친절한 태도와 사과 없이 처리하는 응대가 고객 경험을 크게 떨어뜨립니다.",
      ],
      topSentence:
        "닭볶음탕의 맛이 싱겁고 잡내가 나며 양념이 간이 안 베어 음식 전반적으로 맛이 떨어집니다.",
      positiveSentences: [
        "고기떡볶이와 닭볶음탕의 맛이 일품이며, 밑반찬까지 모두 맛있어 가히 맛집이라 불릴만 합니다.",
        "직원분들이 매우 친절하고 사장님의 운영 또한 훌륭하여 전반적인 서비스가 만족스럽습니다.",
        "가격이 합리적이면서 양도 많아 가성비가 훌륭한 식당입니다.",
      ],
    },
  },
  {
    id: 8,
    name: "가야가야 이대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "차슈 고기가 얇고 돼지 누린내가 나며, 국물은 짜거나 무맛이라는 평이 많아 돈코츠 육수 맛에 대한 기대에 미치지 못했습니다.",
        "직원들의 불친절한 응대와 무례한 태도로 인해 서비스에 대한 만족도가 매우 낮았습니다. 특히, 손님을 하인처럼 대하는 것은 큰 불편을 주었습니다.",
        "식당의 위생 상태가 좋지 않으며, 끈적끈적한 환경과 청소가 제대로 되지 않은 것으로 보였습니다.",
        "가격에 비해 양이 적고, 토핑이 부실하여 만족스럽지 않았습니다. 특히, 차슈 두께가 얇아 더욱 아쉽습니다.",
        "가게 분위기는 좁고 에어컨이 약하게 나와 불편했습니다. 혼자 가면 소파가 있는 자리가 있긴 하지만, 전반적인 접근성이 떨어졌습니다.",
      ],
      topSentence:
        "라멘의 국물이 깊고 깔끔하며, 차슈와 부추무침이 맛있고 반숙 계란의 익힘 정도가 적절하여 감칠맛을 돋구어 줍니다.",
      positiveSentences: [
        "라멘의 국물이 깊고 깔끔하며, 차슈와 부추무침이 맛있고 반숙 계란의 익힘 정도가 적절하여 감칠맛을 돋구어 줍니다.",
        "매장은 깔끔하고 쾌적하여 청결함이 돋보입니다.",
        "직원들이 매우 친절하고 환하게 인사하여 기분 좋은 서비스를 제공합니다.",
        "매장의 분위기가 일본 느낌을 주며, 많은 사람들이 찾아와 활기차고 좋습니다.",
        "양이 넉넉하고 가격이 적당하여 혼밥하기에도 좋습니다.",
      ],
    },
  },
  {
    id: 9,
    name: "고냉지",
    category: "분위기",
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
    representativeSentenceMap: {
      negativeSentences: [
        "김치찌개와 계란말이의 맛이 밋밋하고 최악으로 평가되며, 전반적으로 엄청 맛있지는 않다는 의견이 많습니다.",
        "위생적인 부분에서 머리카락 발견과 화장실 청소 미비 등이 언급되어 아쉬움이 남습니다.",
        "손님 응대가 부족하고 친절하지 않다는 지적이 있으며, 계산 시에도 고객 응대가 다소 아쉬운 점이 있습니다.",
        "가게 내부가 협소하고 시끌시끌한 분위기 때문에 불편함을 느낄 수 있습니다.",
        "가격 대비 가성비가 좋지 않으며, 특히 보쌈의 경우 구성은 좋지만 단품으로 시켰을 때 만족스럽지 않습니다.",
      ],
      topSentence:
        "고냉지의 김치찌개는 시원하고 깔끔한 맛으로 유명하며, 특히 계란말이와 보쌈도 큰 인기를 끌고 있습니다.",
      positiveSentences: [
        "고냉지의 김치찌개는 시원하고 깔끔한 맛으로 유명하며, 특히 계란말이와 보쌈도 큰 인기를 끌고 있습니다.",
        "직원들이 매우 친절하고 세심하게 챙겨주는 서비스가 인상적이며, 특히 혼밥 때도 편안하게 이용할 수 있습니다.",
        "풍성한 메뉴와 괜찮은 가격대로 가성비가 뛰어나며, 맛 또한 훌륭하여 정식 메뉴를 추천드립니다.",
      ],
    },
  },
  {
    id: 10,
    name: "마더린러베이글(이대점)",
    category: "제과,베이커리",
    address: "서울 서대문구 이화여대5길 5 1층 (우)03766",
    hours: "'월~금': '08:30 ~ 16:30', '토': '10:00 ~ 16:30'",
    reviewCount: 231,
    rating: 0,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Ewha/%E1%84%86%E1%85%A1%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%AB%E1%84%85%E1%85%A5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF(%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%B7)_img.png",
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
          "육즙이 �d~~~악 풍부한 등심살과 모짜렐라의 풍미가 입안 한가득",
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
    representativeSentenceMap: {
      negativeSentences: [
        "베이글의 맛과 커피의 품질이 아쉬웠고, 일부 메뉴는 기대에 미치지 못했습니다.",
        "직원들의 서비스가 미흡하여 포장만 가능하고 주문에 시간이 오래 걸리며 불친절함이 느껴졌습니다.",
        "매장 내 테이블이 없어 혼잡하며, 대기석 부족으로 불편한 환경이었습니다.",
      ],
      topSentence:
        "베이글 전문점으로 다양한 종류의 크림치즈와 신선한 연어를 곁들인 샌드위치가 특히 맛있습니다. 겉은 바삭하고 속은 쫀득한 베이글의 식감도 뛰어납니다.",
      positiveSentences: [
        "베이글 전문점으로 다양한 종류의 크림치즈와 신선한 연어를 곁들인 샌드위치가 특히 맛있습니다. 겉은 바삭하고 속은 쫀득한 베이글의 식감도 뛰어납니다.",
        "직원들이 매우 친절하고 고객 응대가 훌륭하여 방문에 대한 편견을 깨주었습니다.",
      ],
    },
  },
  {
    id: 11,
    name: "비밀",
    category: "분위기",
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
    representativeSentenceMap: {
      negativeSentences: [
        "타르트와 얼그레이 소스의 단맛과 소금빵의 구수한 맛이 잘 어우러지지 않아 아쉬웠다.",
        "가격이 높아 가성비를 기대하기 어렵다.",
      ],
      topSentence:
        "비밀은 다양한 종류의 빵과 샌드위치로 인기를 끌고 있으며, 특히 소금빵과 녹차 타르트가 뛰어난 맛을 자랑합니다. 건강한 재료를 사용한 가벼운 맛과 풍부한 식감의 조화로 많은 고객들이 재구매를 하고 있습니다.",
      positiveSentences: [
        "비밀은 다양한 종류의 빵과 샌드위치로 인기를 끌고 있으며, 특히 소금빵과 녹차 타르트가 뛰어난 맛을 자랑합니다. 건강한 재료를 사용한 가벼운 맛과 풍부한 식감의 조화로 많은 고객들이 재구매를 하고 있습니다.",
        "가게는 전체적으로 깔끔하고 신선한 빵을 제공하며 방부제를 사용하지 않는 것이 특징입니다.",
        "직원들이 매우 친절하여 방문객들에게 호응이 좋고, 서비스 측면에서도 만족도가 높습니다.",
        "비밀은 합리적인 가격에 높은 퀄리티의 빵을 제공하여 가성비가 뛰어나 많은 사람들이 재구매 의사를 밝히고 있습니다.",
      ],
    },
  },
  {
    id: 12,
    name: "비아37 신촌본점",
    category: "이탈리안",
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
    representativeSentenceMap: {
      negativeSentences: [
        "가격이 비싸고 양이 넉넉하지 않아 가성비가 아쉽습니다.",
      ],
      topSentence:
        "이 레스토랑의 뇨끼와 다양한 파스타는 신선함과 맛이 뛰어나며, 쉐프의 정성이 담긴 요리는 항상 기대 이상입니다.",
      positiveSentences: [
        "이 레스토랑의 뇨끼와 다양한 파스타는 신선함과 맛이 뛰어나며, 쉐프의 정성이 담긴 요리는 항상 기대 이상입니다.",
        "직원들은 매우 친절하며 세심한 서비스를 제공하여 고객 만족도를 높였습니다.",
        "세련된 인테리어와 아늑한 분위기가 인상적인 이곳은 친구들과의 모임이나 데이트 장소로 최적입니다.",
      ],
    },
  },
  {
    id: 13,
    name: "삭",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식의 맛이 전반적으로 맵고 튀김이 느끼하며, 떡볶이도 전통적인 맛이 아니라 아쉬웠습니다.",
        "주방 위생 상태와 청결이 부족하여 고객들이 신경 쓸 만한 수준입니다.",
        "서비스가 불친절하고 기다리는 시간이 길어, 고객 서비스에 대한 기대를 충족시키지 못했습니다.",
        "가격 대비 음식의 양이나 품질이 아쉬워 가성비가 부족합니다.",
      ],
      topSentence:
        "떡볶이와 튀김의 조합이 훌륭하고, 매콤달콤한 떡볶이 소스와 바삭한 튀김이 만족스러운 맛을 제공합니다.",
      positiveSentences: [
        "떡볶이와 튀김의 조합이 훌륭하고, 매콤달콤한 떡볶이 소스와 바삭한 튀김이 만족스러운 맛을 제공합니다.",
        "직원들이 매우 친절하여 방문할 때마다 기분 좋게 머물 수 있는 곳입니다.",
        "분식집의 옛날 시장 떡볶이 느낌과 아늑한 동네 노포 분위기가 매력적인 곳입니다.",
        "합리적인 가격에 양이 넉넉하여 가성비 훌륭한 맛집입니다.",
      ],
    },
  },
  {
    id: 14,
    name: "아건 이대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "메인 커리의 향신료 맛이 풍부하지만, 밀가루 맛이 강하게 느껴져서 전체적으로 맛이 없다는 평이 많습니다.",
        "식당 내 벌레와 바퀴벌레가 보이며 주방장의 마스크 미착용으로 위생 관념에 대한 불만이 많습니다.",
        "네이퍼페이 이용이 불가능해 불편하고, 대기 시간이 최소 30분이라 재방문 의사가 없다는 의견이 많습니다.",
      ],
      topSentence:
        "인도 음식의 맛이 훌륭하여 다양한 메뉴가 모두 맛있으며, 따뜻한 커리와 쫄깃한 난이 특히 인상적입니다.",
      positiveSentences: [
        "인도 음식의 맛이 훌륭하여 다양한 메뉴가 모두 맛있으며, 따뜻한 커리와 쫄깃한 난이 특히 인상적입니다.",
        "매장의 위생 상태가 깔끔하고 청결하여 안심하고 음식을 즐길 수 있습니다.",
        "사장님과 직원들이 모두 친절하여 고객 서비스가 훌륭하고 다시 방문하고 싶은 생각이 듭니다.",
        "식당의 인테리어와 화려한 분위기로 마치 인도 여행을 온 듯한 기분을 느낄 수 있습니다.",
        "합리적인 가격과 푸짐한 양으로 가성비가 뛰어나 많은 양의 세트 메뉴를 매우 만족스럽게 즐길 수 있습니다.",
      ],
    },
  },
  {
    id: 15,
    name: "아민 이화",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "식사의 전반적인 맛은 변화를 겪었으며 수란은 차갑고, 샥슈카는 짠 느낌이 강하며, 야채는 신선하지 않았습니다.",
        "직원분의 그릇 전달 방식이 불친절하고, 웨이팅 시간이 길어 서비스에 대한 만족도가 낮습니다.",
        "가격이 계속 오르고 비싼 편이라 가성비가 떨어지며, 양이 적어 보이는 것이 아쉽습니다.",
        "식사 시간이 되면 사람들이 많아 테이블이 협소하고 자리 배정도 아쉬웠습니다.",
      ],
      topSentence:
        "아민 이화는 건강하면서도 맛있는 지중해식 음식을 제공하며, 샥슈카와 리코타치즈 등 다양한 특별 메뉴들이 신선함을 더해주어 많은 고객들이 부담 없이 즐길 수 있습니다.",
      positiveSentences: [
        "아민 이화는 건강하면서도 맛있는 지중해식 음식을 제공하며, 샥슈카와 리코타치즈 등 다양한 특별 메뉴들이 신선함을 더해주어 많은 고객들이 부담 없이 즐길 수 있습니다.",
        "직원들이 매우 친절하며, 사장님은 밝은 미소로 고객을 맞이하고 서비스에 세심한 주의를 기울여 식사를 더욱 기분 좋게 만듭니다.",
        "이국적이면서도 아늑한 분위기를 자랑하는 아민 이화는 멋진 인테리어와 함께 좋은 무드를 제공하여 고객이 편안하게 식사를 즐길 수 있습니다.",
      ],
    },
  },
  {
    id: 16,
    name: "오르랔베이커리",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "빵과 음료의 맛은 전반적으로 단맛이 강하고 딱딱하며, 신선하지 않은 재료로 인해 아쉬움을 남깁니다. 특히 크림의 느끼함과 크루아상, 크러핀의 질감이 실망스럽습니다.",
        "직원들의 태도가 불친절하고 무뚝뚝하며, 고객 응대 능력이 부족하여 실망감을 줍니다. 특히 대충대충 서비스와 실수로 인한 불편함이 자주 발생합니다.",
        "매장과 테이블의 위생 상태가 좋지 않고, 빵의 위생 문제가 종종 지적되어 개선이 필요합니다.",
        "음료와 빵의 가격이 비싼 편이며, 가격 대비 품질이 아쉬워 멀리서 찾아갈 만한 가치는 없습니다.",
        "매장 내부의 위치와 의자 등 인테리어가 불편하며, 특히 주차나 문 출입 시 불편함이 많아 분위기가 다소 아쉽습니다.",
      ],
      topSentence:
        "빵 종류가 다양하고 맛이 훌륭하며, 특히 소금빵과 크로핀이 맛있는 곳입니다. 커피와의 조합도 만족스럽습니다.",
      positiveSentences: [
        "빵 종류가 다양하고 맛이 훌륭하며, 특히 소금빵과 크로핀이 맛있는 곳입니다. 커피와의 조합도 만족스럽습니다.",
        "매장이 깔끔하고 청결하여 위생적으로 관리가 잘 되고 있습니다.",
        "직원들이 친절하고, 자주 방문하고 싶은 매력적인 서비스로 인해 많은 사람들이 단골이 되는 곳입니다.",
        "편안하고 넓은 공간에서 음악과 함께 차분한 분위기를 느낄 수 있는 곳입니다. 특히 매장 분위기가 예쁘고 좋아요.",
      ],
    },
  },
  {
    id: 17,
    name: "카우떡볶이",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "떡볶이의 소스가 맵지 않고, 순대 내장에서 비린맛이 나며 감자튀김에서 쉰내가 나는 등 overall 맛이 평범하고 특별한 특징이 없었습니다.",
        "조리시 마스크를 착용하지 않으며 음식에서 머리카락이 나오는 등 위생 상태가 매우 미흡했습니다.",
        "사장님이 부정적인 피드백에 공격적으로 반응하고, 사과가 부족하며 셀프 서비스가 불편한 등 서비스가 전반적으로 불친절했습니다.",
        "가게가 좁고 자리가 따닥따닥 붙어 있어 아재감성의 음악 선곡과 더불어 전반적인 분위기가 좋지 않았습니다.",
        "즉떡 세트의 양이 적고 김말이 한 개에 1,200원으로 가성비가 좋지 않았습니다.",
      ],
      topSentence:
        "떡볶이와 즉석 떡볶이, 감자튀김이 맛있고 쫀득하며 건강한 맛으로 즐길 수 있습니다.",
      positiveSentences: [
        "떡볶이와 즉석 떡볶이, 감자튀김이 맛있고 쫀득하며 건강한 맛으로 즐길 수 있습니다.",
        "사장님이 매우 친절하고 서비스가 훌륭하여 방문객들이 기분 좋게 식사할 수 있습니다.",
        "합리적인 가격에 푸짐한 양으로 가성비 좋게 식사를 즐길 수 있습니다.",
      ],
    },
  },
  {
    id: 18,
    name: "하늘초밥",
    category: "초밥,롤",
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
    representativeSentenceMap: {
      negativeSentences: [
        "초밥은 맛있었지만, 육회비빔밥과 스시의 맛은 생각보다 별로였고, 밥의 품질도 아쉬웠습니다.",
        "서비스의 질이 전반적으로 문제였으며, 직원의 응대가 불친절하고 소스 요청을 무시하는 등 불만이 많았습니다.",
      ],
      topSentence:
        "하늘초밥은 신선함과 고급스러운 맛으로 유명하며, 생연어나 활새우초밥 같은 다양한 고퀄리티 스시 메뉴를 맛볼 수 있습니다.",
      positiveSentences: [
        "하늘초밥은 신선함과 고급스러운 맛으로 유명하며, 생연어나 활새우초밥 같은 다양한 고퀄리티 스시 메뉴를 맛볼 수 있습니다.",
        "사장님을 비롯한 직원들이 매우 친절하게 서비스하며, 고객 편의를 위해 연어초밥을 추가로 제공하는 마음까지 보여줍니다.",
      ],
    },
  },
  {
    id: 19,
    name: "미스터서왕만두",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "소룡포의 피가 두껍고, 육즙이 너무 많아 느끼하며, 해산물의 비린내가 나는 해물탕 등 전반적으로 맛이 실망스러웠습니다.",
        "홀 직원이 부족하고 서비스가 불친절하여 고객 응대가 아쉬웠습니다.",
        "주방에서 냄새가 나고 셀프바 및 간장통의 위생 관리가 부족하며 벌레와 이물질이 발견되었습니다.",
        "포장 주문이 홀 가격보다 비싸고 만두의 크기가 작아졌으며 해물탕은 비싼 편이라 가성비가 좋지 않았습니다.",
      ],
      topSentence:
        "이곳의 만두는 육즙이 풍부하고 담백하며 여러 메뉴들이 모두 맛있어서 많은 사람들이 추천하는 맛집입니다.",
      positiveSentences: [
        "이곳의 만두는 육즙이 풍부하고 담백하며 여러 메뉴들이 모두 맛있어서 많은 사람들이 추천하는 맛집입니다.",
        "식당의 청결 상태가 우수하며 KF94 마스크 착용 등 위생 관리를 철저히 하고 있습니다.",
        "만두의 가격이 매우 착하고 가성비가 훌륭해서 고객들이 만족스러워합니다.",
      ],
    },
  },
  {
    id: 20,
    name: "소바연구소",
    category: "일식",
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
    representativeSentenceMap: {
      negativeSentences: [],
      topSentence:
        "신촌 소바는 면이 쫄깃쫄깃하고 들기름 막국수의 고소한 맛이 일품입니다. 특히 고등어온소바와 장어덮밥은 꼭 추천드리고 싶습니다.",
      positiveSentences: [
        "신촌 소바는 면이 쫄깃쫄깃하고 들기름 막국수의 고소한 맛이 일품입니다. 특히 고등어온소바와 장어덮밥은 꼭 추천드리고 싶습니다.",
        "매장은 깔끔하고 쾌적하여 매우 만족스럽습니다.",
        "신촌 소바는 깔끔한 인테리어와 아늑한 분위기로 데이트 장소로 안성맞춤입니다.",
      ],
    },
  },
  {
    id: 21,
    name: "란주탕슉",
    category: "친절",
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
    representativeSentenceMap: {
      negativeSentences: [
        "볶음 도삭면과 짬뽕 등은 맵기 조절이 어렵고, 홍합이 덜 익는 등 전반적으로 맛이 없으며 면은 두껍고 쫄깃함이 부족해서 실망했습니다.",
        "웨이팅 시간 동안 불친절한 서비스와 소스 요청 불이행 등으로 인해 손님을 비둘기처럼 대하는 기분이 들었습니다.",
        "벌레와 바퀴벌레가 보이는 등 식당의 위생이 매우 나쁘고, 불안한 기분으로 식사를 해야 했습니다.",
        "가격에 비해 음식의 양이 다소 줄어들어 가성비가 좋지 않다는 점이 아쉽습니다.",
      ],
      topSentence:
        "볶음 도삭면과 짬뽕 등은 맵기 조절이 어렵고, 홍합이 덜 익는 등 전반적으로 맛이 없으며 면은 두껍고 쫄깃함이 부족해서 실망했습니다.",
      positiveSentences: [
        "도삭면으로 만든 짜장면은 쫄깃하고 해물이 가득한 짬뽕과 매콤한 꿔바로우까지 다양한 음식이 맛있습니다.",
        "직원들은 친절하고 서비스 속도가 빨라서 만족스러운 식사 경험을 제공합니다.",
        "가격이 적당하고 양이 많아 가성비가 뛰어난 식사를 할 수 있습니다.",
      ],
    },
  },
  {
    id: 22,
    name: "김광석신촌칼국수",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "이 식당의 소고기 요리는 호주산 냉동 소고기를 사용해 맛이 변화되고, 개운치 않은 된장국 같은 국물 맛으로 실망스러웠습니다.",
        "직원들의 무례한 태도와 서비스는 반말과 주문을 잊어버리는 등의 경험으로 인해 매우 불쾌했습니다.",
        "가격 인상에 비해 음식의 양이나 품질이 떨어져 가성비가 좋지 않은 느낌이었습니다.",
      ],
      topSentence:
        "칼칼하고 따끈한 국물 맛과 부드러운 소고기 샤브샤브가 인상적인 곳으로, 신선한 재료 덕분에 음식의 맛이 끝내줍니다.",
      positiveSentences: [
        "칼칼하고 따끈한 국물 맛과 부드러운 소고기 샤브샤브가 인상적인 곳으로, 신선한 재료 덕분에 음식의 맛이 끝내줍니다.",
        "국물과 다대기의 깔끔한 맛이 특징으로, 식당의 전반적인 위생 상황이 좋습니다.",
        "면 리필이 가능하고 가격 대비 맛과 양이 훌륭하여 가성비가 뛰어난 식당입니다.",
        "날씨가 쌀쌀한 겨울에 특히 생각나는 조용하고 편안한 분위기의 식당입니다.",
      ],
    },
  },
  {
    id: 23,
    name: "롤앤롤 김밥",
    category: "분위기",
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
    representativeSentenceMap: {
      negativeSentences: [
        "김밥의 맛은 치즈가 들어가 느끼하고 매운맛이 강하며, 전체적으로 짜고 평범하다는 평이 많습니다.",
        "주문 속도가 느리고 대기 시간이 길다는 서비스에 대한 불만이 자주 언급됩니다.",
        "매장이 협소하여 자리가 부족하다는 점이 분위기에 대한 주요 불만입니다.",
      ],
      topSentence:
        "롤앤롤 김밥은 스테이크 김밥과 계란김밥이 특히 맛있으며, 소고기와 치즈가 어우러져 포만감을 주고, 다양한 메뉴들이 미각을 자극합니다. 매콤한 잡채와 달달한 우엉의 조화도 뛰어납니다.",
      positiveSentences: [
        "롤앤롤 김밥은 스테이크 김밥과 계란김밥이 특히 맛있으며, 소고기와 치즈가 어우러져 포만감을 주고, 다양한 메뉴들이 미각을 자극합니다. 매콤한 잡채와 달달한 우엉의 조화도 뛰어납니다.",
        "매장이 청결하고 포장도 깔끔하여 위생적으로 안심할 수 있는 분위기입니다.",
        "직원들이 매우 친절하고 서비스가 뛰어나며 혼밥하기에도 편한 환경을 제공하여 만족도가 높습니다.",
        "매우 힙한 느낌의 분위기가 돋보이며 서울에서 김밥 하면 무적권 떠오르는 곳입니다.",
        "롤앤롤 김밥은 가격 대비 우수한 품질로 가성비가 뛰어나며 서강대 맛집으로 손꼽힙니다.",
      ],
    },
  },
  {
    id: 24,
    name: "스키당",
    category: "주차",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식의 맛이 전반적으로 좋지 않고, 너무 단 맛이 부담스럽습니다.",
        "직원들의 서비스 태도가 불친절하고 무례하여 고객 응대에 문제가 있습니다.",
        "식당은 평일 점심에 만석이 되며, 다소 시끄럽고 지나가는 사람들과 눈이 마주칠 수 있어 불편함이 있습니다.",
        "세트메뉴의 가격 대비 양이 부족하고 전반적으로 가격이 비싸다는 인상이 있습니다.",
      ],
      topSentence:
        "가라아게와 스키야키, 불고기 등이 신선한 재료로 가득하며, 부드러운 고기와 신선한 야채의 조화가 훌륭하여 맛있게 즐길 수 있는 곳입니다.",
      positiveSentences: [
        "가라아게와 스키야키, 불고기 등이 신선한 재료로 가득하며, 부드러운 고기와 신선한 야채의 조화가 훌륭하여 맛있게 즐길 수 있는 곳입니다.",
        "매장은 청결도가 높고 음식이 깔끔하게 제공되어 위생적으로 안심하고 식사할 수 있습니다.",
        "친절한 직원들이 주차 공간 확보를 도와주고, 사장님까지 친절하게 맞이해주어 방문객들에게 좋은 서비스를 제공합니다.",
        "실내가 예쁘고 아늑하여 전체적인 분위기가 좋아서 방문하는 이들에게 편안한 식사 경험을 제공합니다.",
        "2인 세트 메뉴가 추천할 만하며, 양이 많고 푸짐하게 제공되어 돈이 아깝지 않을 만큼 가성비가 좋습니다.",
      ],
    },
  },
  {
    id: 25,
    name: "을밀대 본점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "녹두전이 딱딱하고 육수의 간이 일정하지 않으며, 조미료 맛이 강하고 면이 두꺼워 맛이 예전 같지 않아 실망스럽습니다.",
        "주방이 지저분하고 전반적인 위생 상태가 좋지 않아 깔끔하지 않은 맛입니다.",
        "웨이팅 방법이 없어 서서 기다리게 하고, 서비스 태도는 불친절하며 손님 배려가 부족해 불쾌한 느낌을 받습니다.",
        "물냉면과 녹두전 가격이 계속 올라 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "녹두전이 딱딱하고 육수의 간이 일정하지 않으며, 조미료 맛이 강하고 면이 두꺼워 맛이 예전 같지 않아 실망스럽습니다.",
      positiveSentences: [
        "을밀대 본점의 냉면은 삼삼하면서도 깊고 시원한 육수와 부드러운 면발로 평양냉면의 진수를 느낄 수 있으며, 변함없는 맛을 유지하고 있습니다. 녹두전 또한 독보적으로 고소하고 진한 맛을 자랑하며, 수육의 고소한 맛도 일품입니다.",
        "을밀대 본점에서는 주차 지원과 친절한 직원 덕분에 웨이팅 없이 편안하게 식사할 수 있으며, 서비스가 매우 만족스럽습니다.",
      ],
    },
  },
  {
    id: 26,
    name: "정정 공덕1호점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식의 맛이 전반적으로 옛날 같지 않고, 탄탄면과 샤오룽바오는 밋밋하며, 우육면은 대만 스프 맛이 느껴지고 너무 기름지다.",
        "서비스가 전반적으로 불만족스러우며, 직원들의 예절 교육 필요성과 긴 대기 시간이 지적되고 있습니다.",
        "매장이 복잡하고 자리도 만석이며, 원하는 자리에 앉기 어려운 분위기입니다.",
        "전체적으로 높은 가격에 비해 양이 적고 가성비가 부족하다는 평이 많습니다.",
      ],
      topSentence:
        "딤섬과 소룡포, 새우볶음밥 등 모든 메뉴가 맛있고, 특히 소룡포는 육즙이 가득하며 고급스러운 맛이 돋보였습니다.",
      positiveSentences: [
        "딤섬과 소룡포, 새우볶음밥 등 모든 메뉴가 맛있고, 특히 소룡포는 육즙이 가득하며 고급스러운 맛이 돋보였습니다.",
        "화장실과 오픈 주방이 청결하여 매장 전체가 깔끔하게 관리되고 있었습니다.",
        "직원들이 친절하게 응대하며 웨이팅 없이 빠르게 입장할 수 있어 서비스가 매우 만족스러웠습니다.",
        "가게 내부는 넓고 재즈 음악과 한옥 분위기를 잘 살린 고품스러운 인테리어로 데이트하기 좋습니다.",
        "점심 메뉴는 가성비가 뛰어나서 적절한 가격에 푸짐한 식사를 즐길 수 있습니다.",
      ],
    },
  },
  {
    id: 27,
    name: "수저가",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "차돌짬뽕의 진한 맛은 호불호가 갈리며, 소스와 면발이 짜거나 자극적이라는 평이 많았습니다.",
        "대기 시간이 길고 웨이팅이 많아 불편하다는 평이 많았으며, 직원들의 응대도 다소 미흡했습니다.",
        "탕수육의 가격이 비싼데 비해 양이 부족하다는 의견이 많았습니다.",
      ],
      topSentence:
        "차돌짬뽕의 진한 맛은 호불호가 갈리며, 소스와 면발이 짜거나 자극적이라는 평이 많았습니다.",
      positiveSentences: [
        "수저가는 얼큰하고 깔끔한 국물의 짬뽕과 바삭한 탕수육이 일품이며, 차돌과 신선한 재료로 풍부한 맛을 제공합니다.",
        "수저가는 직원들이 친절하며, 반찬 리필과 음료 서비스까지 제공하여 만족스러운 경험을 선사합니다.",
        "수저가는 착한 가격에 많은 양과 맛있는 음식을 제공하여 최고의 가성비를 자랑합니다.",
      ],
    },
  },
  {
    id: 28,
    name: "정각",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "단호박리조또는 느끼하고 봉골레는 짠 맛이 강해서 아쉬웠으며, 문어 파스타는 맛있지만 문어의 식감이 부족했습니다.",
        "오픈형 주방이 매력적이었으나, 조리사가 마스크를 착용하지 않고 오래된 건물 냄새와 날파리로 인해 위생 상태가 염려되었습니다.",
        "직원 교육이 필요한 수준으로 불친절하고 응대가 부족하여 손님의 식사가 방해받았습니다.",
        "테라스 자리와 야외 테이블은 모기가 많고 분위기가 좋지 않아 기분이 나빴습니다.",
        "가격이 전반적으로 높고 양이 적어 가성비가 좋지 않았습니다.",
      ],
      topSentence:
        "부리타 치즈 과일 샐러드와 스테이크 맛집으로 불리며, 다양한 매콤한 문어 파스타와 같은 퓨전 요리가 인상적입니다. 특히, 천연 벌꿀 감자 피자와 한우 스테이크는 고급진 맛으로 기억에 남습니다.",
      positiveSentences: [
        "부리타 치즈 과일 샐러드와 스테이크 맛집으로 불리며, 다양한 매콤한 문어 파스타와 같은 퓨전 요리가 인상적입니다. 특히, 천연 벌꿀 감자 피자와 한우 스테이크는 고급진 맛으로 기억에 남습니다.",
        "직원들이 친절하고 매너가 좋으며, 빠른 서비스로 손님들에게 기분 좋은 식사 경험을 제공합니다.",
        "소개팅 장소로도 딱인 매장 내 인테리어와 야외 테라스 분위기가 편안하고 여유롭게 기분 좋은 시간을 보낼 수 있게 합니다.",
      ],
    },
  },
  {
    id: 29,
    name: "정든그릇",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "된장국의 강한 국물 맛과 명란 크림우동의 느끼함이 강조되어, 음식 맛이 과대평가된 느낌이 있습니다.",
        "불친절하고 기다림이 길어, 서비스가 약속한 만큼 만족스럽지 않은 점이 아쉽습니다.",
      ],
      topSentence:
        "돈까스와 다양한 메뉴들이 맛있으며, 육즙 가득한 두툼한 고기와 크리미한 소스가 인상적입니다.",
      positiveSentences: [
        "돈까스와 다양한 메뉴들이 맛있으며, 육즙 가득한 두툼한 고기와 크리미한 소스가 인상적입니다.",
        "직원들이 매우 친절하고 서비스가 훌륭하여 홍대 근처에서 식사하기 좋은 곳입니다.",
        "식당의 환경이 깔끔하며 정갈한 느낌을 주어 안심하고 식사할 수 있습니다.",
        "가격 대비 매우 가성비가 좋으며 양도 넉넉하게 제공되어 만족스럽습니다.",
        "아기자기하고 따뜻한 분위기의 내부가 데이트나 모임에 최적이며, 홍대 근처에서 밥 먹기 좋은 곳입니다.",
      ],
    },
  },
  {
    id: 30,
    name: "쭈꾸미블루스 신촌본점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식의 맛이 전체적으로 만족스럽지 못하고 끝맛이 별로이며, 밥은 푸석하고 날치알도 없어 아쉬웠습니다.",
        "손님 응대가 불친절하고 서비스가 부족하여 불편함을 느꼈습니다.",
        "가게의 위생 관리가 부족하여 자리 정리가 제대로 되어 있지 않고 장식품과 음료컵이 청결하지 않았습니다.",
        "가격에 비해 양이 적어 가성비가 좋지 않다는 느낌을 받았습니다.",
        "가게 내부가 덥고 북적거려 쾌적하지 못한 분위기가 아쉬웠습니다.",
      ],
      topSentence:
        "쭈꾸미는 탱탱하고 쫄깃하여 다양한 양념과 조합이 맛있으며, 치즈와 계란찜도 함께 즐길 수 있어 만족스럽습니다.",
      positiveSentences: [
        "쭈꾸미는 탱탱하고 쫄깃하여 다양한 양념과 조합이 맛있으며, 치즈와 계란찜도 함께 즐길 수 있어 만족스럽습니다.",
        "직원들과 사장님이 친절하여 방문객들이 편안하고 즐거운 시간을 보낼 수 있습니다.",
        "레트로한 감성의 인테리어가 매장에 부드러운 분위기를 더해주며, 음악과 함께 편안한 시간을 보낼 수 있습니다.",
        "가격이 착하며 양이 푸짐하게 제공되어 가성비가 뛰어납니다.",
      ],
    },
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식은 대체로 느끼하고 간이 너무 쎄거나 부족한 경우가 많아 맛이 제대로 안 나는 경우가 많았습니다.",
        "직원들의 태도는 배려가 부족하고 퉁명스러워 불편한 경험을 주었습니다.",
        "매장의 분위기는 시끄럽고 소음을 줄이기 어려워 대화가 힘든 환경이었습니다.",
        "가격대가 높은 편인데 비해 음식 양이 적고 가성비가 좋은 편은 아닙니다.",
      ],
      topSentence:
        "파사주의 뇨끼와 라자냐는 특히 맛있으며, 스테이크 소스와 포르치니 파케리 파스타까지 각 요리의 맛이 뛰어나고 독특한 메뉴가 많습니다.",
      positiveSentences: [
        "파사주의 뇨끼와 라자냐는 특히 맛있으며, 스테이크 소스와 포르치니 파케리 파스타까지 각 요리의 맛이 뛰어나고 독특한 메뉴가 많습니다.",
        "친절한 직원들이 고객을 잘 맞이하며, 기억해주는 서비스로 방문할 때마다 만족스럽습니다.",
        "고급스러운 프랑스 분위기와 아늑한 인테리어 덕분에 연말 모임 장소로도 좋으며, 조용하고 차분한 분위기가 대화를 나누기에도 이상적입니다.",
        "음식과 와인의 가격이 합리적이며, 전반적으로 가성비가 좋아서 만족스럽습니다.",
      ],
    },
  },
  {
    id: 32,
    name: "라구식당",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "라구파스타와 라자냐의 맛이 기름지고 평범하여 대체할 다른 맛을 찾고 싶으며, 소스의 차별성도 없어 점심시간에는 맛이 더욱 떨어지는 경향이 있습니다.",
        "다시 방문하고 싶지 않을 정도로 불친절한 직원 응대와 함께 시끄럽게 그릇을 던지는 모습 등 서비스 측면에서 실망스러운 경험이 있었습니다.",
        "가격이 만칠천원으로 오르고 음식 양이 적어 가성비가 떨어진다는 평가를 받고 있습니다.",
      ],
      topSentence:
        "라구식당의 라구라자냐는 깊고 진한 풍미로 아주 맛있고, 직접 만든 소스가 정말 일품이며 신선한 재료로 요리한 다양한 음식들이 최고의 맛을 자랑합니다.",
      positiveSentences: [
        "라구식당의 라구라자냐는 깊고 진한 풍미로 아주 맛있고, 직접 만든 소스가 정말 일품이며 신선한 재료로 요리한 다양한 음식들이 최고의 맛을 자랑합니다.",
        "라구식당의 직원분들은 매우 친절하고 서비스가 빠릅니다. 웨이팅 없이 음식이 바로 나와서 좋습니다.",
        "라구식당은 데이트하기 좋은 아늑하고 따뜻한 분위기의 식당으로 인테리어가 인상적이며 편안합니다.",
        "라구식당은 가성비가 뛰어나며 샐러드와 라자냐 등이 저렴한 가격에 제공되어 만족스러운 선택입니다.",
      ],
    },
  },
  {
    id: 33,
    name: "대포찜닭",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식이 전반적으로 짠 편이고, 매운맛도 꽤 강하여 맵찔이에게는 어려울 수 있습니다.",
        "직원들의 서비스 교육이 부족하고 포장 시 태도가 좋지 않으며, 주문 실수가 잦습니다.",
        "가격에 비해 음식의 양이 적으며, 특별히 재방문할 매력은 부족합니다.",
      ],
      topSentence:
        "대포찜닭의 매콤하고 풍부한 맛과 신선한 재료 덕분에 밥과 찜닭을 매일 먹고 싶을 정도로 맛있습니다. 특히 오징어 토핑과 구름찜닭의 조합이 훌륭합니다.",
      positiveSentences: [
        "대포찜닭의 매콤하고 풍부한 맛과 신선한 재료 덕분에 밥과 찜닭을 매일 먹고 싶을 정도로 맛있습니다. 특히 오징어 토핑과 구름찜닭의 조합이 훌륭합니다.",
        "매장이 깔끔하고 쾌적하여 위생 상태가 매우 좋습니다.",
        "친절하고 밝은 직원들과 사장님의 서비스 덕분에 항상 즐겁고 만족스러운 경험을 합니다.",
        "활기찬 분위기와 개성 있는 소품이 어우러져 식당에서 저녁 시간을 즐기기에 이상적입니다.",
      ],
    },
  },
  {
    id: 34,
    name: "김판석초밥",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "회가 싱싱하지 않고, 밥은 단단하며 맛이 많이 떨어져서 초밥 맛집으로서의 명성이 사라졌습니다.",
        "가격 대비 초밥의 질이 기대 이하이며 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "신선하고 두툼한 회와 다양한 종류의 초밥이 맛있어서 큰 만족감을 줍니다.",
      positiveSentences: [
        "신선하고 두툼한 회와 다양한 종류의 초밥이 맛있어서 큰 만족감을 줍니다.",
        "매장과 화장실이 모두 깔끔하게 유지되어 청결함이 느껴집니다.",
        "직원들의 친절한 서비스로 다시 방문하고 싶게 만드는 곳입니다.",
        "아늑하고 조용한 분위기에서 식사를 즐기기에 좋은 장소입니다.",
        "가격 대비 많은 양과 알찬 구성이 돋보이는 가성비 좋은 초밥집입니다.",
      ],
    },
  },
  {
    id: 35,
    name: "공복식당",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "고기 양념이 짜고 항정살 맛이 기대에 미치지 못해 전반적으로 맛이 부족하였습니다.",
        "직원의 태도가 불친절하고 고객의 요청에 잘 응답하지 않습니다.",
        "음악이 시끄럽고 내부 소음이 심하여 편안한 분위기를 느끼기 어렵습니다.",
        "가격 대비 고기 양과 품질이 부족하며, 전반적인 가성비가 낮습니다.",
      ],
      topSentence: "항정살과 삼겹살이 맛있고, 특히 된장찌개와 조합이 좋습니다.",
      positiveSentences: [
        "항정살과 삼겹살이 맛있고, 특히 된장찌개와 조합이 좋습니다.",
        "매장이 깔끔하고 청결하여 위생 걱정이 없습니다.",
        "직원들의 친절한 서비스와 직접 구워주는 점이 매우 인상적입니다.",
        "편안한 음악과 멋진 인테리어가 있는 아늑한 분위기입니다.",
        "가격 대비 훌륭한 가성비로 만족스러운 경험을 제공합니다.",
      ],
    },
  },
  {
    id: 36,
    name: "쿳사 연희",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식은 금방 식어버리고, 맛이 느끼하거나 부족하며, 특히 베네딕트와 뇨끼는 입맛에 맞지 않는다.",
        "청결 상태가 좋지 않으며 특히 화장실이 불편하고 청소가 필요하다.",
        "직원들의 응대가 미흡하고 대기 시간이 길어 서비스에 대한 만족도가 낮다.",
        "매장 내 좌석이 협소하고 붐비는 분위기로 인해 매우 불편하다.",
        "가격이 비싸고 돈과 시간이 아깝다고 느끼게 한다.",
      ],
      topSentence:
        "음식이 전반적으로 맛있고 신선하며 크랩새우 토르타다, 에그베네딕트, 치킨 콩 필라프 등 다양한 메뉴가 다채로운 맛을 선사합니다.",
      positiveSentences: [
        "음식이 전반적으로 맛있고 신선하며 크랩새우 토르타다, 에그베네딕트, 치킨 콩 필라프 등 다양한 메뉴가 다채로운 맛을 선사합니다.",
        "직원들이 매우 친절하고 체계적인 서비스를 제공하여 고객에게 밝은 에너지와 환대를 선사합니다.",
        "매장의 분위기가 발리에 온 듯한 느낌을 주며, 화이트톤의 아기자기한 인테리어와 밝은 에너지가 돋보입니다.",
      ],
    },
  },
  {
    id: 37,
    name: "오늘통닭 신촌직영점",
    category: "항목 없음",
    address: "서울 서대문구 연세로11길 8 1~3층 (우)03788",
    hours: "'매일': '11:00 ~ 02:00'",
    reviewCount: 316,
    rating: 3.2,
    likePoints:
      "[{'category': '맛', 'score': '6'}, {'category': '친절', 'score': '3'}, {'category': '분위기', 'score': '3'}, {'category': '가성비', 'score': '2'}]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/Yonsei/%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AF%E1%84%90%E1%85%A9%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B0+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7_img.png",
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
    representativeSentenceMap: {
      negativeSentences: [
        "닭이 질기고 비린내가 심하며, 딸기맥주는 딸기맛이 부족하다는 평을 받았습니다.",
        "닭이 냉동 상태로 오래된 느낌을 주며 비린내가 나 위생 상태가 의심됩니다.",
        "직원의 인사나 서비스 마인드가 부족하고 안내가 미흡하다는 지적이 많습니다.",
        "전체 분위기가 결코 데이트 코스로 적절하지 않고, 주차 문제가 있습니다.",
        "가격에 비해 양이 적고 추가 금액이 들어 가성비가 좋지 않다는 평이 있습니다.",
      ],
      topSentence:
        "치킨과 다양한 메뉴가 굉장히 맛있으며, 특히 콘치즈치킨과 새로 출시된 칠리크랩치킨이 인기가 많습니다. 간장과 양념 소스도 훌륭하고, 샐러드와 떡볶이 같은 사이드도 맛있습니다.",
      positiveSentences: [
        "치킨과 다양한 메뉴가 굉장히 맛있으며, 특히 콘치즈치킨과 새로 출시된 칠리크랩치킨이 인기가 많습니다. 간장과 양념 소스도 훌륭하고, 샐러드와 떡볶이 같은 사이드도 맛있습니다.",
        "직원들이 굉장히 친절하며, 주문한 메뉴가 빨리 나와서 서비스가 좋습니다.",
        "매장의 분위기는 편안하고 따뜻하며, 옛날 호프집 감성을 느낄 수 있습니다. 2층에서는 야장 느낌도 있어 특히 여유로운 시간이 가능합니다.",
        "치킨과 맥주가 가격대비 훌륭해서 가성비가 매우 좋습니다.",
      ],
    },
  },
  {
    id: 38,
    name: "강남불백 3호점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "고기 잡내와 누린내가 심하고, 찌개 및 밑반찬의 맛이 일정하지 않으며 다소 짜거나 기름져 맛이 그저 그렇습니다.",
        "직원들이 불친절하고, 서비스에 신경을 쓰지 않아 손님을 속이려는 듯한 태도가 보입니다.",
        "밥양이 부족하며 가성비가 좋지 않아서 만족도가 떨어집니다.",
      ],
      topSentence:
        "불백정식과 된장찌개 등 다양한 메뉴가 재료가 신선하여 불맛까지 어우러져 양도 푸짐하고 맛있는 식사를 경험할 수 있습니다.",
      positiveSentences: [
        "불백정식과 된장찌개 등 다양한 메뉴가 재료가 신선하여 불맛까지 어우러져 양도 푸짐하고 맛있는 식사를 경험할 수 있습니다.",
        "사장님과 직원들이 항상 친절하게 응대하여 고객들에게 좋은 서비스를 제공합니다.",
        "가격 대비 푸짐한 양을 제공하여 가성비 최고인 점심 식사 장소로 추천됩니다.",
      ],
    },
  },
  {
    id: 39,
    name: "대성이네",
    category: " 닭요리",
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
    representativeSentenceMap: {
      negativeSentences: [
        "맵찔이에게는 보통맛이 너무 맵고, 닭 요리는 속까지 양념이 잘 배어있지 않다.",
        "서비스의 시간 지체와 불쾌한 경험들이 많으며, 여자 사장님의 계속된 자리 이동 요구는 한국 이미지에도 부정적이다.",
        "볶음밥 양이 적고, 분할 결제나 테이블별 계산이 불가능하여 가성비가 떨어진다.",
      ],
      topSentence:
        "매콤하고 칼칼한 찜닭과 신선한 닭고기의 부드러운 식감이 일품이며, 깻잎의 향겨운 맛과 조화롭게 어우러져 감칠맛을 자아냅니다.",
      positiveSentences: [
        "매콤하고 칼칼한 찜닭과 신선한 닭고기의 부드러운 식감이 일품이며, 깻잎의 향겨운 맛과 조화롭게 어우러져 감칠맛을 자아냅니다.",
        "사장님의 친절하고 세심한 서비스가 음식의 정성을 느끼게 해줍니다.",
        "학교 앞에 위치한 이 식당은 친구들과의 데이트코스로도 손색없는 친근하고 감성적인 분위기를 자아냅니다.",
        "푸짐한 양과 적당한 가격으로 고객들에게 뛰어난 가성비를 제공합니다.",
      ],
    },
  },
  {
    id: 40,
    name: "명성양꼬치 본점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "고기의 질이 별로고 양고기에서 냄새가 나며, 꿔바로우의 맛도 기대에 못 미쳐요.",
        "서비스 타이밍이 맞지 않고, 꿔바로우와 온면을 기다려야 했으며 햇반과 공기밥의 서비스가 미흡합니다.",
        "사람이 너무 많아 장소가 협소하고 덥습니다.",
        "가격이 비싸진 반면 양이 줄어들어 가성비가 떨어집니다.",
      ],
      topSentence:
        "명성양꼬치는 양고기의 잡내가 없고 맛있으며, 특히 옥수수온면과 다양한 마라 요리가 인기가 많습니다.",
      positiveSentences: [
        "명성양꼬치는 양고기의 잡내가 없고 맛있으며, 특히 옥수수온면과 다양한 마라 요리가 인기가 많습니다.",
        "가게 내부는 깔끔하고 위생적이라는 느낌이 들며, 기계도 모두 청결하게 관리되고 있습니다.",
        "직원분들이 모두 친절하고 세심하게 신경을 써주셔서 방문할 때마다 기분이 좋습니다.",
        "명성양꼬치는 분위기가 좋아 데이트 장소로 명성 있는 곳입니다.",
        "가격이 저렴하여 가성비가 훌륭하며, 2인 방문에도 무리가 없습니다.",
      ],
    },
  },
  {
    id: 41,
    name: "정육면체",
    category: "주차",
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
    representativeSentenceMap: {
      negativeSentences: [
        "음식 맛이 매우 애매하고 싱겁거나 과하게 짜거나 자극적이라는 평이 많습니다.",
        "매장의 위생 상태가 매우 불량하며 천장, 그릇, 수저통 등 곳곳에 먼지가 많고 청결하지 않다는 평가가 대부분입니다.",
        "직원들의 태도가 불친절하며 서빙 과정에서 불신을 안겨주었다는 의견이 자주 보입니다.",
        "매장 공간이 협소하고 패스트푸드점 같은 느낌이 들며 분위기가 별로였습니다.",
        "가격이 비싼 반면 맛과 양 모두 기대에 미치지 못해 가성비가 좋지 않다는 의견이 많습니다.",
      ],
      topSentence:
        "정육면체의 시그니처 메뉴인 우육면은 고소하고 감칠맛 가득한 국물과 푸짐한 고기 양으로 인기가 많습니다. 유린기도 바삭하게 튀겨져 부드러운 고기가 조화로워 맛있으며, 홍탕과 마제소바 등의 이국적인 맛들도 신선하게 이어져 자꾸 먹고 싶어지는 집입니다.",
      positiveSentences: [
        "정육면체의 시그니처 메뉴인 우육면은 고소하고 감칠맛 가득한 국물과 푸짐한 고기 양으로 인기가 많습니다. 유린기도 바삭하게 튀겨져 부드러운 고기가 조화로워 맛있으며, 홍탕과 마제소바 등의 이국적인 맛들도 신선하게 이어져 자꾸 먹고 싶어지는 집입니다.",
        "정육면체는 오픈형 구조로 주방이 훤히 보여 청결함이 느껴지는 곳으로, 튀김 요리도 깔끔하게 제공되어 위생적인 만족감을 줍니다.",
        "정육면체 직원들은 친절하고 접객 태도가 훌륭하며, 대기 없이 바로 입장 가능하여 방문이 편리하고 재방문 의사가 들 만큼 서비스 품질이 높습니다.",
        "정육면체는 일본 음식점 특유의 아늑한 분위기로 혼자 밥 먹기에 좋은 테이블이 있어 혼밥하기 편안한 장소입니다.",
        "정육면체의 음식은 양이 풍성하여 가성비가 뛰어나며, 가격 대비 만족스러운 맛을 느낄 수 있습니다. 특히, 웨이팅이 있어도 기다림의 가치가 있는 곳입니다.",
      ],
    },
  },
  {
    id: 42,
    name: "카츠업",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "신라면도 잘 못 먹는 사람에게는 음식이 조금 맵고, 소스의 특색이 없어 우동은 매우 짠 편이며 전반적으로 맛이 평범하여 어딜 가나 먹을 수 있는 맛이다.",
        "가게 내부에서 담배 냄새가 나고 위생이 아쉬워 벌레 문제와 함께 직원들의 마스크 미착용 등 위생 전반에 문제가 있다.",
        "직원들이 주문 속도는 빠르지만 대기 시간에 대한 안내가 부족하고 웨이팅 과정에서의 대응이 아쉬워 서비스 전반이 부족하게 느껴진다.",
        "매장 공간이 협소하고 주방 안쪽까지 비좁아 자리 잡기가 힘들며 전반적인 공간 활용이 아쉬운 편이다.",
      ],
      topSentence:
        "돈까스와 김치카츠나베가 특히 맛있고, 바삭한 튀김과 부드러운 고기가 매력적입니다. 카레도 진정한 맛집의 퀄리티를 보여줍니다.",
      positiveSentences: [
        "돈까스와 김치카츠나베가 특히 맛있고, 바삭한 튀김과 부드러운 고기가 매력적입니다. 카레도 진정한 맛집의 퀄리티를 보여줍니다.",
        "직원분들이 매우 친절하고 장국 리필과 같은 세심한 서비스 덕에 대기 시간이 짧게 느껴집니다.",
        "아늑한 분위기에 편안하게 식사를 즐길 수 있는 공간입니다.",
        "맛과 양 모두 놓치지 않는 가성비 최고의 맛집입니다. 가격 대비 만족스러운 식사를 제공합니다.",
      ],
    },
  },
  {
    id: 43,
    name: "자가제빵선명희피자 외대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "갈릭디핑 소스의 맛이 뛰어나지 않아서 입맛이 까다로운 사람에게는 맞지 않습니다.",
        "포장 시 핫소스를 포함하지 않는 경우가 있고, 배달 서비스가 제공되지 않아 불편함이 있습니다.",
      ],
      topSentence:
        "다양한 토핑이 풍부하게 들어간 피자는 특히 바싹불고기와 치즈피자가 맛있고, 아이들까지도 맛있게 먹을 수 있는 피자 맛집입니다.",
      positiveSentences: [
        "다양한 토핑이 풍부하게 들어간 피자는 특히 바싹불고기와 치즈피자가 맛있고, 아이들까지도 맛있게 먹을 수 있는 피자 맛집입니다.",
        "친절한 사장님의 응대와 서비스가 돋보이는 매장입니다.",
        "적당한 가격대와 많은 양 덕분에 가성비가 뛰어난 피자집으로, 포장 시 할인 혜택도 받을 수 있습니다.",
      ],
    },
  },
  {
    id: 44,
    name: "성화금탕마라탕&튀김꼬치",
    category: "중국요리",
    address: "서울 동대문구 휘경로 7-1 3층 (우)02419",
    hours: "'매일': '10:30 ~ 01:30'",
    reviewCount: 1,
    rating: 5,
    likePoints: "[]",
    imageUrl:
      "https://camchelin-bucket.s3.ap-northeast-2.amazonaws.com/Images/%EC%99%B8%EB%8C%80/%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%B3%E1%86%B7%E1%84%90%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%84%85%E1%85%A1%E1%84%90%E1%85%A1%E1%86%BC_img.png",
    univName: "한국외국어대학교",
    menus: [
      {
        id: 558,
        name: "마라탕세트",
        price: 20000,
        description: "설명 없음",
      },
      {
        id: 559,
        name: "마라만세트",
        price: 21500,
        description: "설명 없음",
      },
      {
        id: 560,
        name: "마라상궈세트",
        price: 25500,
        description: "설명 없음",
      },
      {
        id: 561,
        name: "꿔바로우 미니",
        price: 4500,
        description: "설명 없음",
      },
      {
        id: 562,
        name: "크림새우 소",
        price: 13000,
        description: "설명 없음",
      },
      {
        id: 563,
        name: "감자볶음요리",
        price: 12000,
        description: "설명 없음",
      },
    ],
    representativeSentenceMap: {
      negativeSentences: [],
      topSentence:
        "마라탕과 꿔바로우가 정말 맛있고 특히 바삭하고 쫄깃한 식감과 다양한 메뉴가 입맛을 돋구며, 신선한 재료들로 맛있는 국물까지 즐길 수 있습니다.",
      positiveSentences: [
        "마라탕과 꿔바로우가 정말 맛있고 특히 바삭하고 쫄깃한 식감과 다양한 메뉴가 입맛을 돋구며, 신선한 재료들로 맛있는 국물까지 즐길 수 있습니다.",
        "직원분들이 전체적으로 매우 친절하고 음식의 주문과 서빙 속도가 빨라 고객 서비스가 뛰어납니다.",
        "매장이 매우 깔끔하고 요리 준비 과정에서도 청결도가 유지되어 위생적인 환경에서 식사가 가능합니다.",
        "가성비가 뛰어나며 양도 충분히 많아 가격 대비 만족스러운 식사를 제공합니다.",
        "매장이 넓고 접근성이 좋아 혼밥하기에 최적이며 쾌적한 분위기 덕분에 친구들과 함께 오기에도 좋습니다.",
      ],
    },
  },
  {
    id: 45,
    name: "이상한떡볶이집",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "맛이 전반적으로 아쉬워요. 특히 크림파스타는 꾸덕하지 않고, 자극적인 음식들이 많으며, 오므라이스와 같은 메뉴들이 실망스럽습니다.",
        "서비스가 엉망이고 불친절하며, 메뉴 누락과 같은 문제가 자주 발생하여 추천하기 어렵습니다.",
        "매장이 작고 우울한 분위기로, 인테리어와 분위기가 전반적으로 아쉽습니다.",
        "가격 대비 가성비가 좋지 않아 팬스테이크 같은 메뉴의 양이 적고 가격이 비쌉니다.",
      ],
      topSentence:
        "떡볶이와 크림파스타가 일품이며, 맛이 변함없이 좋고 김치볶음밥과 데리야끼 또한 추천할 만합니다.",
      positiveSentences: [
        "떡볶이와 크림파스타가 일품이며, 맛이 변함없이 좋고 김치볶음밥과 데리야끼 또한 추천할 만합니다.",
        "서비스가 친절하고 고객의 요청 사항을 잘 지켜주며, 떡볶이를 서비스로 제공해 주는 점이 인상적입니다.",
        "가성비가 뛰어나며, 무한리필 떡볶이 등의 혜택이 있어 만족도가 높습니다.",
        "대학가 앞에서 밥약하기 좋은 공간으로, 학생들이 즐겨 찾으며 분위기가 좋습니다.",
      ],
    },
  },
  {
    id: 46,
    name: "파치 외대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "파스타의 양이 적고 가격이 높아 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "파치 외대점의 치킨과 파스타는 정말 맛있습니다. 특히, 새우 로제 파스타나 간장치킨은 많은 고객들에게 인기 있으며, 어떤 메뉴를 골라도 절대 실패하지 않는다는 평가를 받습니다.",
      positiveSentences: [
        "파치 외대점의 치킨과 파스타는 정말 맛있습니다. 특히, 새우 로제 파스타나 간장치킨은 많은 고객들에게 인기 있으며, 어떤 메뉴를 골라도 절대 실패하지 않는다는 평가를 받습니다.",
        "매장이 넓고 깨끗하여 방문객들이 편안하게 식사할 수 있는 쾌적한 환경을 제공합니다.",
        "직원분들이 매우 친절하고, 음식이 빠르게 제공되어 고객 만족도가 높습니다.",
        "가격도 저렴하고 양이 많아서 학생들에게 특히 가성비가 좋다고 평가받고 있습니다.",
      ],
    },
  },
  {
    id: 47,
    name: "서가네 정육식당 본점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "육개장소국밥의 고기는 냄새가 나고 지방이 많이 껴있어 질기며, 씹다가 삼키기 어렵습니다.",
      ],
      topSentence:
        "고기 품질이 뛰어나고 삼겹살과 된장찌개 등 다양한 음식을 맛있게 즐길 수 있는 곳입니다.",
      positiveSentences: [
        "고기 품질이 뛰어나고 삼겹살과 된장찌개 등 다양한 음식을 맛있게 즐길 수 있는 곳입니다.",
        "매장이 깔끔하고 청결하여 쾌적한 식사가 가능합니다.",
        "사장님과 직원들이 매우 친절하여 친근한 서비스를 제공받을 수 있습니다.",
        "단체 모임이나 가족 식사에 적합한 넓고 아늑한 분위기입니다.",
        "가격이 착하고 양이 많아 가성비가 뛰어난 곳입니다.",
      ],
    },
  },
  {
    id: 48,
    name: "샤로스톤 외대점",
    category: "스테이크,립",
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
    representativeSentenceMap: {
      negativeSentences: [
        "밥이 너무 짜고 아스파라거스는 얇아서 먹는 기분이 들지 않으며, 후리카케가 많이 뿌려져 있는 등 음식이 전반적으로 평이합니다.",
        "매장이 협소하고 에어컨이 있어도 더워서 여름철 방문은 비추입니다.",
        "가격에 비해 고기 양이 적고 음식이 평이하여 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "고기는 부드럽고 신선하며, 스테이크와 함께 제공되는 소스와 간장 조합이 훌륭하여 만족스러운 맛을 제공합니다.",
      positiveSentences: [
        "고기는 부드럽고 신선하며, 스테이크와 함께 제공되는 소스와 간장 조합이 훌륭하여 만족스러운 맛을 제공합니다.",
        "사장님과 직원들이 매우 친절하여 기분 좋은 서비스를 제공합니다.",
        "아늑한 공간과 좋은 분위기로 데이트하기에 적합한 장소입니다.",
        "가격 대비 성능비가 훌륭한 가성비 맛집입니다.",
      ],
    },
  },
  {
    id: 49,
    name: "베브릿지 한국외대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "초코칩과 믹스커피같이 느껴지는 기성품 맛이 나고, 손바닥만한 아사이볼처럼 음식의 맛이 형편없어 아쉬웠습니다.",
        "알바생의 무례함과 인력 부족으로 인해 포레스티 줄이 길고 서비스가 평범해 불편함을 느꼈습니다.",
        "좁은 테이블 간격과 붙어있는 테이블 배열로 인해 공간의 감성을 느끼기 어려웠습니다.",
        "손바닥만한 아사이볼과 같은 양의 부족함으로 인해 가격 대비 가성비가 나쁘고 메뉴의 다양성도 사라져 아쉬웠습니다.",
      ],
      topSentence:
        "베브릿지 아사이볼과 아사이 블루베리 스무디볼은 과일의 단맛이 돋보이며 코코넛 시나몬 스무디 또한 맛있어 5분 만에 다 먹을 정도입니다.",
      positiveSentences: [
        "베브릿지 아사이볼과 아사이 블루베리 스무디볼은 과일의 단맛이 돋보이며 코코넛 시나몬 스무디 또한 맛있어 5분 만에 다 먹을 정도입니다.",
        "밤늦게까지 친절한 응대뿐만 아니라 직원과 사장님의 세심한 안내가 인상적입니다.",
        "가게 내 외관과 예쁜 인테리어 덕분에 전통 있는 외대 분위기와 조화된 아늑하고 조용한 공간입니다.",
      ],
    },
  },
  {
    id: 50,
    name: "무초타코",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "새우타코는 가격에 비해 양이 적고 다소 비싸게 느껴집니다.",
      ],
      topSentence:
        "재료가 신선하고 다양한 맛의 새우, 멕시코에서 먹던 맛을 그대로 느낄 수 있어 너무 맛있습니다.",
      positiveSentences: [
        "재료가 신선하고 다양한 맛의 새우, 멕시코에서 먹던 맛을 그대로 느낄 수 있어 너무 맛있습니다.",
        "직원이 친절하고 가족과 함께 방문하셔도 좋으며, 재방문 의사가 들 정도로 서비스가 좋습니다.",
        "아늑하고 편안한 분위기의 매장은 조명과 음악으로 더욱 좋은 기운을 줍니다.",
        "합리적인 가격에 많은 양을 제공하여 가성비가 뛰어납니다.",
      ],
    },
  },
  {
    id: 51,
    name: "분99",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "분짜와 양지 쌀국수의 맛이 평범하고, 고기가 너무 타며, 입맛에 안 맞고 야채가 부족하여 대체로 만족스럽지 않았습니다.",
        "여름에는 초파리가 많고 주방에서 맨손으로 음식을 다루는 등 위생 상태가 부족합니다.",
        "음식이 늦게 나오고 주문 실수가 많으며 직원 태도가 불친절하여 서비스가 부족합니다.",
        "가격에 비해 양이 적어 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "분99의 토마토 쌀국수는 부드럽고 진한 국물로 맛이 뛰어나며, 해산물이 많이 들어가 얼큰하고 맛있는 쌀국수를 제공합니다.",
      positiveSentences: [
        "분99의 토마토 쌀국수는 부드럽고 진한 국물로 맛이 뛰어나며, 해산물이 많이 들어가 얼큰하고 맛있는 쌀국수를 제공합니다.",
        "직원들이 매우 친절하여 서비스가 훌륭하고 고객을 배려하는 모습이 돋보입니다.",
        "분99의 아늑한 분위기와 베트남 풍의 인테리어는 외국에 온 느낌을 줍니다.",
        "분99는 가격 대비 가성비가 뛰어나며, 양도 충분하여 만족스러운 식사를 제공합니다.",
      ],
    },
  },
  {
    id: 52,
    name: "번패티번 외대점",
    category: "주차",
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
    representativeSentenceMap: {
      negativeSentences: [
        "번패티번버거와 치즈후라이는 패티가 짜고 육즙이 부족하며, 다채로운 채소와 소스의 맛이 잘 느껴지지 않아 아쉬웠습니다.",
        "대학가 상권이라 가격이 다소 비싸다는 평가가 있으며, 가성비 면에서 아쉬움이 큽니다.",
      ],
      topSentence:
        "번패티번의 버거는 특히 돋보이는 햄버거 고기의 육즙과 신선한 야채, 그리고 브리오쉬 번의 맛이 조화롭게 어우러져 최고 수준의 맛을 자랑합니다.",
      positiveSentences: [
        "번패티번의 버거는 특히 돋보이는 햄버거 고기의 육즙과 신선한 야채, 그리고 브리오쉬 번의 맛이 조화롭게 어우러져 최고 수준의 맛을 자랑합니다.",
        "번패티번은 매장이 넓고 깔끔하여 항상 청결하게 유지되고 있어 편안하게 식사할 수 있는 환경을 제공합니다.",
        "번패티번의 직원분들은 언제나 친절하고 세심하게 고객을 응대해주셔서 서비스에 대한 만족도가 높습니다.",
        "번패티번은 인테리어가 아름답고 넓은 공간이 있어 대화하기 좋으며 매우 쾌적한 분위기를 제공합니다.",
        "번패티번은 가격이 적당하며 양도 많아 가성비 좋은 선택으로 고객들에게 인기를 끌고 있습니다.",
      ],
    },
  },
  {
    id: 53,
    name: "도란도란곱창",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "곱창 요리가 덜 익고 누린내와 비린 맛이 있어 비위가 상하고 맛이 별로였으며, 볶음밥은 시중 소스 맛이 났습니다.",
        "담배 냄새와 직원들이 마스크를 착용하지 않아 위생이 불량하게 느껴지며, 음식 위로 먼지가 떨어져 씁쓸한 경험이었습니다.",
        "직원과 사장님의 불친절한 태도로 인해 고객 서비스가 최악이며, 방문 시 불쾌한 경험을 할 수 있습니다.",
        "식당이 사람들로 붐비고 시끄러워서 편안하게 식사할 분위기가 아닙니다.",
        "포장 시 양이 제멋대로 정해지고 가격이 비싸 가성비가 떨어집니다.",
      ],
      topSentence:
        "도란도란곱창의 곱창은 정말 부드럽고 소금양념과 비법 소스가 어우러져 놀라운 감칠맛을 선사합니다.",
      positiveSentences: [
        "도란도란곱창의 곱창은 정말 부드럽고 소금양념과 비법 소스가 어우러져 놀라운 감칠맛을 선사합니다.",
        "사장님과 홀 직원들이 친절하여 방문객들이 기분 좋은 서비스를 받을 수 있습니다.",
        "도란도란곱창은 적당한 가격에 양이 엄청 많아 가성비가 뛰어난 맛집입니다.",
        "도란도란곱창은 아늑한 분위기 덕분에 대화하기 좋고 데이트 장소로도 훌륭합니다.",
      ],
    },
  },
  {
    id: 54,
    name: "153스트리트",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "버거가 두껍지만 기름이 많고 느끼하며, 번이 고소하지 않고 소스가 어울리지 않아서 전체적으로 맛이 아쉽습니다.",
      ],
      topSentence:
        "신선하고 두툼한 수제패티와 다양한 소스가 잘 어우러져 입에 착 감기는 맛이 최고입니다. 감자튀김과 어니언링도 함께 즐길 수 있어 만족스러웠습니다.",
      positiveSentences: [
        "신선하고 두툼한 수제패티와 다양한 소스가 잘 어우러져 입에 착 감기는 맛이 최고입니다. 감자튀김과 어니언링도 함께 즐길 수 있어 만족스러웠습니다.",
        "매장이 청결하고 기름도 깨끗하여 음식이 깔끔하고 속이 더부룩하지 않아서 좋았습니다.",
        "사장님과 직원분들이 매우 친절하여 기분 좋게 식사할 수 있었습니다.",
        "가게 인테리어가 외국 느낌이라 색다르고 노랑초록 색상이 조화를 이루어 분위기가 매우 좋습니다.",
        "양이 많으면서도 가격이 착하여 가성비가 매우 뛰어난 수제버거집입니다.",
      ],
    },
  },
  {
    id: 55,
    name: "최원석의돼지한판 서해쭈꾸미 시립대점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "고기와 반찬이 신선하지 않고 맛이 없으며, 특히 고기가 질기다는 평이 많습니다.",
        "서비스가 매우 불친절하고, 직원들의 태도가 좋지 않으며, 고기를 던지듯이 서빙하는 등 서비스에 대한 불만이 큽니다.",
        "음식의 가격이 비싸고, 전반적인 평점이 낮으며 가성비가 좋지 않다는 의견이 있습니다.",
      ],
      topSentence:
        "고기가 두툼하고 직접 구워주셔서 정말 맛있으며, 삼겹살과 된장찌개, 묵사발이 구수하고 진짜 집에서 먹는 맛이라는 평가를 받습니다.",
      positiveSentences: [
        "고기가 두툼하고 직접 구워주셔서 정말 맛있으며, 삼겹살과 된장찌개, 묵사발이 구수하고 진짜 집에서 먹는 맛이라는 평가를 받습니다.",
        "사장님이 정말 친절하고 직원분들이 직접 고기를 구워주는 서비스 덕분에 편하게 식사를 즐길 수 있습니다.",
        "매장이 넓고 깨끗해서 가족이나 단체 손님이 방문하기 좋고, 누구나 편하게 식사할 수 있는 깔끔한 분위기를 제공합니다.",
      ],
    },
  },
  {
    id: 56,
    name: "후루사토",
    category: "일본식주점",
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
    representativeSentenceMap: {
      negativeSentences: [
        "사시미 방어는 비린맛이 심하고 대패삼겹이 질기며, 기대했던 어묵 역시 별로여서 입맛을 버릴 정도로 맛의 완성도가 낮았습니다.",
        "직원의 불친절한 응대와 고객을 귀찮아 하는 태도 때문에 두 번 다시 방문하고 싶지 않을 정도로 불쾌한 경험이었습니다.",
      ],
      topSentence:
        "회와 안주가 특히 신선하고 맛있으며, 명란치즈계란말이와 가라아게 역시 특별한 맛을 선사합니다.",
      positiveSentences: [
        "회와 안주가 특히 신선하고 맛있으며, 명란치즈계란말이와 가라아게 역시 특별한 맛을 선사합니다.",
        "사장님과 직원들이 친절하여 방문객들에게 지속적으로 특별한 경험을 선사합니다.",
        "저렴한 가격에 비해 제공되는 오마카세의 가성비와 안주의 질이 매우 뛰어납니다.",
        "아늑하고 일본여행을 연상시키는 분위기가 혼술에도 적합하며 대화하기에 좋습니다.",
      ],
    },
  },
  {
    id: 57,
    name: "망우로30",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "커피의 맛이 전반적으로 약하고 시럽이나 물 비릿내가 나며, 밀크티는 맛이 강하지 않아 실망스럽습니다. 다양한 음료 선택이 가능하지만 전반적인 맛의 퀄리티가 떨어집니다.",
        "직원 서비스가 불친절하고 사과도 없이, 알바생이 인사도 없이 무뚝뚝한 태도로 손님을 맞이합니다.",
        "매장의 내부 분위기는 시끄럽고 환기가 잘 되지 않으며, 좁고 자리도 부족하여 불편함을 주고 있습니다. 또한 음악 소리가 크게 들려 대화가 어려운 상황입니다.",
      ],
      topSentence:
        "음료와 크로플, 스콘 등 다양한 메뉴가 매우 맛있고 특히 크로플은 바삭하고 맛있다고 호평받았어요.",
      positiveSentences: [
        "음료와 크로플, 스콘 등 다양한 메뉴가 매우 맛있고 특히 크로플은 바삭하고 맛있다고 호평받았어요.",
        "직원분들이 매우 친절하여 매장을 이용하는 동안 기분이 좋았습니다.",
        "카페 내부는 아늑하고 예쁜 분위기로 조용히 대화하거나 휴식을 취하기에 좋습니다.",
      ],
    },
  },
  {
    id: 58,
    name: "혜성칼국수",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "국물은 미지근하고 조미료 맛이 강하여 깊은 맛이 부족하며, 닭 누린내가 나고 질긴 식감이 아쉬웠습니다.",
        "위생 상태가 불량하여 고춧가루가 붙은 그릇과 초파리가 나오는 경우가 있었으며, 서빙 시 손톱이 길거나 사장님의 손가락이 음식에 닿는 등 청결 관리가 부족했습니다.",
        "직원들의 불친절한 태도로 인해 혼자 방문 시 눈치를 봐야 했으며, 김치 요청 시 불편함이 있었고 전체적인 서비스에 불쾌감을 느꼈습니다.",
        "오랜 기다림과 장시간 줄 서기가 필요할 만큼 사람이 많고, 자리가 거의 차 있었습니다. 합석 형태의 좌석이 있어 불편함이 느껴집니다.",
        "가격이 만원으로 인상되었으나 음식의 양과 질이 가격 대비 부족하다는 점에서 가성비가 만족스럽지 못했습니다.",
      ],
      topSentence:
        "혜성칼국수의 멸치 칼국수는 국물이 진하고 닭 비린내 없이 맛있으며, 김치의 아삭하고 시원한 맛이 국수와 잘 어울리며 계속 생각나는 맛이다.",
      positiveSentences: [
        "혜성칼국수의 멸치 칼국수는 국물이 진하고 닭 비린내 없이 맛있으며, 김치의 아삭하고 시원한 맛이 국수와 잘 어울리며 계속 생각나는 맛이다.",
        "혜성칼국수의 직원들은 매우 친절하며, 항상 테이블을 돌면서 부족한 것을 챙겨주고 리필 서비스까지 제공한다.",
        "혜성칼국수는 양이 푸짐하고 면 리필이 무료이며, 가격 대비 훌륭한 양을 제공하여 가성비가 뛰어나다.",
      ],
    },
  },
  {
    id: 59,
    name: "청량회관",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "메뉴는 다양하지만 라구가 짠 편이고, 바지락술탕에서 향신료 냄새가 강하게 느껴집니다. 또한, 참치 한상의 양이 조금 적고, 지난번보다 품질이 떨어졌다.",
        "화장실 청결 상태가 아쉽고, 내부에 피우는 향이 너무 진할 때가 있습니다.",
        "알바생들의 서비스 응대가 미흡하고, 예약하기 어려워 음식을 주문해도 나오는 속도가 느립니다.",
        "매장 인테리어는 인스타 감성을 자극하지만, 공간이 좁고 시끄러워서 자리 확보가 어렵습니다.",
        "가격이 전반적으로 비싼 편이라 가성비가 좋지 않습니다.",
      ],
      topSentence:
        "청량회관의 참치와 단새우는 신선하고 맛있으며, 우니 파스타와 바질명란파스타가 특히 인기 있습니다. 다양한 메뉴의 맛이 좋고 안주의 퀄리티도 훌륭하여 방문객들에게 만족감을 줍니다.",
      positiveSentences: [
        "청량회관의 참치와 단새우는 신선하고 맛있으며, 우니 파스타와 바질명란파스타가 특히 인기 있습니다. 다양한 메뉴의 맛이 좋고 안주의 퀄리티도 훌륭하여 방문객들에게 만족감을 줍니다.",
        "사장님과 직원들이 매우 친절하며 서비스가 훌륭합니다. 고객 맞춤 서비스와 세심한 응대로 방문객들에게 좋은 경험을 안겨줍니다.",
        "청량회관은 멋진 공간과 음악이 어우러져 항상 기대를 저버리지 않고, 예약과 웨이팅 없이 쾌적하게 방문할 수 있는 곳입니다. 사진 찍기에도 좋으며 특별한 시간을 보낼 수 있는 장소입니다.",
      ],
    },
  },
  {
    id: 60,
    name: "서울뼈구이매운족발",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "매운 족발을 시켰는데 오히려 맵지도 않고 씁쓸한 맛이며, 고기에서 냄새가 나서 맛있다고 하기 어려웠습니다.",
        "직원들이 불친절하고 손님을 귀찮아하는 태도가 있어 불쾌함을 느꼈습니다.",
        "화장실 상태가 좋지 않고 주방 위생이 의심스러워 배가 아프다는 느낌을 받았습니다.",
        "좁고 허름한 인테리어에 소음이 심해 대화가 어려웠고, 에어컨이 시원하지 않아 분위기가 좋지 않았습니다.",
        "가성비를 기대했으나 양이 적고 가격 대비 만족스럽지 못했습니다.",
      ],
      topSentence:
        "순수한 맛의 주먹밥과 부드러운 고기는 매콤달콤한 양념과 조화를 이뤄 깊은 인상을 주는 맛입니다.",
      positiveSentences: [
        "순수한 맛의 주먹밥과 부드러운 고기는 매콤달콤한 양념과 조화를 이뤄 깊은 인상을 주는 맛입니다.",
        "식당이 쾌적해지고 위생적으로 개선되어 기분 좋게 식사할 수 있습니다.",
        "직원들은 친절하고 세심한 서비스로 고객에게 편안한 식사 경험을 제공합니다.",
        "늘 활기찬 분위기와 편안한 음색의 매장으로 식사 자체가 즐거운 경험이 됩니다.",
        "저렴한 가격으로 푸짐한 양을 제공하여 가성비가 뛰어난 곳입니다.",
      ],
    },
  },
  {
    id: 61,
    name: "이모네왕파전",
    category: "분위기",
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
    representativeSentenceMap: {
      negativeSentences: [
        "해물파전은 기름에 절여져 느끼하고 매운맛도 부족해서 맛이 전혀 보장되지 않으며, 파전 맛도 크게 실망스럽습니다.",
        "위생 상태가 좋지 않아서 끈적이는 수저와 가게 내부의 불결함이 매우 아쉬웠으며, 밥에서 쉰내가 나는 등 벌레 문제까지 겹쳐 있었습니다.",
        "서비스 질은 매우 떨어져서 주문한 음식이 나오지 않거나 직원의 응대 태도가 불친절하여 대기 시간이 길어지고 있습니다.",
        "올드한 인테리어와 정신없는 시장바닥 같은 분위기 탓에 주변이 시끄러워 대화하기 힘들고 북적거리며 사람도 많습니다.",
      ],
      topSentence:
        "이모네왕파전에서는 김치전과 해물파전이 바삭바삭하게 잘 구워져 맛있으며, 다양한 안주와 파전 메뉴가 많은 손님들의 입맛을 사로잡습니다.",
      positiveSentences: [
        "이모네왕파전에서는 김치전과 해물파전이 바삭바삭하게 잘 구워져 맛있으며, 다양한 안주와 파전 메뉴가 많은 손님들의 입맛을 사로잡습니다.",
        "친절한 이모님들의 서비스와 센스 있는 응대로 손님들이 편안하게 즐길 수 있습니다.",
        "이곳은 넓고 독립적인 공간 제공으로 조용하고 아늑한 분위기 속에서 다양한 연령대가 모임을 즐기기에 적합하며, 비오는 날 낭만을 느낄 수 있는 추억의 장소입니다.",
        "저렴한 가격에 많은 양으로 훌륭한 가성비를 제공하며, 다양한 세트메뉴로 경제적인 즐거움을 느낄 수 있습니다.",
      ],
    },
  },
  {
    id: 62,
    name: "은하곱창",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "은하곱창의 음식은 전반적으로 냄새가 나고, 깊은 맛을 찾기 어려우며, 잡내와 비린내가 강하게 느껴집니다.",
        "이 식당의 위생 상태는 머리카락이 음식에서 나오고, 화장실 상태가 좋지 않아 많은 개선이 필요합니다.",
        "은하곱창의 서비스는 고객에 대한 배려가 부족하고, 긴 웨이팅 시간과 불친절한 응대로 인해 불만족스러웠습니다.",
        "혼잡한 매장과 청결하지 않은 분위기 때문에 편안한 식사가 어려웠습니다.",
      ],
      topSentence:
        "은하곱창의 음식은 전반적으로 냄새가 나고, 깊은 맛을 찾기 어려우며, 잡내와 비린내가 강하게 느껴집니다.",
      positiveSentences: [
        "곱창전골의 부드러운 곱창은 잡내 없이 쫄깃하며, 진한 국물과 함께 신선하게 제공되어 다양한 재료를 맛있게 즐길 수 있습니다.",
        "직원분들의 친절한 서비스와 세심한 배려로 고객들이 편안하게 식사할 수 있습니다.",
        "식당은 오래된 외관에도 불구하고 냄새 없는 깔끔한 위생 상태를 유지하고 있어 안심하고 음식물을 섭취하는 데에 무리가 없습니다.",
        "충분한 양과 저렴한 가격으로 푸짐하게 즐길 수 있어 가성비 좋은 선택이 됩니다.",
      ],
    },
  },
  {
    id: 63,
    name: "신락원",
    category: "분위기",
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
    representativeSentenceMap: {
      negativeSentences: [
        "짬뽕과 짜장면의 맛이 삼삼하고, 특히 유니짜장과 탕수육의 무료가 부족하며 조미료 맛이 강하게 느껴집니다. 또한 고추를 많이 썰어 넣어 매운 맛이 지나치게 강하며 일부 음식에서는 비린내가 나 맛이 아쉬운 편입니다.",
        "식당의 환경과 위생 상태가 아쉽고, 특히 에어컨이 고장 나서 불편함을 주며, 주차장 시설도 미흡하다는 점에서 위생에 대한 신뢰도가 낮습니다.",
        "점원의 불친절한 태도와 대기 시간이 길고 서비스가 무성의하여 고객 경험이 좋지 않습니다. 특히 카운터 직원의 태도가 불친절하여 불만이 큽니다.",
        "전체적인 가격대가 비싸고 주차시설이 전혀 마련되어 있지 않아 가성비가 부족합니다. 특히 탕수육 가격이 높은데, 맛이 기대에 미치지 못해 아쉬운 편입니다.",
      ],
      topSentence:
        "탕수육과 유니짜장의 맛이 일품이며, 바삭한 식감과 풍부한 해산물이 가득한 삼선짜장은 특히 인상적입니다.",
      positiveSentences: [
        "탕수육과 유니짜장의 맛이 일품이며, 바삭한 식감과 풍부한 해산물이 가득한 삼선짜장은 특히 인상적입니다.",
        "직원의 친절한 서비스가 특히 돋보이며, 룸으로의 안내와 응대가 섬세합니다.",
        "특별한 날을 위한 장소로 적합하며, 전통적이면서도 가족모임에 어울리는 분위기가 여유롭습니다.",
      ],
    },
  },
  {
    id: 64,
    name: "브레드칸 청량리점",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "빵의 맛이 전반적으로 예상을 벗어나지 않으며, 특히 크림이 미끌하고 단맛이 지나쳐 불쾌합니다.",
        "위생 상태가 좋지 않아 설사를 하는 경우가 발생하고, 빵을 자르는 도구의 사용이 비위생적입니다.",
        "직원의 친절도가 부족하며 포장 서비스도 미흡하여 추천할만한 부분이 없습니다.",
      ],
      topSentence:
        "이 빵집은 쫀득쫀득한 생크림빵과 슈크림빵이 특히 맛있으며, 찹쌀꽈배기와 크림치즈 브레드도 부드럽고 고소합니다.",
      positiveSentences: [
        "이 빵집은 쫀득쫀득한 생크림빵과 슈크림빵이 특히 맛있으며, 찹쌀꽈배기와 크림치즈 브레드도 부드럽고 고소합니다.",
        "사장님과 직원들이 매우 친절하여 방문객들은 따뜻한 서비스를 경험합니다.",
        "여기 빵집은 가격이 매우 저렴하여 가성비가 뛰어나며, 다양한 빵들이 맛있어서 부담없이 즐길 수 있습니다.",
      ],
    },
  },
  {
    id: 65,
    name: "독",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "마약소스와 치즈닭알찜은 매력이 있지만, 전체적으로 맛있다는 느낌보다는 뻑뻑하고 조미료 맛이 강해 아쉬움이 남습니다.",
        "시크한 사장님과 직원들의 불친절함으로 서비스 경험이 좋지 않았으며 사이드는 늦게 나와 불편함을 주었습니다.",
      ],
      topSentence:
        "오랜만에 방문했는데도 여전히 같은 맛의 독특한 고기와 콤비네이션이 인상적인 곳으로, 김치말이국수와 날치알계란찜이 일품이며, 쌈무와 고기 조합이 맛있다.",
      positiveSentences: [
        "오랜만에 방문했는데도 여전히 같은 맛의 독특한 고기와 콤비네이션이 인상적인 곳으로, 김치말이국수와 날치알계란찜이 일품이며, 쌈무와 고기 조합이 맛있다.",
        "사장님이 강렬하지만 시크하게 잘해주시고, 친절하게 직접 고기를 구워주셔서 서비스가 좋습니다.",
        "힙지로 지역에서 느껴지는 노포 분위기의 감성 인테리어와 레트로 음악이 어우러져, 소주 한 잔 하기 좋은 매력적인 분위기가 있습니다.",
        "두명이서 17000원으로 고기를 먹을 수 있는 가격이 합리적이며, 극강의 가성비를 자랑하는 고깃집입니다.",
      ],
    },
  },
  {
    id: 66,
    name: "마루한",
    category: "항목 없음",
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
    representativeSentenceMap: {
      negativeSentences: [
        "국수의 맛은 괜찮지만, 음식이 전반적으로 짜고 고기 요리는 맛이 떨어져 아쉬웠습니다.",
        "웨이팅이 길고, 국수가 누락되는 등의 실수와 마감 시간 전부터 눈치를 줘 고객 서비스에 아쉬움이 남습니다.",
        "식사가 진행되는 동안 자리를 잡기 힘들고, 마감 시간 전부터 종업원들이 눈치를 주어 불편합니다.",
      ],
      topSentence:
        "고기가 입에 녹여갈 정도로 맛있고, 새콤달콤한 육회비빔밥과 푸짐한 양념갈비가 특히 일품이었습니다.",
      positiveSentences: [
        "고기가 입에 녹여갈 정도로 맛있고, 새콤달콤한 육회비빔밥과 푸짐한 양념갈비가 특히 일품이었습니다.",
        "매장이 깔끔하고 청결에 신경을 써서 쾌적한 식사 환경을 제공합니다.",
        "사장님과 직원들이 매우 친절하여 단골로 재방문할 정도로 만족스러운 서비스를 제공합니다.",
        "편안한 분위기 속에서 기분 좋게 식사할 수 있으며, 단체 모임이나 회식 장소로도 적합합니다.",
        "가격 대비 푸짐한 양을 제공하여 가성비가 뛰어난 맛집입니다.",
      ],
    },
  },
];

// likePoints 파싱 함수
export const parseLikePoints = (likePoints) => {
  if (!likePoints) return [];

  try {
    // 문자열 타입 처리
    if (typeof likePoints === "string") {
      // 대괄호로 시작하지 않는 경우에도 대괄호 추가
      const formattedLikePoints = likePoints.trim().startsWith("[")
        ? likePoints
        : `[${likePoints}]`;

      // 작은따옴표를 큰따옴표로 대체하여 JSON 파싱
      const parsedPoints = JSON.parse(formattedLikePoints.replace(/'/g, '"'));

      return parsedPoints;
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
    imageUrl: sanitizeImageUrl(place.imageUrl, place.id), // id 전달
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
};
