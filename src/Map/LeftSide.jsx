import React, { useState } from "react";

const LeftSide = ({ restaurantData }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("건대");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const universities = {
    건대: "/images/건대.png",
    홍대: "/images/홍대.png",
    시립대: "/images/시립대.png",
    이대: "/images/이대.png",
    연대: "/images/연대.png",
    외대: "/images/외대.png",
    경희대: "/images/경희대.png",
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsSidebarOpen(true);
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  return (
    <div className="relative h-full">
      {/* 대학교 선택 헤더 */}
      <div className="flex items-center w-4/5 h-10 mx-8 my-4 border border-black shadow-lg rounded-xl">
        <img src="/images/졸업.png" alt="졸업" className="w-8 h-10 ml-2" />
        <p className="ml-2 text-sm font-bold font-yeonsung">학교 정보 :</p>
        <img
          src={universities[selectedUniversity]}
          alt={`${selectedUniversity} 로고`}
          className="w-8 h-8 ml-5"
        />
        <select
          className="py-0.5 text-center ml-2 border border-black rounded-md w-4/7 font-yeonsung"
          value={selectedUniversity}
          onChange={handleUniversityChange}
        >
          <option value="건대">건국대학교</option>
          <option value="홍대">홍익대학교</option>
          <option value="시립대">서울시립대학교</option>
          <option value="이대">이화여자대학교</option>
          <option value="연대">연세대학교</option>
          <option value="외대">한국외국어대학교</option>
          <option value="경희대">경희대학교</option>
        </select>
      </div>

      {/* 레스토랑 리스트 */}
      <div className="h-[calc(100vh-180px)] overflow-y-auto px-4">
        {restaurantData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
            onClick={() => handleRestaurantClick(restaurant)}
          >
            <div className="flex items-center mb-4">
              <img
                src={`/images/${restaurant.category}.png`}
                alt={restaurant.category}
                className="w-12 h-12 mr-4 rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold font-yeonsung">
                    {restaurant.name}
                  </h2>
                  <div className="flex items-center">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span className="text-sm">{restaurant.rating}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 font-yeonsung">
                  {restaurant.category}
                </span>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center">
                <span className="text-blue-500 font-yeonsung">좋아요 👍</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {restaurant.goodText}
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="text-red-500 font-yeonsung">싫어요 👎</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{restaurant.badText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 상세정보 오버레이 */}
      {selectedRestaurant && (
        <div
          className="absolute z-50 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2 w-96"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={`/images/${selectedRestaurant.category}.png`}
                alt={selectedRestaurant.category}
                className="w-10 h-10 mr-3 rounded-lg"
              />
              <h2 className="text-xl font-bold font-yeonsung">
                {selectedRestaurant.name}
              </h2>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="p-4 mb-4 rounded-lg bg-gray-50">
            <p className="mb-2 text-sm">
              🏠 주소: {selectedRestaurant.address}
            </p>
            <p className="text-sm">⏰ 영업시간: {selectedRestaurant.hours}</p>
          </div>
          <div className="mb-4">
            <h3 className="mb-2 font-bold font-yeonsung">메뉴</h3>
            {selectedRestaurant.menu.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-1 text-sm border-b"
              >
                <span>{item.item}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
