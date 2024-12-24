import React from "react";
import "./MyPageProfile.css"; 
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";


export default function MyPageProfile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">마이 페이지</h1>
      <div className="profile-content">
        <div className="profile-row">
          <span className="profile-label">닉네임:</span>
          <span className="profile-value">홍익이</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">ID(이메일):</span>
          <span className="profile-value">charismayoung1993@gmail.com</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">내가 작성한 게시물:</span>
          <span className="profile-value">3 게시물</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">내가 찜한 리스트:</span>
          <span className="profile-value">8곳</span>
        </div>
        <div className="profile-buttons">
          <button className="edit-button"><GoPencil />
          수정하기</button>
          <button className="logout-button"><IoExitOutline />
            탈퇴하기</button>
        </div>
      </div>
    </div>
  );
}
