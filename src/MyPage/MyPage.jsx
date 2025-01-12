import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";
import MyPageProfile from "./MyPageProfile";
import MyPageList from "./MyPageList";
import MyPageWrite from "./MyPageWrite";
import Common from "../components/Common";
import Brand from "../components/Brand";
import apiClient from "../api/axios";
import axios from "axios";

const MyPage = () => {
  const [currentComponent, setCurrentComponent] = useState("profile");
  const [bookmarks, setBookmarks] = useState([
    {
      title: "현이네 고기 국수",
      menu: "한식",
      summary:
        "웨이팅이 많은 집! 조금 아쉽지만 전체적으로 맛있어서 또 갈 것 같아요!",
      image: "/images/남미식.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/인도식.png",
    },
  ]);
  const [boards, setBoards] = useState([
    {
      title: "현이네 고기국수",
      category: "리뷰게시판",
      author: "인생은 고기서 고기",
    },
    {
      title: "주식 ...",
      category: "자유게시판",
      author: "인생은 한방",
    },
  ]);

  const [profile, setProfile] = useState(null); // 프로필 상태 추가
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/users/profile"); // axios.js가 Authorization 헤더 처리
        setProfile(response.data); // 프로필 데이터 설정
        setLoading(false);
      } catch (error) {
        console.error("프로필 데이터를 가져오는 중 오류:", error);
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  
  
  

  if (loading) {
    return <div className="loading">데이터를 불러오는 중입니다...</div>;
  }

  const handleMenuClick = (menu) => {
    setCurrentComponent(menu);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "profile":
        return <MyPageProfile profile={profile} bookmarks={bookmarks} boards={boards} />;
      case "mylist":
        return <MyPageList bookmarks={bookmarks} setBookmarks={setBookmarks} />;
      case "write":
        return <MyPageWrite boards={boards} setBoards={setBoards} />;
      default:
        return <MyPageProfile profile={profile} bookmarks={bookmarks} boards={boards} />;
    }
  };

  return (
    <div className="mypage font-['Song Myung']">
      <Common />
      <header className="mypage-header">
        <Brand />
        <h1 className="mypage-title">마이 페이지</h1>
      </header>
      <p className="community-subtitle">내 정보와 맛집 기록을 확인해보세요!</p>
      <div className="container">
        <div className="mypage-menubar font-['Song Myung']">
          <div
            className={`menu font-['Song Myung'] ${
              currentComponent === "profile" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("profile")}
          >
            회원정보
          </div>
          <div
            className={`menu font-['Song Myung'] ${
              currentComponent === "write" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("write")}
          >
            내가 쓴 글
          </div>
          <div
            className={`menu font-['Song Myung'] ${
              currentComponent === "mylist" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("mylist")}
          >
            찜한 리스트
          </div>
        </div>
        <div className="menu-content font-['Song Myung']">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default MyPage;
