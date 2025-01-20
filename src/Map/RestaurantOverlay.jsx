import React from "react";

const RestaurantOverlay = ({ restaurant, onClose, source }) => {
  if (!restaurant) return null;

  const formatPrice = (price) => {
    if (
      price === 0 ||
      price === "0" ||
      price === "" ||
      price === undefined ||
      price === null
    ) {
      return "가게 측에서 가격 미제공";
    }
    return typeof price === "number" ? `${price.toLocaleString()}원` : price;
  };

  const formatLikePoints = (likePoints) => {
    try {
      let points = [];
      if (typeof likePoints === "string") {
        points = JSON.parse(likePoints); // JSON 문자열 파싱
      } else {
        points = likePoints || [];
      }
      return points.filter(
        (point) =>
          point.category !== "항목 없음" && point.category.trim() !== ""
      );
    } catch (e) {
      console.warn("Error parsing likePoints:", e);
      return [];
    }
  };

  // 유효한 메뉴만 필터링
  const validMenus =
    restaurant.menus?.filter(
      (menu) => menu && typeof menu === "object" && menu.name
    ) || [];

  // 마커 호버시 간단한 정보만 표시
  if (source === "marker") {
    return (
      <div
        className="absolute z-50 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg left-4 top-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 w-24 h-24 mr-4">
          <img
            src={restaurant.imageUrl || `/images/${restaurant.category}.png`}
            alt={restaurant.name}
            className="object-cover w-full h-full rounded-lg"
            onError={(e) => {
              e.target.src = "/images/한식.png";
            }}
          />
        </div>
        <div className="flex justify-between mb-2">
          <h3 className="text-lg font-bold font-nanum">{restaurant.name}</h3>
        </div>
        <p className="mb-2 text-sm text-gray-600 font-nanum">
          <strong>주소:</strong> {restaurant.address}
        </p>
        <p className="text-sm text-gray-600 font-nanum">
          <strong>영업시간:</strong> {restaurant.hours || "정보 없음"}
        </p>
      </div>
    );
  }

  // 리스트에서 클릭시 상세 정보 표시
  return (
    <div
      className="fixed z-50 w-1/3 h-screen ml-12 overflow-y-auto bg-white border-2 border-gray-300 top-1 rounded-xl left-80"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 z-10 flex justify-between p-3 bg-white border-2 border-gray-200">
        <h2 className="text-2xl font-bold font-nanum">{restaurant.name}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-2xl font-bold text-red-500 font-nanum"
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
          <div className="grid gap-2 font-nanum">
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
        {validMenus.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-nanum">메뉴</h3>
            <div className="grid gap-3">
              {validMenus.map((menu) => (
                <div
                  key={menu.id || menu.name}
                  className="p-3 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-1 font-nanum">
                    <span className="text-lg font-medium">{menu.name}</span>
                    <span className="font-bold text-blue-600">
                      {formatPrice(menu.price)}
                    </span>
                  </div>
                  {menu.description && menu.description !== "설명 없음" && (
                    <p className="text-sm text-gray-600 font-nanum">
                      {menu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 좋아요 포인트 */}
        {restaurant.likePoints && restaurant.likePoints.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-nanum">좋아요 포인트</h3>
            <div className="p-4 space-y-4 rounded-lg bg-gray-50">
              {formatLikePoints(restaurant.likePoints).map((point, index) => (
                <div key={index} className="font-nanum">
                  <div className="flex items-center justify-between mb-1">
                    <span>{point.category}</span>
                    <span className="text-sm text-gray-600">{point.score}</span>
                  </div>
                  <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: `${parseInt(point.score) * 10}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 리뷰 섹션 */}
        {restaurant.reviews && restaurant.reviews.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-bold font-nanum">리뷰</h3>
            <div className="grid gap-3">
              {restaurant.reviews.map((review, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2 font-nanum">
                    <span className="font-medium">
                      {review.author || "익명"}
                    </span>
                    <span className="text-yellow-400">
                      {"⭐".repeat(Math.round(review.rating))}
                    </span>
                  </div>
                  <p className="text-gray-700 font-nanum">{review.content}</p>
                  <p className="mt-2 text-sm text-gray-500 font-nanum">
                    {review.date}
                  </p>
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
