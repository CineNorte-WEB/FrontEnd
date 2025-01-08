import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Common from "../components/Common";
import { PiPencilLineDuotone } from "react-icons/pi";
import Brand from "../components/Brand";

const Community = () => {
  const navigate = useNavigate();
  const POSTS_PER_PAGE = 5;
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedPost(null);
    setIsDetailModalOpen(false);
  };

  const initialPosts = [
    {
      id: 1,
      title: "주식 ...",
      category: "자유게시판",
      author: "인생은 한방",
      image: null,
      content: "",
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: 2,
      title: "현이네 고기국수",
      category: "리뷰게시판",
      author: "인생은 고기서 고기",
      image: null,
      content: "",
      createdAt: new Date("2024-01-02").toISOString(),
    },
    {
      id: 3,
      title: "종강까지 한달!!!",
      category: "자유게시판",
      author: "휴학하고파",
      image: null,
      content: "",
      createdAt: new Date("2024-01-03").toISOString(),
    },
    {
      id: 4,
      title: "진스시",
      category: "리뷰게시판",
      author: "가는곳마다스시",
      image: null,
      content: "",
      createdAt: new Date("2024-01-04").toISOString(),
    },
  ];

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("communityPosts");
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(posts));
  }, [posts]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "자유게시판",
    title: "",
    content: "",
    image: null,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (formData.title.trim() === "" || formData.content.trim() === "") {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      author: "홍익이",
      content: formData.content,
      image: formData.image,
      createdAt: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setFormData({
      category: "자유게시판",
      title: "",
      content: "",
      image: null,
    });

    setCurrentPage(1);
    closeModal();
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
      setPosts(posts.filter((post) => post.id !== postId));

      const newTotalPages = Math.ceil((posts.length - 1) / POSTS_PER_PAGE);
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#c02231] w-full relative font-['Song Myung']">
      <Common />
      <header className="relative flex items-center justify-between w-full px-8 pt-4">
        <Brand className="w-[200px] aspect-[2] absolute top-1/2 left-8 -translate-y-1/2 cursor-pointer border-b-[3px] border-white pb-[0.2rem]" />
        <h1 className="absolute m-0 text-5xl font-bold text-center text-white -translate-x-1/2 left-1/2">
          커뮤니티
        </h1>
      </header>
      <p className="mb-2 text-2xl text-center text-white">
        맛집부터 일상까지, 자유롭게 소통해요!
      </p>
      <div className="w-[70%] min-h-[60vh] mx-auto my-4 bg-white rounded-2xl shadow-lg overflow-hidden p-4">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="flex items-center justify-between p-4 m-4 text-gray-800 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePost(post.id);
                  }}
                  className="px-2 py-1 text-sm text-red-500 rounded hover:text-red-700"
                >
                  삭제
                </button>
              </div>
              <p className="text-sm text-gray-500">{post.category}</p>
              <p className="text-sm text-gray-500">작성자: {post.author}</p>
              <p className="text-sm text-gray-500">
                작성일: {new Date(post.createdAt).toLocaleDateString()}
              </p>
              {post.image && (
                <img
                  src={post.image}
                  alt="게시글 이미지"
                  className="mt-2 w-[15px] h-[15px] rounded-lg shadow-sm object-cover"
                />
              )}
            </div>
          </div>
        ))}
        {totalPages > 1 && (
          <div className="flex items-center justify-center m-4">
            {pageNumbers.map((num) => (
              <span
                key={num}
                onClick={() => handlePageChange(num)}
                className={`mx-2 text-base font-bold cursor-pointer transition-colors duration-300 ${
                  currentPage === num
                    ? "text-red-500"
                    : "text-gray-500 hover:text-red-500"
                }`}
              >
                {num}
              </span>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={openModal}
        className="fixed bottom-8 right-8 bg-gray-100 text-black rounded-lg w-[60px] h-[60px] text-2xl flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 hover:bg-white"
      >
        <PiPencilLineDuotone />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="text-2xl bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-[700px] max-h-[100%] font-['Song Myung']">
            <h2 className="text-4xl text-center font-bold font-['Song Myung']">
              게시물 작성
            </h2>
            <div>
              <label className="block font-bold">🏷️카테고리</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full font-bold my-2 p-2 border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              >
                <option className="font-bold" value="자유게시판">
                  자유게시판
                </option>
                <option className="font-bold" value="리뷰게시판">
                  리뷰게시판
                </option>
              </select>
            </div>
            <div>
              <label className="font-bold">📓제목</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="제목을 입력하세요"
                className="w-full my-2 px-4 font-semibold pt-2 pb-2 border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              />
            </div>
            <div>
              <label className="font-bold">📑글 내용</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="내용을 입력하세요."
                className="w-full my-2 px-4 pt-4 pb-12 font-semibold border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              />
            </div>
            <div>
              <label className="mt-2 font-bold">📸사진 등록</label>
              <div className="flex">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-64 my-3.5 p-2 font-bold border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
                  />
                </div>
                <div>
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="미리보기"
                      className="ml-32 w-[150px] h-[150px] object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded-lg cursor-pointer font-semibold text-2xl hover:bg-sky-700 font-['Song Myung']"
                >
                  게시물 등록
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-500 shadow-lg text-white px-4 py-2 text-2xl rounded-lg cursor-pointer hover:bg-red-700 font-semibold font-['Song Myung']"
                >
                  취소
                </button>
              </div>
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
                <div className="mt-4">
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
