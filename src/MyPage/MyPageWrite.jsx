import React, { useState } from "react";
import "./MyPageWrite.css";

export default function MyPageWrite() {
  const [posts, setPosts] = useState([
    {
      title: "현이네 고기국수",
      category: "리뷰게시판",
      author: "인생은 고기서 고기",
    },
    {
      title: "주식 ...",
      category: "자유게시판",
      author: "인생은 한방",
    },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // 삭제 모달 상태
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태
  const [currentPostIndex, setCurrentPostIndex] = useState(null); // 선택된 항목 인덱스
  const [editedPost, setEditedPost] = useState({ title: "", category: "", author: "" }); // 수정된 내용

  // 삭제 모달 열기
  const handleDeleteClick = (index) => {
    setCurrentPostIndex(index);
    setIsDeleteModalOpen(true);
  };

  // 수정 모달 열기
  const handleEditClick = (index) => {
    setCurrentPostIndex(index);
    setEditedPost(posts[index]); // 기존 내용 가져오기
    setIsEditModalOpen(true);
  };

  // 삭제 확인
  const confirmDelete = () => {
    setPosts((prevPosts) => prevPosts.filter((_, index) => index !== currentPostIndex));
    setIsDeleteModalOpen(false);
    setCurrentPostIndex(null);
  };

  // 삭제 취소
  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCurrentPostIndex(null);
  };

  // 수정 저장
  const saveEdit = () => {
    const updatedPosts = [...posts];
    updatedPosts[currentPostIndex] = editedPost;
    setPosts(updatedPosts);
    setIsEditModalOpen(false);
    setCurrentPostIndex(null);
  };

  // 수정 취소
  const cancelEdit = () => {
    setIsEditModalOpen(false);
    setCurrentPostIndex(null);
  };

  // 수정된 내용 관리
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

      {/* 삭제 모달 */}
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

      {/* 수정 모달 */}
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
