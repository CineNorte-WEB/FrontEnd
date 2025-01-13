import React from "react";

const RestaurantOverlay = ({ restaurant, onClose, source }) => {
  if (!restaurant) return null;

  const formatLikePoints = (likePoints) => {
    try {
      if (typeof likePoints === "string") {
        return JSON.parse(likePoints);
      }
      return likePoints || [];
    } catch (e) {
      console.warn("Error parsing likePoints:", e);
      return [];
    }
  };

  // 마커 호버시 간단한 정보만 표시
  if (source === "marker") {
    return (
      <div className="absolute z-50 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg left-4 top-4">
        <div className="flex justify-between mb-2">
          <h3 className="text-lg font-bold font-yeonsung">{restaurant.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <p className="mb-2 text-sm text-gray-600">
          <strong>카테고리:</strong> {restaurant.category}
        </p>
        <p className="mb-2 text-sm text-gray-600">
          <strong>주소:</strong> {restaurant.address}
        </p>
        <p className="text-sm text-gray-600">
          <strong>영업시간:</strong> {restaurant.hours || "정보 없음"}
        </p>
      </div>
    );
  }

  // 리스트에서 클릭시 상세 정보 표시
  return (
    <div className="fixed z-50 w-1/3 h-screen mb-4 ml-12 overflow-y-auto bg-white border-2 border-gray-300 top-1 rounded-xl left-80">
      <div className="sticky top-0 z-10 flex justify-between p-3 bg-white border-2 border-gray-200">
        <h2 className="text-2xl font-bold font-yeonsung">{restaurant.name}</h2>
        <button
          onClick={onClose}
          className="text-2xl font-bold text-red-500 font-yeonsung hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="p-4">
        {/* 기본 정보 */}
        <div className="p-4 mb-6 rounded-lg bg-gray-50">
          <img
            src={restaurant.imageUrl || `/images/${restaurant.category}.png`}
            alt={restaurant.name}
            className="object-cover w-full h-48 mb-4 rounded-lg"
            onError={(e) => {
              e.target.src = "/images/default-restaurant.png";
            }}
          />
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-bold">평점</span>
              <span className="text-yellow-400">
                {"⭐".repeat(Math.round(restaurant.rating))} (
                {restaurant.rating})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">카테고리</span>
              <span>{restaurant.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">주소</span>
              <span className="flex-1 ml-4 text-right">
                {restaurant.address}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">영업시간</span>
              <span>{restaurant.hours || "정보 없음"}</span>
            </div>
          </div>
        </div>

        {/* 메뉴 정보 */}
        {restaurant.menus && restaurant.menus.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-yeonsung">메뉴</h3>
            <div className="grid gap-3">
              {restaurant.menus.map((menu, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-medium">{menu.name}</span>
                    <span className="font-bold text-blue-600">
                      {menu.price?.toLocaleString()}원
                    </span>
                  </div>
                  {menu.description && menu.description !== "설명 없음" && (
                    <p className="text-sm text-gray-600">{menu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 좋아요 포인트 */}
        {restaurant.likePoints && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-yeonsung">
              좋아요 포인트
            </h3>
            <div className="p-4 rounded-lg bg-gray-50">
              {formatLikePoints(restaurant.likePoints).map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <span className="font-medium">{point.category}</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 mr-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(point.score / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{point.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 리뷰 섹션 */}
        {restaurant.reviews && restaurant.reviews.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-yeonsung">리뷰</h3>
            <div className="grid gap-3">
              {restaurant.reviews.map((review, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">
                      {review.author || "익명"}
                    </span>
                    <span className="text-yellow-400">
                      {"⭐".repeat(Math.round(review.rating))}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.content}</p>
                  <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantOverlay;
