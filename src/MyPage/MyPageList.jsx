import React from "react";
import "./MyPageList.css";

export default function MyPageList({ bookmarks, setBookmarks }) {
  const handleDelete = (indexToDelete) => {
    const updatedBookmarks = bookmarks.filter((_, index) => index !== indexToDelete);
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="list-container font-['Song Myung']">
      {bookmarks.length === 0 ? (
        <div className="empty-message">
          찜한 리스트가 존재하지 않습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="list-content">
          {bookmarks.map((bookmark, index) => (
            <div className="list-item font-['Song Myung']" key={index}>
              <img
                src={bookmark.image}
                alt={bookmark.title}
                className="list-item-image"
              />
              <div className="list-item-info">
                <h2 className="list-item-title font-['Song Myung']">
                  {bookmark.title}
                </h2>
                <p className="list-item-menu font-['Song Myung']">
                  메뉴: {bookmark.menu}
                </p>
                <p className="list-item-summary font-['Song Myung']">
                  {bookmark.summary}
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
