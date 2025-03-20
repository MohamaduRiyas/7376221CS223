import React, { useState, useEffect } from "react";

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([]); // Define the state variable
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/trending-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch trending posts");
        }
        const data = await response.json();
        setTrendingPosts(data.trendingPosts);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrendingPosts();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!trendingPosts.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPosts;
