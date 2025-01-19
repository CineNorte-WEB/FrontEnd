import React, { useState, useRef, useEffect } from "react";

const LeftSide = ({
  restaurantData,
  onSelectRestaurant,
  onUniversityChange,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("연대");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalContent, setModalContent] = useState(null); // 모달 내용 상태
  const [fetchedData, setFetchedData] = useState({}); // 서버에서 가져온 데이터 저장
  const restaurantRefs = useRef({});

  const universities = {
    연대: "/images/연대.png",
    서강대: "/images/서강대.png",
    이대: "/images/이대.png",
    시립대: "/images/시립대.png",
    경희대: "/images/경희대.png",
    외대: "/images/외대.png",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMap = {};
        await Promise.all(
          restaurantData.map(async (restaurant) => {
            try {
              const response = await fetch(
                `http://43.203.118.59:8080/places/id/${restaurant.id}`
              );
              const contentType = response.headers.get("Content-Type");

              if (response.ok && contentType.includes("application/json")) {
                const data = await response.json();
                dataMap[restaurant.id] = data; // ID를 키로 매핑
              } else {
                console.error(
                  `ID ${restaurant.id} - API 호출 실패. 상태 코드:`,
                  response.status
                );
              }
            } catch (error) {
              console.error(
                `ID ${restaurant.id} - API 호출 중 오류 발생:`,
                error
              );
            }
          })
        );
        setFetchedData(dataMap); // 모든 데이터를 상태로 저장
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
      }
    };

    fetchData();
  }, []);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    onSelectRestaurant && onSelectRestaurant(restaurant);
  };

  const handleUniversityChange = (e) => {
    const newUniversity = e.target.value;
    setSelectedUniversity(newUniversity);
    onUniversityChange && onUniversityChange(newUniversity);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
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

  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
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
        {restaurantData.map((restaurant) => {
          const restaurantDetails = fetchedData[restaurant.id] || {};
          const positiveSentences =
            restaurantDetails.representativeSentenceMap?.positiveSentences ||
            [];
          const negativeSentences =
            restaurantDetails.representativeSentenceMap?.negativeSentences ||
            [];

          return (
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
                  src={restaurant.imageUrl || "/images/default-restaurant.png"}
                  alt={restaurant.name}
                  className="w-24 h-24 mr-4 rounded-lg"
                  onError={(e) => {
                    e.target.src = "/images/default-restaurant.png";
                  }}
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-center">
                    {restaurant.name}
                  </h2>
                </div>
              </div>
              {/* 긍정 및 부정 리뷰 대표 문장 */}
              <div className="text-sm">
                <div
                  className="p-2 font-['Song Myung'] mb-2 font-bold bg-white border-2 border-blue-500 rounded-lg text-black cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(
                      "😃긍정 리뷰",
                      positiveSentences.length > 0
                        ? positiveSentences
                        : ["리뷰가 없습니다."]
                    );
                  }}
                >
                  <strong>😃좋아요:</strong>{" "}
                  {positiveSentences[0] || "리뷰가 없습니다."}
                </div>
                <div
                  className="p-2 font-bold text-black bg-white border-2 border-red-600 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(
                      "😡부정 리뷰",
                      negativeSentences.length > 0
                        ? negativeSentences
                        : ["리뷰가 없습니다."]
                    );
                  }}
                >
                  <strong>😡싫어요:</strong>{" "}
                  {negativeSentences[0] || "리뷰가 없습니다."}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 모달 창 */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="mb-4 text-lg font-bold">{modalContent.title}</h2>
            <ul className="pl-5 list-disc">
              {modalContent.content.map((sentence, index) => (
                <li key={index} className="mb-2 text-sm">
                  {sentence}
                </li>
              ))}
            </ul>
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
