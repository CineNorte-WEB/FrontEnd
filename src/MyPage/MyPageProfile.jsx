import React, { useState } from "react";
import "./MyPageProfile.css";
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

export default function MyPageProfile({ items, posts }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // 탈퇴 모달 상태
  const [profile, setProfile] = useState({
    nickname: "홍익이",
    email: "muyaho1234@gmail.com",
  });
  const [editedProfile, setEditedProfile] = useState({ ...profile }); // 수정된 내용

  // 수정 모달 열기
  const handleEditClick = () => {
    setEditedProfile(profile); // 현재 프로필 내용 복사
    setIsEditModalOpen(true);
  };

  // 수정 저장
  const saveEdit = () => {
    setProfile(editedProfile); // 수정된 내용을 저장
    setIsEditModalOpen(false);
  };

  // 수정 취소
  const cancelEdit = () => {
    setIsEditModalOpen(false);
  };

  // 탈퇴 모달 열기
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  // 탈퇴 확인
  const confirmDelete = () => {
    console.log("탈퇴가 완료되었습니다."); // 실제 탈퇴 로직 추가
    setIsDeleteModalOpen(false);
  };

  // 탈퇴 취소
  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  // 수정된 내용 관리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container font-yeonsung">
      <div className="profile-content font-yeonsung">
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">닉네임:</span>
          <span className="profile-value font-yeonsung">{profile.nickname}</span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">ID(이메일):</span>
          <span className="profile-value font-yeonsung">{profile.email}</span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">내가 쓴 글:</span>
          <span className="profile-value font-yeonsung">{posts.length}개</span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">내가 찜한 리스트:</span>
          <span className="profile-value font-yeonsung">{items.length}곳</span>
        </div>
        <div className="profile-buttons font-yeonsung">
          <button className="edit-button font-yeonsung" onClick={handleEditClick}>
            <GoPencil />
            수정하기
          </button>
          <button className="logout-button font-yeonsung" onClick={handleDeleteClick}>
            <IoExitOutline />
            탈퇴하기
          </button>
        </div>
      </div>

      {/* 수정 모달 */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>프로필 수정</h2>
            <div className="modal-input-group">
              <label>닉네임</label>
              <input
                type="text"
                name="nickname"
                value={editedProfile.nickname}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
            <div className="modal-input-group">
              <label>ID(이메일)</label>
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
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

      {/* 탈퇴 모달 */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>ㄹㅇ 탈퇴?</h2>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button">
                탈퇴
              </button>
              <button onClick={cancelDelete} className="cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
