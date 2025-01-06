import React from "react";
import "./MyPageList.css";

export default function MyPageList({ items, setItems }) {
  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div className="list-container font-['Song Myung']">
      {items.length === 0 ? (
        <div className="empty-message">
          찜한 리스트가 존재하지 않습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="list-content">
          {items.map((item, index) => (
            <div className="list-item font-['Song Myung']" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="list-item-image"
              />
              <div className="list-item-info">
                <h2 className="list-item-title font-['Song Myung']">
                  {item.title}
                </h2>
                <p className="list-item-menu font-['Song Myung']">
                  메뉴: {item.menu}
                </p>
                <p className="list-item-summary font-['Song Myung']">
                  {item.summary}
                </p>
              </div>
              <div
                className="list-item-heart font-['Song Myung']"
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
