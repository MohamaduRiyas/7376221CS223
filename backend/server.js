const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Mock Data
const users = [
  { id: 1, name: 'John Doe', posts: 35, engagement: 1500 },
  { id: 2, name: 'Alice Smith', posts: 28, engagement: 1400 },
  { id: 3, name: 'Bob Johnson', posts: 25, engagement: 1200 },
];

const posts = [
  { id: 101, title: 'Top React Tips', likes: 120, comments: 45 },
  { id: 102, title: 'JavaScript Trends 2025', likes: 110, comments: 40 },
  { id: 103, title: 'Next.js vs React', likes: 100, comments: 50 },
];

const feed = [
  { id: 201, title: 'React vs Angular', likes: 75, comments: 20 },
  { id: 202, title: 'State Management in React', likes: 50, comments: 15 },
  { id: 203, title: 'Understanding TypeScript', likes: 60, comments: 10 },
];

// API Endpoints

// Top Users Endpoint
app.get('/api/top-users', (req, res) => {
  res.status(200).json({ topUsers: users });
});

// Trending Posts Endpoint
app.get('/api/trending-posts', (req, res) => {
  res.status(200).json({ trendingPosts: posts });
});

// Feed Endpoint
app.get('/api/feed', (req, res) => {
  res.status(200).json({ feed });
});

// Catch-All for Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
