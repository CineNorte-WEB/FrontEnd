import React from "react";
import { IoClose } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const RestaurantOverlay = ({ restaurant, onClose, source = "list" }) => {
  if (!restaurant) return null;

  // 리스트 클릭 시 오른쪽 상세정보 창 표시
  if (source === "list") {
    return (
      <div className="fixed z-50 w-1/3 h-screen bg-white border-2 border-gray-300 rounded-lg shadow-lg left-80 top-3 right-2">
        <div className="relative h-full p-8 overflow-y-auto font-yeonsung">
          <div className="flex items-center gap-4">
            <img
              src={`/images/${restaurant.category}.png`}
              alt={restaurant.category}
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{restaurant.name}</h2>
              <div className="flex items-center mt-1">
                <span className="text-gray-600">{restaurant.category}</span>
                <span className="flex items-center ml-2">
                  <span className="mr-1 text-yellow-400">⭐</span>
                  <span>{restaurant.rating}</span>
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute text-gray-400 left-4 top-4 hover:text-gray-600"
            >
              <IoArrowBack className="w-6 h-6" />
            </button>
          </div>

          {/* 나머지 코드는 그대로 유지 */}
          <div className="mt-6">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-bold">상세정보</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="flex items-center my-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>주소: {restaurant.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span>영업시간: {restaurant.hours}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-bold">메뉴</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                {restaurant.menu.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-1 text-sm border-b border-gray-100 last:border-b-0"
                  >
                    <span>{item.item}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center mb-2">
                <span className="font-bold">리뷰</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="mb-3">
                <div className="flex items-center">
                  <span className="text-blue-500">좋아요 👍</span>
                  <span className="ml-2">{restaurant.rating}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {restaurant.goodText}
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-red-500">싫어요 👎</span>
                  <span className="ml-2">{restaurant.dislikeRating}</span>{" "}
                  {/* 하드코딩된 3.21을 restaurant.dislikeRating으로 변경 */}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {restaurant.badText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 마커 클릭 시 오버레이 표시 (변경 없음)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto font-yeonsung">
        <div className="relative p-5">
          <button
            onClick={onClose}
            className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
          >
            <IoClose className="w-6 h-6" />
          </button>

          <div className="flex items-center mb-4">
            <img
              src={`/images/${restaurant.category}.png`}
              alt={restaurant.category}
              className="w-16 h-16 mr-4 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">{restaurant.name}</h2>
              <div className="flex items-center mt-1">
                <span className="mr-2 text-gray-600">
                  {restaurant.category}
                </span>
                <span className="text-yellow-400">⭐</span>
                <span className="ml-1">{restaurant.rating}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="mb-2">
                <span className="font-bold">🏠 주소:</span> {restaurant.address}
              </p>
              <p>
                <span className="font-bold">⏰ 영업시간:</span>{" "}
                {restaurant.hours}
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="mb-3 font-bold">메뉴</h3>
              <div className="space-y-2">
                {restaurant.menu.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span>{item.item}</span>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="mb-3">
                <div className="flex items-center">
                  <span className="text-blue-500">좋아요 👍</span>
                  <span className="ml-2">{restaurant.rating}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {restaurant.goodText}
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-red-500">싫어요 👎</span>
                  <span className="ml-2">{restaurant.dislikeRating}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {restaurant.badText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOverlay;
