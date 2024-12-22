// React component structure for TailwindCSS, Vite, and React setup
// Assuming a fresh Vite project with TailwindCSS installed

// src/App.jsx
import React from "react";

const LeftSide = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start">
      {/* Sidebar */}
      <div className="w-full p-4 bg-gray-100 rounded-md shadow-md md:w-1/3">
        {/* Restaurant List */}
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-bold">현이네 고기국수</h2>
          <p className="text-sm">한식</p>
          <p className="text-sm text-green-600">좋아요: 4.75</p>
          <p className="text-sm">가족적 분위기와 맛있어요!</p>
          <button className="mt-2 text-blue-500 underline">더보기 →</button>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-lg font-bold">진스시</h2>
          <p className="text-sm">일식</p>
          <p className="text-sm text-green-600">좋아요: 4.75</p>
          <p className="text-sm">맛이 일품입니다!</p>
          <button className="mt-2 text-blue-500 underline">더보기 →</button>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-lg font-bold">배추원의 홍콩반점</h2>
          <p className="text-sm">중식</p>
          <p className="text-sm text-green-600">좋아요: 5.00</p>
          <p className="text-sm">훌륭한 음식과 가격!</p>
          <button className="mt-2 text-blue-500 underline">더보기 →</button>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-lg font-bold">아재식당</h2>
          <p className="text-sm">한식</p>
          <p className="text-sm text-green-600">좋아요: 4.75</p>
          <p className="text-sm">가족끼리 오기 좋아요.</p>
          <button className="mt-2 text-blue-500 underline">더보기 →</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full p-6 bg-white rounded-md shadow-md md:w-2/3">
        <h1 className="mb-4 text-xl font-bold">현이네 고기국수</h1>
        <p className="mb-2 text-sm">한식</p>
        <p className="mb-4 text-green-600">좋아요: 4.75</p>

        <h2 className="mb-2 text-lg font-bold">상세정보</h2>
        <p className="text-sm">주소: 서울 광진구 군자로 23</p>
        <p className="text-sm">
          영업 시간: 11:20 - 20:00 (15:00 - 17:00 브레이크타임)
        </p>

        <h2 className="mt-4 mb-2 text-lg font-bold">메뉴</h2>
        <ul className="ml-4 text-sm list-disc">
          <li>고기국수: 9,000원</li>
          <li>비빔국수: 8,500원</li>
          <li>홍콩리그국수: 10,000원</li>
          <li>음료: 2,000원</li>
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
