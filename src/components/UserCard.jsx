import React from "react";

function UserCard({ user, rank }) {
  const userName = user || "Anonymous";
  const avatar = userName.charAt(0).toUpperCase();

  return (
    <div className="user-card">
      <div className="user-rank">#{rank}</div>
      <div className="user-avatar" aria-label={`Avatar for ${userName}`}>
        {avatar}
      </div>
      <div className="user-info">
        <div className="user-name">{userName}</div>
        <div className="user-stats">
          <span>Posts: {Math.floor(Math.random() * 50)}</span>
          <span>Followers: {Math.floor(Math.random() * 1000)}</span>
        </div>
      </div>
      <button className="follow-button">Follow</button>
    </div>
  );
}

export default UserCard;
