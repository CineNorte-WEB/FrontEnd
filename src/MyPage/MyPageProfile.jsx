import React, { useState } from "react";
import "./MyPageProfile.css";
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

export default function MyPageProfile({ items, posts }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    nickname: "홍익이",
    email: "muyaho1234@gmail.com",
  });
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleEditClick = () => {
    setEditedProfile(profile);
    setIsEditModalOpen(true);
  };

  const saveEdit = () => {
    setProfile(editedProfile);
    setIsEditModalOpen(false);
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("탈퇴가 완료되었습니다.");
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container font-['Song Myung']">
      <div className="profile-content font-['Song Myung']">
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">닉네임:</span>
          <span className="profile-value font-['Song Myung']">
            {profile.nickname}
          </span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">ID(이메일):</span>
          <span className="profile-value font-['Song Myung']">
            {profile.email}
          </span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">내가 쓴 글:</span>
          <span className="profile-value font-['Song Myung']">
            {posts.length}개
          </span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">
            내가 찜한 리스트:
          </span>
          <span className="profile-value font-['Song Myung']">
            {items.length}곳
          </span>
        </div>
        <div className="profile-buttons font-['Song Myung']">
          <button
            className="edit-button font-['Song Myung']"
            onClick={handleEditClick}
          >
            <GoPencil />
            수정하기
          </button>
          <button
            className="logout-button font-['Song Myung']"
            onClick={handleDeleteClick}
          >
            <IoExitOutline />
            탈퇴하기
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <h2>프로필 수정</h2>
            <div className="modal-input-group">
              <label>닉네임</label>
              <input
                type="text"
                name="nickname"
                value={editedProfile.nickname}
                onChange={handleInputChange}
                className="modal-input font-['Song Myung']"
              />
            </div>
            <div className="modal-input-group">
              <label>ID(이메일)</label>
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleInputChange}
                className="modal-input font-['Song Myung']"
              />
            </div>
            <div className="modal-buttons">
              <button
                onClick={saveEdit}
                className="confirm-button font-['Song Myung']"
              >
                저장
              </button>
              <button
                onClick={cancelEdit}
                className="cancel-button font-['Song Myung']"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <h2>ㄹㅇ 탈퇴?</h2>
            <div className="modal-buttons">
              <button
                onClick={confirmDelete}
                className="confirm-button font-['Song Myung']"
              >
                탈퇴
              </button>
              <button
                onClick={cancelDelete}
                className="cancel-button font-['Song Myung']"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
