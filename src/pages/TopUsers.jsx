import React, { useState, useEffect } from "react";

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]); // Define the state variable
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/top-users");
        if (!response.ok) {
          throw new Error("Failed to fetch top users");
        }
        const data = await response.json();
        setTopUsers(data.topUsers);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTopUsers();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!topUsers.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.posts} posts - Engagement: {user.engagement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
