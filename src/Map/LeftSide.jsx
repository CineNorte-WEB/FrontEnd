import React, { useState, useEffect, useRef } from "react";

const LeftSide = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
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

  const restaurantList = [
    {
      id: 1,
      name: "현이네 고기국수",
      category: "한식",
      rating: "4.75",
      description: "가족적 분위기와 맛있어요!",
      address: "서울 광진구 군자로 23",
      hours: "11:20 - 20:00",
      position: { lat: 37.538574, lng: 127.082308 },
      menu: [
        { item: "고기국수", price: "9,000원" },
        { item: "비빔국수", price: "8,500원" },
      ],
    },
    // ... other restaurant data remains the same
  ];

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  useEffect(() => {
    const kakao = window.kakao;
    const mapInstance = new kakao.maps.Map(mapContainer.current, {
      center: new kakao.maps.LatLng(37.540389, 127.070935),
      level: 4,
    });

    setMap(mapInstance);

    restaurantList.forEach((restaurant) => {
      const markerPosition = new kakao.maps.LatLng(
        restaurant.position.lat,
        restaurant.position.lng
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: mapInstance,
      });

      kakao.maps.event.addListener(marker, "click", () => {
        setSelectedRestaurant(restaurant);
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${restaurant.name}</div>`,
        });
        infowindow.open(mapInstance, marker);
      });
    });
  }, []);

  return (
    <>
      <div className="flex items-center w-4/5 h-10 mx-8 my-4 border border-black shadow-lg rounded-xl">
        <img src="/images/졸업.png" alt="졸업" className="w-8 h-10 ml-2" />
        <p className="ml-2 text-sm font-bold font-yeonsung">학교 정보 :</p>
        <img
          src={universities[selectedUniversity]}
          alt={`${selectedUniversity} 로고`}
          className="w-8 h-8 ml-5"
        />
        <select
          className="py-0.5 text-center ml-2 border border-black rounded-md w-4/7 font-yeonsung"
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

      {/* Rest of the component remains the same */}
      <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start">
        <div className="w-full p-4 bg-gray-100 rounded-md shadow-md md:w-1/3">
          {restaurantList.map((restaurant) => (
            <div
              key={restaurant.id}
              className="mb-4 cursor-pointer"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              <h2 className="mb-2 text-lg font-bold">{restaurant.name}</h2>
              <p className="text-sm">{restaurant.category}</p>
              <p className="text-sm text-green-600">
                좋아요: {restaurant.rating}
              </p>
              <p className="text-sm">{restaurant.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full p-6 bg-white rounded-md shadow-md md:w-2/3">
          {selectedRestaurant ? (
            <>
              <h1 className="mb-4 text-xl font-bold">
                {selectedRestaurant.name}
              </h1>
              <p className="mb-2 text-sm">{selectedRestaurant.category}</p>
              <p className="mb-4 text-green-600">
                좋아요: {selectedRestaurant.rating}
              </p>
              <p className="text-sm">주소: {selectedRestaurant.address}</p>
              <p className="text-sm">영업 시간: {selectedRestaurant.hours}</p>
              <h2 className="mt-4 mb-2 text-lg font-bold">메뉴</h2>
              <ul className="ml-4 text-sm list-disc">
                {selectedRestaurant.menu.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.item}: {menuItem.price}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm">레스토랑을 선택해주세요.</p>
          )}
          <div className="mt-4">
            <h2 className="mb-2 text-lg font-bold">지도</h2>
            <div
              ref={mapContainer}
              className="w-full h-64 bg-gray-300 rounded-md"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
