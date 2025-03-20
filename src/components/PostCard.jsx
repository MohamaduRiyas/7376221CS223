import React from "react";

function PostCard({ post }) {
  const postTitle = post?.title || "Untitled Post";
  const postContent = post?.content || "No content available.";
  const postLikes = post?.likes || 0;
  const postComments = post?.comments || 0;
  const postDate = new Date(post?.timestamp || Date.now()).toLocaleDateString();

  // Placeholder image using https://picsum.photos
  const randomImageUrl = `https://picsum.photos/seed/${post?.id || Math.random()}/400/200`;

  return (
    <div className="post-card bg-white shadow-md rounded-lg p-4 mb-4">
      <img
        src={randomImageUrl}
        alt={postTitle}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold mb-2">{postTitle}</h3>
      <p className="post-content text-gray-700 mb-4">{postContent}</p>
      <div className="post-meta flex justify-between items-center text-sm text-gray-500 mb-4">
        <span className="post-likes flex items-center">
          <i className="icon-heart mr-1">❤️</i> {postLikes} Likes
        </span>
        <span className="post-comments flex items-center">
          <i className="icon-comment mr-1">💬</i> {postComments} Comments
        </span>
        <span className="post-date">{postDate}</span>
      </div>
      <div className="post-actions flex justify-between">
        <button className="action-button bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
          Like
        </button>
        <button className="action-button bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300 transition">
          Comment
        </button>
        <button className="action-button bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition">
          Share
        </button>
      </div>
    </div>
  );
}

export default PostCard;
