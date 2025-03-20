import React, { useState, useEffect } from "react";

function Feed() {
  const [feed, setFeed] = useState([]); // Define the state variable
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/feed");
        if (!response.ok) {
          throw new Error("Failed to fetch feed");
        }
        const data = await response.json();
        setFeed(data.feed);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFeed();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!feed.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Feed</h2>
      <ul>
        {feed.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Likes: {item.likes}</p>
            <p>Comments: {item.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
