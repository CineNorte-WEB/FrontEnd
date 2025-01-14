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
  const [userId, setUserId] = useState(null);
  const [currentComponent, setCurrentComponent] = useState("profile");
  const [bookmarks, setBookmarks] = useState([]);
  const [boards, setBoards] = useState([]);
  const [profile, setProfile] = useState(null); // 프로필 상태 추가
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const [reviewsResponse, boardsResponse] = await Promise.all([
          apiClient.get("/users/reviews"),
          apiClient.get("/users/boards"),
        ]);

        // 리뷰와 일반 게시판 데이터를 하나로 합치기
        const combinedBoards = [
          ...reviewsResponse.data.map((review) => ({
            id: review.id,
            title: review.title,
            category: "리뷰게시판",
            content: review.content,
            author: review.userNickname,
            placeName: review.placeName, // 장소 이름 추가
            type: "review", // 리뷰 게시판 타입 추가
          })),
          ...boardsResponse.data.map((board) => ({
            id: board.id,
            title: board.title,
            category: "자유게시판",
            content: board.content,
            author: board.userNickname,
            type: "board", // 일반 게시판 타입 추가
          })),
        ];

        setBoards(combinedBoards);
        setLoading(false);
      } catch (error) {
        console.error("게시판 데이터를 가져오는 중 오류:", error);
        setLoading(false);
      }
    };

    fetchBoards();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/users/profile"); // axios.js가 Authorization 헤더 처리
        setProfile(response.data); // 프로필 데이터 설정
        setUserId(response.data.id); // userId를 상태로 저장
        setLoading(false);
      } catch (error) {
        console.error("프로필 데이터를 가져오는 중 오류:", error);
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);

  // 북마크 정보 가져오기
  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!userId) return; // userId가 설정되지 않으면 실행하지 않음
      try {
        const response = await apiClient.get(`/users/${userId}/bookmarks`);
        setBookmarks(response.data); // 북마크 데이터 설정
        setLoading(false);
      } catch (error) {
        console.error("북마크 데이터를 가져오는 중 오류:", error);
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [userId]); // userId가 설정될 때만 실행

  
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
