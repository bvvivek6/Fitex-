import React, { useState } from "react";
import { login } from "../utils/api";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res.token) {
      onLogin(res.token);
    } else {
      setError(res.error || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-grotesk tracking-tight">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-orange-500/5"></div>
      </div>

      <div className="relative w-full max-w-md px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.02] backdrop-blur-sm border border-white/10 p-10 rounded-3xl space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-400 font-light">
              Sign in to your FitEx account
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm font-medium">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              className="w-full bg-white/[0.02] border border-white/20 text-white placeholder-gray-400 p-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all duration-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full bg-white/[0.02] border border-white/20 text-white placeholder-gray-400 p-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all duration-300"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
