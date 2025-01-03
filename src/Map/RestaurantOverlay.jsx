// RestaurantOverlay.jsx
import React from "react";
import { IoClose } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const RestaurantOverlay = ({ restaurant, onClose, source = "list" }) => {
  if (!restaurant) return null;

  // 마커 클릭 시 오버레이 표시
  if (source === "marker") {
    return (
      <div className="fixed z-50 bg-white rounded-lg shadow-lg w-72 font-yeonsung">
        <button
          onClick={onClose}
          className="absolute text-gray-500 right-3 top-3 hover:text-gray-700"
        >
          <IoClose className="w-5 h-5" />
        </button>

        <div className="p-4">
          <div className="flex items-center gap-3">
            <img
              src={`/images/${restaurant.category}.png`}
              alt={restaurant.category}
              className="rounded-lg w-14 h-14"
            />
            <div>
              <h2 className="text-lg font-bold">{restaurant.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {restaurant.category}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-400">⭐</span>
                  <span className="ml-1 text-sm">{restaurant.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="space-y-1 text-sm">
              <p className="flex items-center gap-1">
                <span>📍</span>
                {restaurant.address}
              </p>
              <p className="flex items-center gap-1">
                <span>⏰</span>
                {restaurant.hours}
              </p>
            </div>

            <div className="mt-3">
              <h3 className="mb-2 text-sm font-bold">메뉴</h3>
              <div className="space-y-1">
                {(restaurant.menu || []).slice(0, 3).map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.item}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-2 text-sm">
              <span className="text-blue-500">👍 {restaurant.rating}</span>
              <span className="text-red-500">
                👎 {restaurant.dislikeRating}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 리스트 클릭 시 오른쪽 상세정보 창 표시
  return (
    <div className="fixed z-50 w-1/3 h-screen bg-white border-2 border-gray-300 rounded-lg shadow-lg left-96 top-3 right-2">
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
              {restaurant.fullMenu
                ? restaurant.fullMenu.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-1 text-sm border-b border-gray-100 last:border-b-0"
                    >
                      <span>{item.item}</span>
                      <span>{item.price}</span>
                    </div>
                  ))
                : restaurant.menu.map((item, index) => (
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
                <span className="ml-2">{restaurant.dislikeRating}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{restaurant.badText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOverlay;
