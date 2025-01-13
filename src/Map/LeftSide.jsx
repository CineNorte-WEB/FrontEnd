// LeftSide.jsx
import React, { useState } from "react";
import RestaurantOverlay from "./RestaurantOverlay";

const LeftSide = ({
  restaurantData,
  onSelectRestaurant,
  onUniversityChange,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("연대");

  const universities = {
    연대: "/images/연대.png",
    서강대: "/images/서강대.png",
    이대: "/images/이대.png",
    시립대: "/images/시립대.png",
    경희대: "/images/경희대.png",
    외대: "/images/외대.png",
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    onSelectRestaurant && onSelectRestaurant(restaurant);
  };

  const handleUniversityChange = (e) => {
    const newUniversity = e.target.value;
    setSelectedUniversity(newUniversity);
    onUniversityChange && onUniversityChange(newUniversity);
  };

  // 리뷰 점수를 계산하는 함수
  const calculateLikePoints = (likePoints) => {
    try {
      const points = JSON.parse(likePoints);
      return points.reduce((sum, point) => sum + Number(point.score), 0);
    } catch (e) {
      return 0;
    }
  };

  return (
    <div className="relative h-full font-yeonsung">
      {/* 대학교 선택 헤더 */}
      <div className="flex items-center w-5/6 h-10 mx-8 my-4 border border-black shadow-lg rounded-xl">
        <img src="/images/졸업.png" alt="졸업" className="w-8 h-10 ml-2" />
        <p className="ml-2 text-sm font-bold">학교 정보 :</p>
        <img
          src={universities[selectedUniversity]}
          alt={`${selectedUniversity} 로고`}
          className="w-8 h-8 ml-5"
        />
        <select
          className="py-1 ml-2 text-center border border-black rounded-md w-4/7"
          value={selectedUniversity}
          onChange={handleUniversityChange}
        >
          <option value="서강대">서강대학교</option>
          <option value="시립대">서울시립대학교</option>
          <option value="이대">이화여자대학교</option>
          <option value="연대">연세대학교</option>
          <option value="외대">한국외국어대학교</option>
          <option value="경희대">경희대학교</option>
        </select>
      </div>

      {/* 레스토랑 리스트 */}
      <div className="h-full px-4 overflow-y-auto">
        {restaurantData
          .filter((restaurant) =>
            (restaurant.univName === selectedUniversity) === "연대"
              ? "연세대학교"
              : selectedUniversity === "이대"
              ? "이화여자대학교"
              : selectedUniversity === "서강대"
              ? "서강대학교"
              : selectedUniversity === "시립대"
              ? "서울시립대학교"
              : selectedUniversity === "외대"
              ? "한국외국어대학교"
              : "경희대학교"
          )
          .map((restaurant) => (
            <div
              key={restaurant.id}
              className="p-4 mb-4 bg-white border-2 border-gray-400 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={
                    restaurant.imageUrl || `/images/${restaurant.category}.png`
                  }
                  alt={restaurant.category}
                  className="w-12 h-12 mr-4 rounded-lg"
                  onError={(e) => {
                    e.target.src = "/images/default-restaurant.png";
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{restaurant.name}</h2>
                    <div className="flex items-center">
                      <span className="mr-1 text-yellow-400">⭐</span>
                      <span className="text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {restaurant.category}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <p>
                  <strong>리뷰:</strong> {restaurant.reviewCount}개
                </p>
                <p>
                  <strong>총 평점:</strong>{" "}
                  {calculateLikePoints(restaurant.likePoints)}점
                </p>
                {restaurant.menus && restaurant.menus.length > 0 && (
                  <p>
                    <strong>메뉴 수:</strong> {restaurant.menus.length}개
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>

      {selectedRestaurant && (
        <RestaurantOverlay
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          source="list"
        />
      )}
    </div>
  );
};

export default LeftSide;
