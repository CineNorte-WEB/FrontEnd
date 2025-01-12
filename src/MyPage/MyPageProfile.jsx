import React, { useState, useEffect } from "react";
import apiClient from "../api/axios"; // Axios 설정 확인
import "./MyPageProfile.css";
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

export default function MyPageProfile({ bookmarks = [], boards = [] }) {
  const [profile, setProfile] = useState({
    nickname: "",
    email: "",
  });
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // API에서 사용자 데이터 가져오기
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.get("/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        setEditedProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("프로필 데이터를 가져오는 중 오류가 발생했습니다:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setEditedProfile(profile); // 현재 프로필 데이터를 수정 데이터로 설정
    setIsEditModalOpen(true); // 수정 모달 열기
  };

  const saveEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await apiClient.put(
        "/users/profile",
        {
          email: editedProfile.email,
          nickname: editedProfile.nickname,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("프로필 수정 완료:", response.data);

      // 상태 업데이트
      setProfile(response.data);
      setIsEditModalOpen(false); // 수정 모달 닫기
    } catch (error) {
      console.error("프로필 수정 중 오류 발생:", error);
      alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false); // 수정 모달 닫기
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true); // 탈퇴 모달 열기
  };

  const confirmDelete = () => {
    console.log("탈퇴가 완료되었습니다.");
    // localStorage에서 사용자 데이터 제거
    localStorage.removeItem("token");
    setProfile({ email: "이메일 없음", nickname: "닉네임 없음" }); // 상태 초기화
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false); // 탈퇴 모달 닫기
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value })); // 수정된 프로필 업데이트
  };

  if (loading) {
    return <div className="loading">데이터를 불러오는 중...</div>;
  }

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
            {Array.isArray(boards) ? boards.length : 0}개
          </span>
        </div>
        <div className="profile-row font-['Song Myung']">
          <span className="profile-label font-['Song Myung']">
            내가 찜한 리스트:
          </span>
          <span className="profile-value font-['Song Myung']">
            {Array.isArray(bookmarks) ? bookmarks.length : 0}곳
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

      {/* 프로필 수정 모달 */}
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

      {/* 탈퇴 확인 모달 */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <h2>정말로 탈퇴하시겠습니까?</h2>
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
