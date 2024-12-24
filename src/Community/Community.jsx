import React from "react";
import "./Community.css";

const Community = () => {
  const posts = [
    {
      title: "주식 ...",
      category: "자유게시판",
      author: "인생은 한방",
      icon: "/images/stock.png",
    },
    {
      title: "현이네 고기국수",
      category: "리뷰게시판",
      author: "인생은 고기서 고기",
      icon: "/images/noodle.png",
    },
    {
      title: "종강까지 한달!!!",
      category: "자유게시판",
      author: "휴학하고파",
      icon: "/images/calendar.png",
    },
    {
      title: "진스시",
      category: "리뷰게시판",
      author: "가는곳마다스시",
      icon: "/images/sushi.png",
    },
  ];

  return (
    <div className="community-container">
      <h1 className="community-title">커뮤니티</h1>
      <p className="community-subtitle">다양한 의견을 공유해보세요~</p>
      <div className="community-list">
        {posts.map((post, index) => (
          <div className="community-item" key={index}>
            <div className="community-info">
              <h2 className="community-post-title">{post.title}</h2>
              <p className="community-post-category">{post.category}</p>
              <p className="community-post-author">작성자: {post.author}</p>
            </div>
            <div className="community-icon">
              <img
                src={post.icon}
                alt={post.title}
                className="community-post-icon"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="community-pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default Community;
