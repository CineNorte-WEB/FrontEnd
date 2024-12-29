import React, { useState } from "react";
import "./MyPage.css";
import MyPageProfile from "./MyPageProfile";
import MyPageList from "./MyPageList";
import MyPageWrite from "./MyPageWrite";
import Common from "../components/Common";

const MyPage = () => {
  const [currentComponent, setCurrentComponent] = useState("profile");

  const handleMenuClick = (menu) => {
    setCurrentComponent(menu);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "profile":
        return <MyPageProfile />;
      case "mylist":
        return <MyPageList />;
      case "write":
        return <MyPageWrite />;
      default:
        return <MyPageProfile />;
    }
  };

  return (
    <div className="mypage font-yeonsung">
      <Common />
      <header className="mypage-header">
      <img
        src="/images/캠슐랭로고.png"
        alt="캠슐랭 로고"
        className="mypage-logo"
      />
        <h1 className="mypage-title">마이 페이지</h1>
      </header>
      <p className="community-subtitle">check your profile~</p>
      <div className="container">
        <div className="mypage-menubar font-yeonsung">
          <div
            className={`menu font-yeonsung ${currentComponent === "profile" ? "active" : ""}`}
            onClick={() => handleMenuClick("profile")}
          >
            회원정보
          </div>
          <div
            className={`menu font-yeonsung ${currentComponent === "write" ? "active" : ""}`}
            onClick={() => handleMenuClick("write")}
          >
            내가 쓴 글
          </div>
          <div
            className={`menu font-yeonsung ${currentComponent === "mylist" ? "active" : ""}`}
            onClick={() => handleMenuClick("mylist")}
          >
            찜한 리스트
          </div>
        </div>
        <div className="menu-content font-yeonsung">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default MyPage;
