import React from "react";
import "./MyPageProfile.css";

import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

export default function MyPageProfile() {
  return (
    <div className="profile-container font-yeonsung">
      <div className="profile-content font-yeonsung">
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">닉네임:</span>
          <span className="profile-value font-yeonsung">홍익이</span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">ID(이메일):</span>
          <span className="profile-value font-yeonsung">
            charismayoung1993@gmail.com
          </span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">
            내가 작성한 게시물:
          </span>
          <span className="profile-value font-yeonsung">3 게시물</span>
        </div>
        <div className="profile-row font-yeonsung">
          <span className="profile-label font-yeonsung">내가 찜한 리스트:</span>
          <span className="profile-value font-yeonsung">8곳</span>
        </div>
        <div className="profile-buttons font-yeonsung">
          <button className="edit-button font-yeonsung">
            <GoPencil />
            수정하기
          </button>
          <button className="logout-button font-yeonsung">
            <IoExitOutline />
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}
