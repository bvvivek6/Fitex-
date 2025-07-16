import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white rounded shadow p-4">
        <div className="mb-2">
          <strong>Username:</strong> {user?.username}
        </div>
        <div className="mb-2">
          <strong>XP:</strong> {user?.xp || 0}
        </div>
        <div className="mb-2">
          <strong>Badges:</strong> {user?.badges?.join(", ") || "None"}
        </div>
      </div>
    </div>
  );
};

export default Profile;
