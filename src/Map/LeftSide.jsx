import React, { useState, useEffect, useRef } from "react";

const LeftSide = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
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

  const restaurantList = [
    {
      id: 1,
      name: "현이네 고기국수",
      category: "한식",
      rating: "4.75",
      goodText: "가격도 적당하고 맛도 만족해요",
      badText: "가끔 웨이팅이 있어요",
      address: "서울 광진구 화양동 48-5",
      hours: "11:00 - 21:00",
      operatingHours: {
        weekday: "11:00 - 21:00",
        weekend: "11:00 - 21:00 (일요일 휴무)",
      },
      position: { lat: 37.541789, lng: 127.071901 },
      menu: [
        { item: "고기국수", price: "9,000원" },
        { item: "비빔국수", price: "8,500원" },
        { item: "물국수", price: "8,000원" },
        { item: "만두국", price: "9,000원" },
      ],
      image: "/images/고기국수.jpg",
    },
    {
      id: 2,
      name: "장인닭갈비 건대점",
      category: "한식",
      rating: "4.8",
      goodText: "닭갈비가 맛있고 직원분들이 친절해요",
      badText: "저녁시간에는 웨이팅이 길어요",
      address: "서울 광진구 화양동 8-19",
      hours: "11:00 - 22:00",
      operatingHours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 22:00",
      },
      position: { lat: 37.541231, lng: 127.070565 },
      menu: [
        { item: "닭갈비 (1인분)", price: "13,000원" },
        { item: "치즈닭갈비 (1인분)", price: "15,000원" },
        { item: "볶음밥", price: "3,000원" },
        { item: "우동사리", price: "3,000원" },
      ],
      image: "/images/닭갈비.jpg",
    },
    {
      id: 3,
      name: "봉추찜닭 건대입구점",
      category: "한식",
      rating: "4.6",
      goodText: "양이 많고 맛있어요",
      badText: "주차가 어려워요",
      address: "서울 광진구 화양동 7-4",
      hours: "11:00 - 22:00",
      operatingHours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 22:00",
      },
      position: { lat: 37.540997, lng: 127.070818 },
      menu: [
        { item: "찜닭 (小)", price: "25,000원" },
        { item: "찜닭 (中)", price: "29,000원" },
        { item: "찜닭 (大)", price: "33,000원" },
        { item: "로제찜닭 (中)", price: "31,000원" },
      ],
      image: "/images/찜닭.jpg",
    },
    {
      id: 4,
      name: "한촌설렁탕 건대입구역점",
      category: "한식",
      rating: "4.5",
      goodText: "깔끔한 국물맛이 일품이에요",
      badText: "가격이 조금 있는 편이에요",
      address: "서울 광진구 화양동 5-4",
      hours: "24시간 영업",
      operatingHours: {
        weekday: "24시간",
        weekend: "24시간",
      },
      position: { lat: 37.540635, lng: 127.069477 },
      menu: [
        { item: "설렁탕", price: "12,000원" },
        { item: "도가니탕", price: "15,000원" },
        { item: "특설렁탕", price: "14,000원" },
        { item: "양지설렁탕", price: "13,000원" },
      ],
      image: "/images/설렁탕.jpg",
    },
    {
      id: 5,
      name: "더막생오리 건대점",
      category: "한식",
      rating: "4.7",
      goodText: "오리고기가 신선하고 맛있어요",
      badText: "테이블이 좀 좁아요",
      address: "서울 광진구 화양동 9-3",
      hours: "16:00 - 24:00",
      operatingHours: {
        weekday: "16:00 - 24:00",
        weekend: "16:00 - 24:00",
      },
      position: { lat: 37.541086, lng: 127.070757 },
      menu: [
        { item: "오리로스구이", price: "35,000원" },
        { item: "오리주물럭", price: "35,000원" },
        { item: "오리볶음밥", price: "4,000원" },
        { item: "감자채볶음", price: "12,000원" },
      ],
      image: "/images/오리고기.jpg",
    },
  ];

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsSidebarOpen(true);
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    const kakao = window.kakao;
    const mapInstance = new kakao.maps.Map(mapContainer.current, {
      center: new kakao.maps.LatLng(37.540997, 127.070818),
      level: 3,
    });

    setMap(mapInstance);

    const markers = [];
    const infowindows = [];

    restaurantList.forEach((restaurant) => {
      const markerPosition = new kakao.maps.LatLng(
        restaurant.position.lat,
        restaurant.position.lng
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: mapInstance,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;font-weight:bold;">${restaurant.name}</div>`,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(mapInstance, marker);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });

      kakao.maps.event.addListener(marker, "click", function () {
        handleRestaurantClick(restaurant);
        mapInstance.panTo(markerPosition);
      });

      markers.push(marker);
      infowindows.push(infowindow);
    });

    const zoomControl = new kakao.maps.ZoomControl();
    mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    return () => {
      markers.forEach((marker) => marker.setMap(null));
      infowindows.forEach((infowindow) => infowindow.close());
    };
  }, [restaurantList]);

  return (
    <div className="relative flex h-screen">
      {/* 메인 컨텐츠 */}
      <div className="flex flex-col w-full">
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
            className="ml-2 text-center border border-black rounded-md pml-2 w-4/7 font-yeonsung"
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

        {/* 메인 컨텐츠 영역 */}
        <div className="flex gap-4 p-4">
          {/* 왼쪽 레스토랑 리스트 */}
          <div className="w-72 h-[calc(100vh-180px)] overflow-y-auto pr-4">
            {restaurantList.map((restaurant) => (
              <div
                key={restaurant.id}
                className="p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold font-yeonsung">
                    {restaurant.name}
                  </h2>
                  <span className="text-sm font-yeonsung">
                    {restaurant.category}
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex items-center">
                    <span className="text-blue-500 font-yeonsung">
                      좋아요 👍
                    </span>
                    <span className="ml-2 text-sm">{restaurant.rating}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {restaurant.goodText}
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <span className="text-red-500 font-yeonsung">
                      싫어요 👎
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {restaurant.badText}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 지도 영역 */}
          <div className="flex-1">
            <div
              ref={mapContainer}
              className="w-full h-[calc(100vh-180px)] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* 슬라이딩 사이드바 */}
      <div
        className={`fixed right-0 top-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedRestaurant && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="flex items-center mb-6">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 mr-4 rounded-full hover:bg-gray-100"
              >
                <span className="text-xl">←</span>
              </button>
              <h1 className="text-xl font-bold font-yeonsung">
                {selectedRestaurant.name}
              </h1>
            </div>

            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="object-cover w-full h-48 mb-4 rounded-lg"
            />

            <div className="p-4 mb-6 rounded-lg bg-gray-50">
              <h2 className="mb-2 font-bold font-yeonsung">상세정보</h2>
              <p className="mb-2 text-sm">
                🏠 주소: {selectedRestaurant.address}
              </p>
              <p className="mb-2 text-sm">⏰ 영업시간:</p>
              <p className="ml-4 text-sm">
                - 평일: {selectedRestaurant.operatingHours.weekday}
              </p>
              <p className="ml-4 text-sm">
                - 주말: {selectedRestaurant.operatingHours.weekend}
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-yeonsung">좋아요 👍</span>
                <span>{selectedRestaurant.rating}</span>
              </div>
              <p className="mt-1 text-sm">{selectedRestaurant.goodText}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-centerjustify-between">
                <span className="text-red-500 font-yeonsung">싫어요 👎</span>
              </div>
              <p className="mt-1 text-sm">{selectedRestaurant.badText}</p>
            </div>

            <div>
              <h2 className="mb-2 font-bold font-yeonsung">메뉴</h2>
              {selectedRestaurant.menu.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <span className="text-sm">• {item.item}</span>
                  <span className="text-sm font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
