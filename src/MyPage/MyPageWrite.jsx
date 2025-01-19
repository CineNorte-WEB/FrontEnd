import React, { useState } from "react";
import "./MyPageWrite.css";
import apiClient from "../api/axios";

export default function MyPageWrite({ boards, totalPages, currentPage, onPageChange }) {
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
    const postToDelete = boards[currentBoardIndex];

    if (!postToDelete) {
      console.error("삭제할 게시물이 없습니다.");
      return;
    }

    const { id, type } = postToDelete;

    try {
      if (type === "review") {
        await apiClient.delete(`/review_posts/${id}`);
        console.log(`리뷰 게시물(ID: ${id})이 성공적으로 삭제되었습니다.`);
      } else if (type === "board") {
        await apiClient.delete(`/board_posts/${id}`);
        console.log(`일반 게시물(ID: ${id})이 성공적으로 삭제되었습니다.`);
      } else {
        console.error("알 수 없는 게시물 타입입니다.");
        return;
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
        const response = await apiClient.put(`/users/bookmarks/${placeId}`, {
          title: editedBoard.title,
          category: editedBoard.category,
          author: editedBoard.author,
        });

        console.log("게시물 수정 성공:", response.data);

        const updatedBoards = [...boards];
        updatedBoards[currentBoardIndex] = response.data;
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
                  작성일자: {board.createdAt}
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
      <div className="pagination">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => onPageChange(index)}
      className={`pagination-button ${
        index === currentPage ? "active" : ""
      }`}
    >
      {index + 1}
    </button>
  ))}
</div>

    </div>
  );
}
