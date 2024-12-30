import React, { useState } from "react";
import "./MyPageList.css";

export default function MyPageList() {
  // 리스트 데이터를 상태로 관리
  const [items, setItems] = useState([
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
    {
      title: "현이네 고기 국수",
      menu: "한식",
      summary:
        "웨이팅이 많은 집! 조금 아쉽지만 전체적으로 맛있어서 또 갈 것 같아요!",
      image: "/images/일식.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/한식.png",
    },
    
  ]);

  // 항목 삭제 함수
  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div className="list-container font-yeonsung">
      {items.length === 0 ? (
        <div className="empty-message">찜한 리스트가 존재하지 않습니다.<br/>지금 추가해보세요!</div>
      ) : (
        <div className="list-content">
          {items.map((item, index) => (
            <div className="list-item font-yeonsung" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="list-item-image"
              />
              <div className="list-item-info">
                <h2 className="list-item-title font-yeonsung">{item.title}</h2>
                <p className="list-item-menu font-yeonsung">메뉴: {item.menu}</p>
                <p className="list-item-summary font-yeonsung">
                  {item.summary}
                </p>
              </div>
              <div
                className="list-item-heart font-yeonsung"
                onClick={() => handleDelete(index)}
              >
                ❤️
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
