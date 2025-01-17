import React, { useState, useRef, useEffect } from "react";
import RestaurantOverlay from "./RestaurantOverlay";

const LeftSide = ({
  restaurantData,
  onSelectRestaurant,
  onUniversityChange,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("연대");
  const [searchQuery, setSearchQuery] = useState("");
  const restaurantRefs = useRef({});

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

  const formatRating = (rating) => {
    // 평점이 0이거나 매우 낮으면 5점으로 고정
    return rating > 0 ? rating.toFixed(1) : "5.0";
  };

  const renderStars = (rating) => {
    // 항상 1개의 별 표시
    return "⭐";
  };

  const calculateLikePoints = (restaurant) => {
    // 평점이 0이거나 매우 낮으면 5점으로 고정
    return restaurant.rating > 0 ? restaurant.rating.toFixed(1) : "5.0";
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      // Reset to original state when search query is cleared
      setSelectedRestaurant(null);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const matchedRestaurant = restaurantData.find(
        (restaurant) =>
          restaurant.name.toLowerCase() === searchQuery.toLowerCase()
      );

      if (
        matchedRestaurant &&
        matchedRestaurant.id >= 1 &&
        matchedRestaurant.id <= 66
      ) {
        restaurantRefs.current[matchedRestaurant.id].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setSelectedRestaurant(matchedRestaurant);
        onSelectRestaurant && onSelectRestaurant(matchedRestaurant);
      } else {
        alert("존재하지 않는 가게입니다.");
      }
    }
  };

  return (
    <div className="relative flex flex-col h-full font-['Song Myung']">
      {/* 대학교 선택 헤더 */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex items-center w-full h-10 my-3 border border-black rounded-lg shadow-lg">
          <img src="/images/졸업.png" alt="졸업" className="w-8 h-10 ml-2" />
          <p className="ml-2 text-sm font-bold">학교 정보 :</p>
          <img
            src={universities[selectedUniversity]}
            alt={`${selectedUniversity} 로고`}
            className="w-8 h-8 ml-5"
          />
          <select
            className="ml-2 font-bold text-center border border-black rounded-md w-4/7"
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

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="🍽️ 가게 검색 :"
            className="px-5 ml-16 font-bold text-black border border-black rounded-lg"
            value={searchQuery}
            onChange={handleSearch}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      </div>

      {/* 레스토랑 리스트 */}
      <div className="flex-1 px-4 overflow-y-auto">
        {restaurantData.map((restaurant) => (
          <div
            key={restaurant.id}
            ref={(el) => (restaurantRefs.current[restaurant.id] = el)}
            className={`p-4 mb-4 bg-white border-2 ${
              selectedRestaurant && selectedRestaurant.id === restaurant.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-400"
            } rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
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
                    <span className="mr-1 text-yellow-400">
                      {renderStars(restaurant.rating)}
                    </span>
                    <span className="text-sm">
                      {formatRating(restaurant.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>
                <strong>리뷰:</strong> {restaurant.reviewCount}개
              </p>
              <p>
                <strong>총 평점:</strong> {calculateLikePoints(restaurant)}점
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
