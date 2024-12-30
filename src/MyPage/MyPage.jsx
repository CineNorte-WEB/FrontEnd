import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";
import MyPageProfile from "./MyPageProfile";
import MyPageList from "./MyPageList";
import MyPageWrite from "./MyPageWrite";
import Common from "../components/Common";

const MyPage = () => {
  const [currentComponent, setCurrentComponent] = useState("profile");
  const [items, setItems] = useState([
    {
      title: "현이네 고기 국수",
      menu: "한식",
      summary: "웨이팅이 많은 집! 조금 아쉽지만 전체적으로 맛있어서 또 갈 것 같아요!",
      image: "/images/남미식.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/인도식.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/인도식.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/인도식.png",
    },
  ]);
  const [posts, setPosts] = useState([
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
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setCurrentComponent(menu);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "profile":
        return <MyPageProfile items={items} posts={posts} />;
      case "mylist":
        return <MyPageList items={items} setItems={setItems} />;
      case "write":
        return <MyPageWrite posts={posts} setPosts={setPosts} />;
      default:
        return <MyPageProfile items={items} posts={posts} />;
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
          onClick={() => navigate("/map")} // 로고 클릭 시 /map으로 이동
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
