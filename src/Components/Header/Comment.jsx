import React, { useState } from "react";

import "./Comment.css";
function Comment() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const handleInput = (event) => {
    setCommentText(event.target.value);
  };
  const handleComment = () => {
    setComments([...comments, commentText]);
  };

  return (
    <>
      <div className="comment">
        <input
          // id="comment"
          type="text"
          placeholder="Leave a comment..."
          value={commentText}
          onChange={handleInput}
        />
        <button onClick={handleComment} className="post">
          Post
        </button>
      </div>
      {comments.map((comment) => (
        <div>
          <h5>{comment}</h5>
        </div>
      ))}
    </>
  );
}
export default Comment;
