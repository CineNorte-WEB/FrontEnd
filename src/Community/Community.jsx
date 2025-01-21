import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Common from "../components/Common";
import { PiPencilLineDuotone } from "react-icons/pi";
import Brand from "../components/Brand";
import apiClient from "../api/axios";
import './Community.css';

const Community = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("자유게시판");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [communityTotalPages, setCommunityTotalPages] = useState(1); // 변수명 변경
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false); // 글 작성 모달 상태 추가
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(5); // 한 페이지에 표시할 게시글 수
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [formData, setFormData] = useState({
    category: "자유게시판",
    title: "",
    content: "",
    image: null, // 추가된 속성
    place: { id: null, name: "" }, // 장소 데이터 추가
  });


  // UTC 시간 -> KST 시간 변환 함수
  const formatCreatedAt = (createdAt) => {
    const utcDate = new Date(createdAt); // UTC 시간
    const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // 9시간 추가
    return kstDate.toLocaleString("ko-KR", { // 한국 시간 형식으로 변환
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  // 게시판 데이터 가져오기
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const endpoint =
        selectedCategory === "리뷰게시판"
          ? "/review_posts"
          : "/board_posts";
      const response = await apiClient.get(endpoint, {
        params: { page: currentPage, size: pageSize }, // API에서 page와 size를 사용
      });
      setPosts(response.data.content); // 게시글 데이터 설정
      setCommunityTotalPages(response.data.totalPages); // 전체 페이지 수 설정
      const formattedData = response.data.content.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.userNickname,
        createdAt: post.createdAt,
        category: selectedCategory,

      }));

      setPosts(formattedData);
      setCommunityTotalPages(response.data.totalPages); // communityTotalPages로 변경
    } catch (error) {
      console.error(`${selectedCategory} 데이터를 가져오는 중 오류 발생:`, error);
    }
    setLoading(false);
  };

  // 카테고리 변경 시 API 호출
  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, currentPage]); // currentPage 추가

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // 카테고리 변경 시 페이지 초기화
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedPost(null);
    setIsDetailModalOpen(false);
  };
  const handleOpenWriteModal = () => {
    setIsWriteModalOpen(true);
  };

  const handleCloseWriteModal = () => {
    setFormData({
      category: "자유게시판",
      title: "",
      content: "",
    });
    setIsWriteModalOpen(false);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearchPlace = async () => {
    if (!formData.title.trim()) {
      alert("가게명을 입력해주세요.");
      return;
    }

    try {
      const encodedQuery = encodeURIComponent(formData.title.trim());
      const response = await apiClient.get(`/places/search?name=${encodedQuery}`);
      console.log("검색 결과:", response.data.content);
      setSearchResults(response.data.content); // 검색 결과 저장
      setIsPlaceModalOpen(true); // 검색 결과 모달 열기
    } catch (error) {
      console.error("가게명 검색 중 오류 발생:", error);
      alert("가게명을 검색하는 데 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleSelectPlace = (place) => {
    setFormData((prev) => ({
      ...prev,
      title: place.name, // 제목에 선택한 가게명 설정
      place: { id: place.id, name: place.name }, // place 정보 업데이트
    }));
    setIsPlaceModalOpen(false); // 모달 닫기
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPost = async () => {
    if (formData.category === "리뷰게시판" && !formData.place.id) {
      alert("리뷰 게시판의 경우 가게를 선택해야 합니다.");
      return;
    }
    try {
      const endpoint =
        formData.category === "리뷰게시판" ? "/review_posts/write" : "/board_posts/write";

      const payload = {
        title: formData.title,
        content: formData.content,
        place: formData.category === "리뷰게시판" ? formData.place : undefined, // 리뷰게시판이면 place 포함
      };

      if (formData.image) {
        payload.image = formData.image; // 이미지 추가
      }

      await apiClient.post(endpoint, payload);

      alert("게시글이 성공적으로 등록되었습니다.");
      handleCloseWriteModal();
      fetchPosts();
    } catch (error) {
      console.error("게시글 작성 중 오류 발생:", error);
      alert("게시글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < communityTotalPages) {
      setCurrentPage(pageNumber); // 페이지 변경
    }
  };

  <div className="community-pagination">
    {Array.from({ length: communityTotalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index)}
        className={`pagination-button ${index === currentPage ? "active" : ""}`}
      >
        {index + 1}
      </button>
    ))}
  </div>

  // useEffect 수정
  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, currentPage]); // currentPage 추가


  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-rose-800 w-full relative font-['Song Myung']">
      <Common />
      <header className="relative flex items-center justify-between w-full px-8 pt-4">
        <Brand className="w-[200px] aspect-[2] absolute top-1/2 left-8 -translate-y-1/2 cursor-pointer border-b-[3px] border-white pb-[0.2rem]" />
        <h1 className="absolute m-0 font-bold text-center text-white -translate-x-1/2 text-7xl left-1/2">
          커뮤니티
        </h1>
      </header>
      <p className="my-1 text-2xl font-semibold text-center text-white">
        맛집부터 일상까지, 자유롭게 소통해요!
      </p>
      <div className="w-[70%] min-h-[60vh] mx-auto my-4 bg-white rounded-2xl shadow-lg overflow-hidden p-4">
        <div className="flex justify-around border-b-2 border-gray-300">
          <button
            className={`flex-1 text-center text-[2rem] font-semibold py-3 transition-colors duration-300 ${selectedCategory === "자유게시판"
              ? "text-[#c02231] border-b-4 border-[#c02231]"
              : "text-gray-500 hover:text-[#c02231] border-b-4 border-transparent"
              }`}
            onClick={() => handleTabClick("자유게시판")}
          >
            자유게시판
          </button>
          <button
            className={`flex-1 text-center text-[2rem] font-semibold py-3 transition-colors duration-300 ${selectedCategory === "리뷰게시판"
              ? "text-[#c02231] border-b-4 border-[#c02231]"
              : "text-gray-500 hover:text-[#c02231] border-b-4 border-transparent"
              }`}
            onClick={() => handleTabClick("리뷰게시판")}
          >
            리뷰게시판
          </button>
        </div>

        {loading ? (
          <p>데이터를 불러오는 중입니다...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="flex items-center justify-between p-4 m-4 text-gray-800 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="mb-4 text-2xl font-bold font-['Song Myung']">{post.title}</h2>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 font-['Song Myung']">
                    <span className="text-gray-800 font-bold">미리보기:</span>
                    {post.content.length > 100
                      ? `${post.content.slice(0, 100)}...`
                      : post.content}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-semibold font-['Song Myung']">
                      <span className="text-gray-800">작성자:</span> {post.author}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold font-['Song Myung']">
                      <span className="text-gray-800">작성일:</span> {formatCreatedAt(post.createdAt)}
                    </p>
                  </div>
                  <div>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="게시글 이미지"
                        className="object-cover mr-16 rounded-sm shadow-md h-36 w-36"
                      />
                    )}
                  </div>
                </div>
              </div>


            </div>
          ))
        ) : (
          <p>게시물이 없습니다.</p>
        )}
        {/* 페이지네이션 */}
        <div className="community-pagination">
          {Array.from({ length: communityTotalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`pagination-button ${index === currentPage ? "active" : ""
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>


      </div>

      <button
        onClick={handleOpenWriteModal}
        className="fixed bottom-8 right-8 bg-gray-100 text-black rounded-lg w-[60px] h-[60px] text-2xl flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 hover:bg-white"
      >
        <PiPencilLineDuotone />
      </button>
      {isWriteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-[700px] font-['Song Myung']">
            <h2 className="text-3xl font-bold text-center mb-4">게시글 작성</h2>

            {/* 카테고리 선택 */}
            <div>
              <label className="block font-bold mb-1">카테고리</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg"
              >
                <option value="자유게시판">자유게시판</option>
                <option value="리뷰게시판">리뷰게시판</option>
              </select>
            </div>

            {/* 제목 입력 */}
            <div>
              <label className="block font-bold mb-1">
                {formData.category === "리뷰게시판" ? "가게명" : "제목"}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder={
                    formData.category === "리뷰게시판"
                      ? "가게명을 입력하세요"
                      : "제목을 입력하세요"
                  }
                  className="flex-1 p-2 border-2 border-gray-300 rounded-lg"
                />
                {formData.category === "리뷰게시판" && (
                  <button
                    onClick={handleSearchPlace}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    확인
                  </button>
                )}
              </div>
            </div>

            {/* 내용 입력 */}
            <div>
              <label className="block font-bold mb-1">내용</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="내용을 입력하세요"
                className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>

            {/* 리뷰게시판일 경우 사진 첨부 */}
            {formData.category === "리뷰게시판" && (
              <div>
                <label className="block font-bold mb-1">사진 첨부</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg"
                />
                {formData.image && (
                  <div className="mb-4">
                    <p className="font-bold mb-2">미리보기:</p>
                    <img
                      src={formData.image}
                      alt="미리보기"
                      className="w-48 h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            )}

            {/* 작성 및 취소 버튼 */}
            <div className="flex justify-end">
              <button
                onClick={async () => {
                  if (!formData.title.trim() || !formData.content.trim()) {
                    alert("제목과 내용을 모두 입력해주세요.");
                    return;
                  }
                  await handleSubmitPost();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
              >
                작성
              </button>
              <button
                onClick={handleCloseWriteModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {isDetailModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div
  className="bg-white rounded-2xl shadow-lg w-[80%] max-w-[700px] max-h-[95%] font-['Song Myung'] overflow-hidden"
>
  <div className="p-8">
    <div className="overflow-y-auto max-h-[80vh] -mx-8 px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          📑제목 : {selectedPost.title}
        </h2>
      </div>
      <div className="flex items-center justify-between mb-4 text-gray-600">
        <div className="flex flex-col space-y-5 font-semibold">
          <span className="mr-4">👤작성자: {selectedPost.author}</span>
          <span>🏷️카테고리: {selectedPost.category}</span>
        </div>
        <span className="flex font-semibold">
          <p className="mr-3"> ⏱️작성 일자 :</p>
          {new Date(selectedPost.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="py-6 my-4 border-t border-b">
        <p className="mb-3 text-2xl font-semibold">📜글 내용</p>
        <p className="text-lg text-gray-800 whitespace-pre-wrap">
          {selectedPost.content}
        </p>
        <hr className="my-3" />
        <p className="my-2 text-2xl font-semibold">🗃️이미지</p>
        {selectedPost.image && (
          <div>
            <img
              src={selectedPost.image}
              alt="게시글 이미지"
              className="h-auto max-w-full rounded-lg shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
    <div className="flex justify-end mt-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleCloseDetailModal();
        }}
        className="px-4 py-2 text-white transition-colors duration-200 bg-gray-500 rounded-lg hover:bg-gray-600"
      >
        닫기
      </button>
    </div>
  </div>
</div>

        </div>
      )}


      {isPlaceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[80%] max-w-[500px]">
            <h2 className="text-2xl font-bold text-center mb-4">검색 결과</h2>
            {searchResults.length > 0 ? (
              <ul className="space-y-2">
                {searchResults.map((place) => (
                  <li
                    key={place.id}
                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectPlace(place)}
                  >
                    {place.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsPlaceModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
