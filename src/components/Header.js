import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="flex justify-between my-2 mx-1">
    <div className="flex ">
      <h1 className="text-3xl px-3 my-1">Menu</h1>
      <img
        src="https://th.bing.com/th/id/OIP.PvStOe1KB0YXnmrWdXwa8QHaHa?rs=1&pid=ImgDetMain"
        alt="logo"
        className="w-9 h-9 my-2"
      />
      <h1 className="py-2 text-2xl ">YOUTUBE</h1>
    </div>
    <div>
<input type="text" placeholder="search" className="border py-2 px-4 text-xl rounded-3xl border-gray-300 cursor-pointer"/>
<SearchIcon />
    </div>
    <div className="px-4">
        <VideoCallIcon />
        
        <NotificationsNoneIcon />
        <button className="border p-2 cursor-pointer mx-2 bg-red-400 text-white text-md rounded-lg">SignOut</button>
    </div>
    </div>
  );
};

export default Header;
