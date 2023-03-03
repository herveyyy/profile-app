import React from "react";
import ProfileCard from "../components/ProfileCard";

function Profile() {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <ProfileCard />
      </div>
    );
  }
  
  export default Profile;