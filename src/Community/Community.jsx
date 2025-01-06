import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Community.css";
import Common from "../components/Common";
import { PiPencilLineDuotone } from "react-icons/pi";

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
      alert("제목과 내용을 입력해주세요.");
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
    <div className="community-container font-yeonsung">
      <Common />
      <header className="community-header">
        <img
          src="/images/캠슐랭로고.png"
          alt="캠슐랭 로고"
          className="community-logo"
        />
        <h1 className="community-title">커뮤니티</h1>
      </header>
      <p className="community-subtitle">다양한 의견을 공유해보세요~</p>
      <div className="community-list">
        {posts.map((post, index) => (
          <div className="community-item" key={index}>
            <div className="community-info">
              <h2 className="community-post-title">{post.title}</h2>
              <p className="community-post-category">{post.category}</p>
              <p className="community-post-author">작성자: {post.author}</p>
            </div>
          </div>
        ))}
        <div className="community-pagination">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
      <button className="floating-button" onClick={openModal}>
        <PiPencilLineDuotone />
      </button>

      {isModalOpen && (
        <div className="community-modal-overlay">
          <div className="community-modal">
            <h2>게시물 작성</h2>
            <br />
            <label>카테고리</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="community-modal-select"
            >
              <option value="자유게시판">자유게시판</option>
              <option value="리뷰게시판">리뷰게시판</option>
            </select>
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="제목을 입력하세요"
              className="community-modal-input"
            />
            <label>글 내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="내용을 입력하세요"
              className="community-modal-textarea"
            />
            <label>사진 등록</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="community-modal-input"
            />
            <div className="community-modal-buttons">
              <button
                onClick={handleSubmit}
                className="community-confirm-button"
              >
                게시물 등록하기
              </button>
              <button onClick={closeModal} className="community-cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
