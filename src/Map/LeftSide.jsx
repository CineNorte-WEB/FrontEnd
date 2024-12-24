import React, { useState } from "react";

const LeftSide = () => {
  // 항목 데이터를 저장
  const restaurantList = [
    {
      id: 1,
      name: "현이네 고기국수",
      category: "한식",
      rating: "4.75",
      description: "가족적 분위기와 맛있어요!",
      address: "서울 광진구 군자로 23",
      hours: "11:20 - 20:00 (15:00 - 17:00 브레이크타임)",
      menu: [
        { item: "고기국수", price: "9,000원" },
        { item: "비빔국수", price: "8,500원" },
        { item: "홍콩리그국수", price: "10,000원" },
        { item: "음료", price: "2,000원" },
      ],
    },
    {
      id: 2,
      name: "진스시",
      category: "일식",
      rating: "4.75",
      description: "맛이 일품입니다!",
      address: "서울 광진구 화양동 10",
      hours: "11:00 - 21:00",
      menu: [
        { item: "스시세트", price: "15,000원" },
        { item: "우동", price: "8,000원" },
      ],
    },
    {
      id: 3,
      name: "배추원의 홍콩반점",
      category: "중식",
      rating: "5.00",
      description: "훌륭한 음식과 가격!",
      address: "서울 광진구 자양동 5",
      hours: "11:30 - 22:00",
      menu: [
        { item: "짜장면", price: "6,000원" },
        { item: "짬뽕", price: "7,000원" },
        { item: "탕수육", price: "15,000원" },
      ],
    },
    {
      id: 4,
      name: "아재식당",
      category: "한식",
      rating: "4.75",
      description: "가족끼리 오기 좋아요.",
      address: "서울 광진구 능동로 11",
      hours: "10:00 - 20:00",
      menu: [
        { item: "된장찌개", price: "7,000원" },
        { item: "김치찌개", price: "7,000원" },
      ],
    },
  ];

  // 선택된 레스토랑 정보를 관리
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurantList[0]
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start">
      {/* Sidebar */}
      <div className="w-full p-4 bg-gray-100 rounded-md shadow-md md:w-1/3">
        {restaurantList.map((restaurant) => (
          <div
            key={restaurant.id}
            className="mb-4 cursor-pointer"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <h2 className="mb-2 text-lg font-bold">{restaurant.name}</h2>
            <p className="text-sm">{restaurant.category}</p>
            <p className="text-sm text-green-600">
              좋아요: {restaurant.rating}
            </p>
            <p className="text-sm">{restaurant.description}</p>
            <button className="mt-2 text-blue-500 underline">더보기 →</button>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full p-6 bg-white rounded-md shadow-md md:w-2/3">
        <h1 className="mb-4 text-xl font-bold">{selectedRestaurant.name}</h1>
        <p className="mb-2 text-sm">{selectedRestaurant.category}</p>
        <p className="mb-4 text-green-600">
          좋아요: {selectedRestaurant.rating}
        </p>

        <h2 className="mb-2 text-lg font-bold">상세정보</h2>
        <p className="text-sm">주소: {selectedRestaurant.address}</p>
        <p className="text-sm">영업 시간: {selectedRestaurant.hours}</p>

        <h2 className="mt-4 mb-2 text-lg font-bold">메뉴</h2>
        <ul className="ml-4 text-sm list-disc">
          {selectedRestaurant.menu.map((menuItem, index) => (
            <li key={index}>
              {menuItem.item}: {menuItem.price}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h2 className="mb-2 text-lg font-bold">지도</h2>
          <div className="w-full h-64 bg-gray-300 rounded-md">지도 영역</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
