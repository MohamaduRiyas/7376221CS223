import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from "./pages/Feed";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Social Media Analytics</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Feed
                  </Link>
                </li>
                <li>
                  <Link to="/top-users" className="hover:underline">
                    Top Users
                  </Link>
                </li>
                <li>
                  <Link to="/trending-posts" className="hover:underline">
                    Trending Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 py-6 bg-white rounded-lg shadow-md">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>MOHAMADU RIYAS S - 7376221CS223</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
