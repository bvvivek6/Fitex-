import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./components/Dashboard";
import Game from "./pages/Game";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const handleLogin = (tok) => {
    setToken(tok);
    localStorage.setItem("token", tok);
    // Optionally fetch user info here
  };
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <nav className="flex justify-between gap-4 mx-8 mt-2 p-4 font-grotesk bg-black bg-opacity-50 backdrop-blur-md shadow-md text-white">
        <a
          href="/"
          className="font-bold text-lg text-orange-500 hover:text-orange-400"
        >
          FitEx
        </a>
        <div className="flex items-center gap-4">
          <a href="/game" className="hover:text-orange-400">
            Game
          </a>
          <a href="/dashboard" className="hover:text-orange-400">
            Dashboard
          </a>
          <a href="/profile" className="hover:text-orange-400">
            Profile
          </a>
          {token ? (
            <button
              onClick={handleLogout}
              className="ml-auto text-red-500 hover:text-red-400"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="hover:text-orange-400">
                Login
              </a>
              <a href="/signup" className="hover:text-orange-400">
                Sign Up
              </a>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={token ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={
            token ? <Dashboard token={token} /> : <Navigate to="/login" />
          }
        />
        <Route path="/game" element={<Game token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
