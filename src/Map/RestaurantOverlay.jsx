import React from "react";
import { IoIosClose } from "react-icons/io";

const RestaurantOverlay = ({ restaurant, onClose }) => {
  if (!restaurant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto font-yeonsung">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
          >
            <IoIosClose size={24} />
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
                <span className="text-blue-500">좋아요 👍</span>
                <p className="mt-1 text-sm text-gray-600">
                  {restaurant.goodText}
                </p>
              </div>
              <div>
                <span className="text-red-500">싫어요 👎</span>
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
