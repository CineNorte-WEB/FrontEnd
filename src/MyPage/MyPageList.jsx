import React from "react";
import "./MyPageList.css";
import apiClient from "../api/axios";

export default function MyPageList({ bookmarks, setBookmarks }) {
  const handleDeleteBookmark = async (placeId) => {
    try {
      await apiClient.delete(`/users/bookmarks/${placeId}`);
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== placeId)
      );
      console.log("북마크가 성공적으로 삭제되었습니다.");
    } catch (error) {
      console.error("북마크 삭제 중 오류 발생:", error);
      alert("북마크 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="list-container font-['Song Myung']" style={{
      height: "100%",
      overflowY: "auto", // 스크롤 가능 설정
      padding: "16px", // 컨테이너 위쪽 패딩 추가
    }}>
      {bookmarks.length === 0 ? (
        <div className="empty-message">
          찜한 리스트가 존재하지 않습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="list-content">
          {bookmarks.map((bookmark) => (
            <div className="list-item font-['Song Myung']" key={bookmark.id}>
              {/* 이미지 */}
              <img
                src={bookmark.imageUrl || "/images/default.png"}
                alt={bookmark.name}
                className="list-item-image"
              />
              {/* 레스토랑 정보 */}
              <div className="list-item-info">
                <h2 className="list-item-title font-['Song Myung']">
                  {bookmark.name}
                </h2>
                <p className="list-item-summary font-['Song Myung']">
                  {bookmark.representativeSentenceMap?.topSentence || "설명 없음"}
                </p>
              </div>
              {/* 하트 아이콘 */}
              <div
                className="list-item-heart font-['Song Myung']"
                onClick={() => handleDeleteBookmark(bookmark.id)}
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
