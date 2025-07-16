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
      <nav className="flex gap-4 p-4 bg-white shadow">
        <a href="/" className="font-bold">
          FitEx
        </a>
        <a href="/game">Game</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        {token ? (
          <button onClick={handleLogout} className="ml-auto text-red-500">
            Logout
          </button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
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
