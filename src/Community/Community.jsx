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
  const POSTS_PER_PAGE = 5;
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false); // 글 작성 모달 상태 추가
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "자유게시판",
    title: "",
    content: "",
    image: null, // 추가된 속성
  }); // 글 작성 폼 데이터

  // 게시판 데이터 가져오기
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response =
      selectedCategory  === "리뷰게시판"
          ? await apiClient.get("/review_posts")
          : await apiClient.get("/board_posts");
      const formattedData = response.data.content.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.userNickname,
        createdAt: post.createdAt,
        category: selectedCategory ,
      }));
      setPosts(formattedData);
    } catch (error) {
      console.error(`${selectedCategory } 데이터를 가져오는 중 오류 발생:`, error);
    }
    setLoading(false);
  };

  // 카테고리 변경 시 API 호출
  useEffect(() => {
    fetchPosts();
  }, [selectedCategory ]);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
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
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPost = async () => {
    try {
      const endpoint =
        formData.category === "리뷰게시판" ? "/review_posts" : "/board_posts";
  
      const payload = {
        title: formData.title,
        content: formData.content,
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
  

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#c02231] w-full relative font-['Song Myung']">
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
        {/* 탭 메뉴 */}
        <div className="flex justify-around border-b border-gray-300">
          <button
            className={`flex-1 text-center text-2xl font-semibold py-4 transition-colors duration-300 ${
              selectedCategory === "자유게시판"
                ? "text-[#c02231] border-b-4 border-[#c02231]"
                : "text-gray-500 hover:text-[#c02231] border-b-4 border-transparent"
            }`}
            onClick={() => handleTabClick("자유게시판")}
          >
            자유게시판
          </button>
          <button
            className={`flex-1 text-center text-2xl font-semibold py-4 transition-colors duration-300 ${
              selectedCategory === "리뷰게시판"
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
        ) : currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="flex items-center justify-between p-4 m-4 text-gray-800 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-5">
                    <p className="text-sm text-gray-500 font-semibold font-['Song Myung']">
                      {post.category}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold font-['Song Myung']">
                      작성자: {post.author}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold font-['Song Myung'] font-semibold">
                      작성일: {post.createdAt}
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
        <div className="community-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
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
            <div>
              <label className="block font-bold mb-1">제목</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={formData.category === "리뷰게시판" ? "가게명을 입력하세요" : "제목을 입력하세요"}
                className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">내용</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
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
            <div className="flex justify-end">
              <button
                onClick={handleSubmitPost}
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
          <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-[700px] max-h-[95%] font-['Song Myung']">
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
            <div className="flex justify-end">
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
      )}
    </div>
  );
};

export default Community;
