import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments?.length > 0 ? (
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-600">
              {comment}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments available.</p>
      )}
    </div>
  );
};

export default CommentList;
