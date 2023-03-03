import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileCardList() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 <ProfileCard />
 <ProfileCard />
 <ProfileCard />
 <ProfileCard />
 <ProfileCard />
 <ProfileCard />
 <ProfileCard />
    </div>
    </div>
      );
}

export default ProfileCardList;