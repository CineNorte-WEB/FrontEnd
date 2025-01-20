import React, { useState } from "react";
import "./MyPageProfile.css";
import apiClient from "../api/axios";
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

export default function MyPageProfile({
  profile,
  setProfile, // 부모에서 전달받은 상태 업데이트 함수
  bookmarks = [],
  posts = [],
  totalPosts = 0, // totalElements를 props로 받음
}) {
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditedProfile(profile);
    setIsEditModalOpen(true);
  };

  const saveEdit = async () => {
    try {
      // API 호출
      const response = await apiClient.put("/users/update", {
        id: profile.id,
        email: editedProfile.email,
        nickname: editedProfile.nickname,
      });
      console.log("프로필 수정 완료:", response.data);
  
      // 프로필 상태 업데이트
      setEditedProfile(response.data);
  
      // 로그아웃 처리
      alert("프로필 수정이 완료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("email");
      localStorage.removeItem("nickname");
      window.location.href = "/"; // 로그인 페이지로 리다이렉트
    } catch (error) {
      console.error("프로필 수정 중 오류 발생:", error);
      alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };
  

  const cancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      // 탈퇴 API 호출
      await apiClient.delete("/users/delete");
      console.log("탈퇴가 성공적으로 완료되었습니다.");

      // 로컬스토리지 정리 및 로그아웃
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("email");
      localStorage.removeItem("nickname");

      // 로그인 페이지로 리다이렉트
      window.location.href = "/";
    } catch (error) {
      console.error("탈퇴 중 오류 발생:", error);
      alert("탈퇴에 실패했습니다. 다시 시도해주세요.");
    }

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
          <span className="profile-value font-['Song Myung']">{profile.nickname}</span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">ID(이메일):</span>
          <span className="profile-value font-['Song Myung']">{profile.email}</span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">내가 쓴 글:</span>
          <span className="profile-value font-['Song Myung']">
          {totalPosts}개
          </span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">내가 찜한 리스트:</span>
          <span className="profile-value font-['Song Myung']">
            {Array.isArray(bookmarks) ? bookmarks.length : 0}곳
          </span>
        </div>
        <div className="profile-buttons font-['Song Myung']">
          <button className="edit-button font-['Song Myung']" onClick={handleEditClick}>
            <GoPencil />
            수정하기
          </button>
          <button className="logout-button font-['Song Myung']" onClick={handleDeleteClick}>
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
              <button onClick={saveEdit} className="confirm-button font-['Song Myung']">
                저장
              </button>
              <button onClick={cancelEdit} className="cancel-button font-['Song Myung']">
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <h2>정말로 탈퇴하시겠습니까?</h2>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button font-['Song Myung']">
                탈퇴
              </button>
              <button onClick={cancelDelete} className="cancel-button font-['Song Myung']">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}