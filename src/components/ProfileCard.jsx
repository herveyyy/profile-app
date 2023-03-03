import React from "react";

function ProfileCard({profilePic,profession, name, address, num, email,socialLink}) {
  
  
    return ( 
        <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto" src={profilePic} alt="User" />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name="sdas"}</h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{profession="n/a"}</p>
              </div>
              <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{address="asda"}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{num="Ssd"}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{email="sadas"}</td>
                  </tr>
                </tbody></table>
              <div className="  flex justify-center">
                <a className="filter blur-sm hover:blur-0" href={socialLink ="#"}><img
                src="https://img.icons8.com/doodle/48/null/facebook-new.png"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default ProfileCard;