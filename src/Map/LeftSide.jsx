import React, { useState } from "react";
import RestaurantOverlay from "./RestaurantOverlay";

const LeftSide = ({ restaurantData, onSelectRestaurant }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("건대");

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
    onSelectRestaurant && onSelectRestaurant(restaurant);
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  return (
    <div className="relative h-full font-yeonsung">
      {/* 대학교 선택 헤더 */}
      <div className="flex items-center w-5/6 h-10 mx-8 my-4 border border-black shadow-lg rounded-xl font-yeonsung">
        <img src="/images/졸업.png" alt="졸업" className="w-8 h-10 ml-2" />
        <p className="ml-2 text-sm font-bold font-yeonsung">학교 정보 :</p>
        <img
          src={universities[selectedUniversity]}
          alt={`${selectedUniversity} 로고`}
          className="w-8 h-8 ml-5"
        />
        <select
          className="py-1 ml-2 text-center border border-black rounded-md 2 ml- w-4/7 font-yeonsung"
          value={selectedUniversity}
          onChange={handleUniversityChange}
        >
          <option value="건대" className="font-yeonsung">
            건국대학교
          </option>
          <option value="홍대" className="font-yeonsung">
            홍익대학교
          </option>
          <option value="시립대" className="font-yeonsung">
            서울시립대학교
          </option>
          <option value="이대" className="font-yeonsung">
            이화여자대학교
          </option>
          <option value="연대" className="font-yeonsung">
            연세대학교
          </option>
          <option value="외대" className="font-yeonsung">
            한국외국어대학교
          </option>
          <option value="경희대" className="font-yeonsung">
            경희대학교
          </option>
        </select>
      </div>

      {/* 레스토랑 리스트 */}
      <div className="h-full px-4 overflow-y-auto font-yeonsung">
        {restaurantData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="p-4 mb-4 bg-white border-2 border-gray-400 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 font-yeonsung"
            onClick={() => handleRestaurantClick(restaurant)}
          >
            <div className="flex items-center mb-4 font-yeonsung">
              <img
                src={`/images/${restaurant.category}.png`}
                alt={restaurant.category}
                className="w-12 h-12 mr-4 rounded-lg"
              />
              <div className="flex-1 font-yeonsung">
                <div className="flex items-center justify-between font-yeonsung">
                  <h2 className="text-lg font-bold font-yeonsung">
                    {restaurant.name}
                  </h2>
                  <div className="flex items-center">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span className="text-sm font-yeonsung">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 font-yeonsung">
                  {restaurant.category}
                </span>
              </div>
            </div>
            <div className="mb-2 font-yeonsung">
              <div className="flex items-center font-yeonsung">
                <span className="text-blue-500 font-yeonsung">좋아요 👍</span>
              </div>
              <p className="mt-1 text-sm text-gray-600 font-yeonsung">
                {restaurant.goodText}
              </p>
            </div>
            <div className="mt-2 font-yeonsung">
              <div className="flex items-center font-yeonsung">
                <span className="text-red-500 font-yeonsung">싫어요 👎</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 font-yeonsung">
                {restaurant.badText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedRestaurant && (
        <RestaurantOverlay
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
};

export default LeftSide;
