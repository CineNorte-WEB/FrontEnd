import React, { useState, useRef, useEffect } from "react";

const LeftSide = ({
  restaurantData,
  onSelectRestaurant,
  onUniversityChange,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("연대");
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchedData, setFetchedData] = useState({});
  const restaurantRefs = useRef({});
  const [likeStatus, setLikeStatus] = useState({}); // 찜 상태 관리

  const universities = {
    연대: "/images/연대.png",
    서강대: "/images/서강대.png",
    이대: "/images/이대.png",
    시립대: "/images/시립대.png",
    경희대: "/images/경희대.png",
    외대: "/images/외대.png",
  };

  const toggleLike = (restaurantId) => {
    setLikeStatus((prevState) => ({
      ...prevState,
      [restaurantId]: !prevState[restaurantId], // 현재 상태를 토글
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMap = {};
        await Promise.allSettled(
          restaurantData.map(async (restaurant) => {
            try {
              const response = await fetch(
                `http://3.36.90.46:8080/places/name/${encodeURIComponent(
                  restaurant.name
                )}`
              );

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

              const contentType = response.headers.get("Content-Type") || "";
              if (!contentType.includes("application/json")) {
                throw new Error(
                  "Invalid content type received from the server."
                );
              }

              const data = await response.json();

              let likePoints = [];
              if (data.likePoints && typeof data.likePoints === "string") {
                try {
                  const parsedPoints = JSON.parse(
                    data.likePoints.replace(/'/g, '"')
                  );
                  likePoints = Array.isArray(parsedPoints)
                    ? parsedPoints.filter(
                        (point) =>
                          point.category &&
                          point.category !== "항목 없음" &&
                          point.category.trim() !== ""
                      )
                    : [];
                } catch (e) {
                  console.warn("likePoints 파싱 오류:", e);
                }
              }

              dataMap[restaurant.id] = {
                ...data,
                likePoints,
                representativeSentenceMap: {
                  positiveSentences:
                    data.representativeSentenceMap?.positiveSentences || {},
                  negativeSentences:
                    data.representativeSentenceMap?.negativeSentences || {},
                },
              };
            } catch (error) {
              console.error(
                `Error processing restaurant: ${restaurant.name}`,
                error
              );
            }
          })
        );

        setFetchedData(dataMap);
        console.log("Fetched Data Map:", dataMap); // 디버깅용 로그
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
      }
    };

    fetchData();
  }, [restaurantData]);

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

  return (
    <div className="relative flex flex-col h-full font-nanum">
      {/* 대학교 선택 헤더 */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex items-center h-10 mx-2 my-2 border-2 border-black rounded-lg">
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
            className="w-5/6 px-3 ml-6 font-bold text-black border border-black rounded-lg"
            value={searchQuery}
            onChange={handleSearch}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
        <hr className="mx-4 mb-2 border-2 border-gray-500 rounded-xl" />
      </div>

      {/* 레스토랑 리스트 */}
      <div className="flex-1 px-4 overflow-y-auto">
        {restaurantData.map((restaurant) => {
          const restaurantDetails = fetchedData[restaurant.id] || {};
          const positiveSentences =
            restaurantDetails.representativeSentenceMap?.positiveSentences ||
            {};
          const negativeSentences =
            restaurantDetails.representativeSentenceMap?.negativeSentences ||
            {};

          return (
            <div
              key={restaurant.id}
              ref={(el) => (restaurantRefs.current[restaurant.id] = el)}
              className={`px-4 py-2 mb-4 bg-white border-2 ${
                selectedRestaurant && selectedRestaurant.id === restaurant.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-400"
              } rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={`/images/${restaurant.category}.png`} // 카테고리 기반 이미지 경로
                  alt={restaurant.name}
                  className="w-[115px] h-[115px] rounded-lg mr-3"
                  onError={(e) => {
                    e.target.src = "/images/default.png"; // 기본 이미지로 대체
                  }}
                />
                <div className="space-y-3">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold whitespace-normal break-words max-w-[15ch]">
                      {restaurant.name}
                    </h2>
                  </div>
                  {/* 카테고리 표시 */}
                  <div className="flex p-1 mb-4 space-x-2 font-semibold text-gray-600 border-2 border-gray-500 rounded-lg">
                    <img
                      src="/images/menu.png"
                      alt="메뉴"
                      className="w-[40px] h-[40px]"
                    />
                    <p className="mt-1 text-2xl "> : {restaurant.category}</p>
                  </div>
                  {/* 하트 모양 아이콘 */}
                  <div className="flex items-center px-2 mt-2 border-2 border-gray-500 rounded-lg">
                    <p className="text-xl font-bold text-red-600">찜하기 : </p>
                    <img
                      src={
                        likeStatus[restaurant.id]
                          ? "/images/love.png"
                          : "/images/empty.png"
                      } // 상태에 따라 이미지 변경
                      alt="찜 상태"
                      className="w-[40px] h-[40px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // 이벤트 전파 중지
                        toggleLike(restaurant.id); // 찜 상태 토글
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* 긍정 및 부정 리뷰 대표 문장 */}
              <div className="text-sm">
                {/* 긍정 리뷰 섹션 */}
                <div className="p-2 mb-2 border-2 border-blue-500 rounded-md bg-blue-50">
                  <div className="flex">
                    <img
                      src="/images/like.png"
                      alt="좋아요"
                      className="w-[35px] h-[35px]"
                    />
                    <h3 className="mt-1 ml-3 text-2xl font-bold text-blue-700">
                      긍정 리뷰:
                    </h3>
                  </div>
                  <p className="mt-1 font-bold">
                    {positiveSentences &&
                    Object.entries(positiveSentences).length > 0
                      ? `${Object.entries(positiveSentences)[0][0]}: ${
                          Object.entries(positiveSentences)[0][1]
                        }`
                      : "리뷰가 없습니다."}
                  </p>
                  
                </div>

                {/* 부정 리뷰 섹션 */}
                <div className="p-2 border-2 border-red-500 rounded-md bg-red-50">
                  <div className="flex">
                    <img
                      src="/images/dislike.png"
                      alt="싫어요"
                      className="w-[35px] h-[35px]"
                    />
                    <h3 className="ml-3 text-2xl font-bold text-red-700">
                      부정 리뷰:
                    </h3>
                  </div>
                  <p className="mt-1 font-bold">
                    {negativeSentences &&
                    Object.entries(negativeSentences).length > 0
                      ? `${Object.entries(negativeSentences)[0][0]}: ${
                          Object.entries(negativeSentences)[0][1]
                        }`
                      : "리뷰가 없습니다."}
                  </p>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 상세 정보에 긍정/부정 리뷰 전체 표시 */}
      {selectedRestaurant && fetchedData[selectedRestaurant.id] && (
        <div className="p-4 mb-4 bg-gray-100 border-2 border-gray-300 rounded-md">
          <h3 className="text-xl font-bold">긍정 리뷰 전체:</h3>
          {Object.entries(
            fetchedData[selectedRestaurant.id]?.representativeSentenceMap
              ?.positiveSentences || {}
          ).length > 0 ? (
            <ul>
              {Object.entries(
                fetchedData[selectedRestaurant.id]?.representativeSentenceMap
                  ?.positiveSentences
              ).map(([category, sentence], index) => (
                <li key={index} className="mb-1">
                  <strong>{category}:</strong> {sentence}
                </li>
              ))}
            </ul>
          ) : (
            <p>긍정 리뷰가 없습니다.</p>
          )}

          <h3 className="mt-4 text-xl font-bold">부정 리뷰 전체:</h3>
          {Object.entries(
            fetchedData[selectedRestaurant.id]?.representativeSentenceMap
              ?.negativeSentences || {}
          ).length > 0 ? (
            <ul>
              {Object.entries(
                fetchedData[selectedRestaurant.id]?.representativeSentenceMap
                  ?.negativeSentences
              ).map(([category, sentence], index) => (
                <li key={index} className="mb-1">
                  <strong>{category}:</strong> {sentence}
                </li>
              ))}
            </ul>
          ) : (
            <p>부정 리뷰가 없습니다.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LeftSide;
