import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="min-h-screen bg-black font-grotesk tracking-tight p-6">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-orange-500/5"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Your <span className="text-orange-500">Profile</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Manage your account and view your achievements
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-4 p-6 bg-white/[0.02] rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-2xl font-black">
                {user?.username?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            <div>
              <div className="text-white font-bold text-xl tracking-tight mb-1">
                {user?.username}
              </div>
              <div className="text-gray-400 font-light">Fitness Enthusiast</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10 group hover:scale-[1.02] transition-transform duration-300">
              <div className="text-orange-500 text-3xl font-black mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                {user?.xp || 0}
              </div>
              <div className="text-gray-400 font-medium">Experience Points</div>
            </div>

            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10">
              <div className="text-white font-bold text-lg mb-3 tracking-tight">
                Badges
              </div>
              <div className="text-gray-400 font-light">
                {user?.badges?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {user.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : (
                  "No badges earned yet"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
