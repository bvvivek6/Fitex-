import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen ">
    <h1 className="text-4xl font-bold mb-4">FitEx</h1>
    <p className="mb-8 text-lg">
      Real-time fitness tracker & game using AI pose detection
    </p>
    <div className="flex gap-4">
      <Link
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-green-500 text-white px-4 py-2 rounded-full"
      >
        Sign Up
      </Link>
      <Link
        to="/game"
        className="bg-purple-500 text-white px-4 py-2 rounded-full"
      >
        Try Game
      </Link>
    </div>
  </div>
);

export default Home;
