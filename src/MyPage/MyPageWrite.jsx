import React from "react";
import "./MyPageWrite.css";

export default function MyPageWrite() {
  const posts = [
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
    
  ];

  return (
    <div className="write-container font-yeonsung">
      {posts.length === 0 ? (
        <div className="empty-message">작성한 게시물이 없습니다.<br/>지금 추가해보세요!</div>
      ) : (
        <div className="write-list">
          {posts.map((post, index) => (
            <div className="write-item font-yeonsung" key={index}>
              <div className="write-info">
                <h2 className="write-post-title font-yeonsung">{post.title}</h2>
                <p className="write-post-category font-yeonsung">
                  {post.category}
                </p>
                <p className="write-post-author font-yeonsung">
                  작성자: {post.author}
                </p>
              </div>
              <div className="write-icon">
                <img
                  src="/images/icon.png"
                  alt="icon"
                  className="write-post-icon"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
