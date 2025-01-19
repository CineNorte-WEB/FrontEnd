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
  const [combinedBoards, setCombinedBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const [pageSize, setPageSize] = useState(5); // 한 페이지에 표시할 게시글 수
  const [totalPosts, setTotalPosts] = useState(0); // totalElements 저장
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [profile, setProfile] = useState(null); // 프로필 상태 추가
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/users/posts", {
          params: {
            page: currentPage,
            size: pageSize,
          },
        });
    
        // 데이터 처리
        const postsData = response.data.content.map((post) => ({
          id: post.id,
          title: post.title,
          content: post.content,
          category: post.category,
          createdAt: post.createdAt,
          type: post.type,
        }));
        setCombinedBoards(postsData);
        setTotalPosts(response.data.totalElements); // totalElements 저장
        // 전체 페이지 수 업데이트
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("게시글 데이터를 가져오는 중 오류 발생:", error);
      }
      setLoading(false);
    };
    

    fetchPosts();
  }, [currentPage, pageSize]);

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };
  

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
        return <MyPageProfile profile={profile} setProfile={setProfile} boards={combinedBoards} totalPosts={totalPosts}/>;
      case "mylist":
        return <MyPageList bookmarks={bookmarks} setBookmarks={setBookmarks} />;
      case "write":
        return <MyPageWrite currentPage={currentPage} bookmarks={bookmarks} boards={combinedBoards} totalPages={totalPages} onPageChange={handlePageChange} setBoards={setCombinedBoards} />;
      default:
        return <MyPageProfile profile={profile} bookmarks={bookmarks} posts={combinedBoards} />;
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
