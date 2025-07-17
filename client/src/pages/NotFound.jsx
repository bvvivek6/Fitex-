import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black font-grotesk tracking-tight">
    {/* Subtle background */}
    <div className="absolute inset-0 opacity-[0.02]">
      <div className="absolute inset-0 bg-orange-500/5"></div>
    </div>

    <div className="relative text-center space-y-6">
      <h1 className="text-8xl md:text-9xl font-black text-orange-500 tracking-tighter">
        404
      </h1>
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg font-light">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <a
        href="/"
        className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default NotFound;
