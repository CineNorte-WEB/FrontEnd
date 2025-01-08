import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Common from "../components/Common";
import { PiPencilLineDuotone } from "react-icons/pi";
import Brand from "../components/Brand";

const Community = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      title: "주식 ...",
      category: "자유게시판",
      author: "인생은 한방",
    },
    {
      title: "현이네 고기국수",
      category: "리뷰게시판",
      author: "인생은 고기서 고기",
    },
    {
      title: "종강까지 한달!!!",
      category: "자유게시판",
      author: "휴학하고파",
    },
    {
      title: "진스시",
      category: "리뷰게시판",
      author: "가는곳마다스시",
    },
  ]);

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
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (formData.title.trim() === "" || formData.content.trim() === "") {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    const newPost = {
      title: formData.title,
      category: formData.category,
      author: "홍익이",
    };

    setPosts([newPost, ...posts]);
    setFormData({
      category: "자유게시판",
      title: "",
      content: "",
      image: null,
    });
    closeModal();
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
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 m-4 text-gray-800 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="flex-1">
              <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.category}</p>
              <p className="text-sm text-gray-500">작성자: {post.author}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center m-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className="mx-2 text-base font-bold text-gray-500 transition-colors duration-300 cursor-pointer hover:text-red-500"
            >
              {num}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={openModal}
        className="fixed bottom-8 right-8 bg-gray-100 text-black rounded-lg w-[60px] h-[60px] text-2xl flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 hover:bg-white"
      >
        <PiPencilLineDuotone />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="text-2xl bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-[700px] max-h-[90%]  space-y-2 font-['Song Myung']">
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
                className="w-full my-2 px-2 pt-2 pb-2 border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              />
            </div>
            <div>
              <label className="font-bold">📑글 내용</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="내용을 입력하세요."
                className="w-full my-2 px-4 pt-4 pb-12 border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              />
            </div>
            <div>
              <label className="font-bold">📸사진 등록</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full my-2 p-2 font-bold border-2 border-gray-500 rounded-lg text-base font-['Song Myung']"
              />
            </div>
            <div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded-lg cursor-pointer font-bold text-3xl hover:bg-green-700 font-['Song Myung']"
                >
                  게시물 등록하기
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-500 shadow-lg text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 font-bold font-['Song Myung']"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
