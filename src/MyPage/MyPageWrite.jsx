import React from "react";
import "./MyPageWrite.css";
import { useState } from "react";

export default function MyPageWrite({ posts, setPosts }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: "", category: "", author: "" });

  const handleDeleteClick = (index) => {
    setCurrentPostIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (index) => {
    setCurrentPostIndex(index);
    setEditedPost(posts[index]);
    setIsEditModalOpen(true);
  };

  const confirmDelete = () => {
    setPosts((prevPosts) => prevPosts.filter((_, index) => index !== currentPostIndex));
    setIsDeleteModalOpen(false);
    setCurrentPostIndex(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCurrentPostIndex(null);
  };

  const saveEdit = () => {
    const updatedPosts = [...posts];
    updatedPosts[currentPostIndex] = editedPost;
    setPosts(updatedPosts);
    setIsEditModalOpen(false);
    setCurrentPostIndex(null);
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false);
    setCurrentPostIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="write-container font-yeonsung">
      {posts.length === 0 ? (
        <div className="empty-message">
          작성한 게시물이 없습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="write-list">
          {posts.map((post, index) => (
            <div className="write-item font-yeonsung" key={index}>
              <div className="write-info">
                <h2 className="write-post-title font-yeonsung">{post.title}</h2>
                <p className="write-post-category font-yeonsung">{post.category}</p>
                <p className="write-post-author font-yeonsung">작성자: {post.author}</p>
              </div>
              <div className="write-actions">
                <button className="edit-button" onClick={() => handleEditClick(index)}>
                  수정
                </button>
                <button className="delete-button" onClick={() => handleDeleteClick(index)}>
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>정말 삭제하시겠습니까?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button">
                확인
              </button>
              <button onClick={cancelDelete} className="cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>게시글 수정</p>
            <input
              type="text"
              name="title"
              value={editedPost.title}
              onChange={handleInputChange}
              placeholder="제목"
              className="modal-input"
            />
            <input
              type="text"
              name="category"
              value={editedPost.category}
              onChange={handleInputChange}
              placeholder="카테고리"
              className="modal-input"
            />
            <input
              type="text"
              name="author"
              value={editedPost.author}
              onChange={handleInputChange}
              placeholder="작성자"
              className="modal-input"
            />
            <div className="modal-buttons">
              <button onClick={saveEdit} className="confirm-button">
                저장
              </button>
              <button onClick={cancelEdit} className="cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}