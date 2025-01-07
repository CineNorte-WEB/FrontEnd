export default function MyPageWrite({ posts, setPosts }) {
  // ... state management code remains the same ...

  return (
    <div className="write-container font-['Song Myung']">
      {posts.length === 0 ? (
        <div className="empty-message">
          작성한 게시물이 없습니다.
          <br />
          지금 추가해보세요!
        </div>
      ) : (
        <div className="write-list">
          {posts.map((post, index) => (
            <div className="write-item font-['Song Myung']" key={index}>
              <div className="write-info">
                <h2 className="write-post-title font-['Song Myung']">
                  {post.title}
                </h2>
                <p className="write-post-category font-['Song Myung']">
                  {post.category}
                </p>
                <p className="write-post-author font-['Song Myung']">
                  작성자: {post.author}
                </p>
              </div>
              <div className="write-actions">
                <button
                  className="edit-button font-['Song Myung']"
                  onClick={() => handleEditClick(index)}
                >
                  수정
                </button>
                <button
                  className="delete-button font-['Song Myung']"
                  onClick={() => handleDeleteClick(index)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <p>정말 삭제하시겠습니까?</p>
            <div className="modal-buttons">
              <button
                onClick={confirmDelete}
                className="confirm-button font-['Song Myung']"
              >
                확인
              </button>
              <button
                onClick={cancelDelete}
                className="cancel-button font-['Song Myung']"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal font-['Song Myung']">
            <p>게시글 수정</p>
            <input
              type="text"
              name="title"
              value={editedPost.title}
              onChange={handleInputChange}
              placeholder="제목"
              className="modal-input font-['Song Myung']"
            />
            <input
              type="text"
              name="category"
              value={editedPost.category}
              onChange={handleInputChange}
              placeholder="카테고리"
              className="modal-input font-['Song Myung']"
            />
            <input
              type="text"
              name="author"
              value={editedPost.author}
              onChange={handleInputChange}
              placeholder="작성자"
              className="modal-input font-['Song Myung']"
            />
            <div className="modal-buttons">
              <button
                onClick={saveEdit}
                className="confirm-button font-['Song Myung']"
              >
                저장
              </button>
              <button
                onClick={cancelEdit}
                className="cancel-button font-['Song Myung']"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
