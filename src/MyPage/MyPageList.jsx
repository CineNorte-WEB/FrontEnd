import React from "react";
import "./MyPageList.css";

export default function MyPageList() {
  const items = [
    {
      title: "현이네 고기 국수",
      menu: "한식",
      summary:
        "웨이팅이 많은 집! 조금 아쉽지만 전체적으로 맛있어서 또 갈 것 같아요!",
      image: "/images/noodle.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/sushi.png",
    },
    {
      title: "현이네 고기 국수",
      menu: "한식",
      summary:
        "웨이팅이 많은 집! 조금 아쉽지만 전체적으로 맛있어서 또 갈 것 같아요!",
      image: "/images/noodle.png",
    },
    {
      title: "진스시",
      menu: "일식",
      summary: "분위기도 좋고 가격도 적당해서 자주 올 것 같아요!",
      image: "/images/sushi.png",
    },
  ];

  return (
    <div className="list-container font-yeonsung">
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
              <p className="list-item-summary font-yeonsung">{item.summary}</p>
            </div>
            <div className="list-item-heart font-yeonsung">❤️</div>
          </div>
        ))}
      </div>
    </div>
  );
}
