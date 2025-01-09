import React, { useState } from "react";
import "./MyPageWrite.css";

export default function MyPageWrite({ boards, setBoards }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentBoardIndex, setCurrentBoardIndex] = useState(null);
  const [editedBoard, setEditedBoard] = useState({
    title: "",
    category: "",
    author: "",
  });

  const handleDeleteClick = (index) => {
    setCurrentBoardIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (index) => {
    setCurrentBoardIndex(index);
    setEditedBoard(boards[index]);
    setIsEditModalOpen(true);
  };

  const confirmDelete = () => {
    setBoards((prevBoards) =>
      prevBoards.filter((_, index) => index !== currentBoardIndex)
    );
    setIsDeleteModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const saveEdit = () => {
    const updatedBoards = [...boards];
    updatedBoards[currentBoardIndex] = editedBoard;
    setBoards(updatedBoards);
    setIsEditModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBoard((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="write-container font-yeonsung">
      {boards.length === 0 ? (
        <div className="empty-message">
          작성한 게시물이 없습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="write-list">
          {boards.map((board, index) => (
            <div className="write-item font-yeonsung" key={index}>
              <div className="write-info">
                <h2 className="write-post-title font-yeonsung">{board.title}</h2>
                <p className="write-post-category font-yeonsung">
                  {board.category}
                </p>
                <p className="write-post-author font-yeonsung">
                  작성자: {board.author}
                </p>
              </div>
              <div className="write-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(index)}
                >
                  수정
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteClick(index)}
                >
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
              value={editedBoard.title}
              onChange={handleInputChange}
              placeholder="제목"
              className="modal-input"
            />
            <input
              type="text"
              name="category"
              value={editedBoard.category}
              onChange={handleInputChange}
              placeholder="카테고리"
              className="modal-input"
            />
            <input
              type="text"
              name="author"
              value={editedBoard.author}
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
