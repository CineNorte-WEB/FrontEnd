import React, { useState } from "react";
import "./MyPageWrite.css";
import apiClient from "../api/axios";

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

  const confirmDelete = async () => {
    const boardToDelete = boards[currentBoardIndex];
    const placeId = boardToDelete?.id; // 삭제할 게시물의 ID (placeId 사용)

    try {
      if (placeId) {
        // API 호출
        await apiClient.delete(`/users/bookmarks/${placeId}`);
        console.log(`게시물(ID: ${placeId})이 성공적으로 삭제되었습니다.`);

        // 로컬 상태에서 삭제
        setBoards((prevBoards) =>
          prevBoards.filter((_, index) => index !== currentBoardIndex)
        );
      } else {
        console.error("삭제할 게시물의 ID가 없습니다.");
      }
    } catch (error) {
      console.error("게시물 삭제 중 오류 발생:", error);
      alert("게시물 삭제에 실패했습니다. 다시 시도해주세요.");
    }

    setIsDeleteModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCurrentBoardIndex(null);
  };

  const saveEdit = async () => {
    const boardToEdit = boards[currentBoardIndex];
    const placeId = boardToEdit?.id;
  
    try {
      if (placeId) {
        // API 호출
        const response = await apiClient.put(`/users/bookmarks/${placeId}`, {
          title: editedBoard.title,
          category: editedBoard.category,
          author: editedBoard.author,
        });
  
        console.log("게시물 수정 성공:", response.data);
  
        // 로컬 상태 업데이트
        const updatedBoards = [...boards];
        updatedBoards[currentBoardIndex] = response.data; // 서버 응답 데이터로 업데이트
        setBoards(updatedBoards);
      } else {
        console.error("수정할 게시물의 ID가 없습니다.");
      }
    } catch (error) {
      console.error("게시물 수정 중 오류 발생:", error);
      alert("게시물 수정에 실패했습니다. 다시 시도해주세요.");
    }
  
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
