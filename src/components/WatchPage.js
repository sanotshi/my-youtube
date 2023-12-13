import React, { useEffect, useState } from "react";
import { closeMenu } from "../utilities/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utilities/constants";
//  import ChannelData from "./ChannelData";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("channelId"))
  const searchParam = searchParams.get("v");
  console.log(searchParam)
  // const channelId=videos.id;
  // console.log(channelId)
 
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(closeMenu());
    getChannelData();
  }, []);
 const getChannelData=async()=>{
const data=await fetch("https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key="+GOOGLE_API_KEY);
const json=await data.json();
console.log(json.items[0]);
 }



  return (
    <div className="ml-12 p- 2 md:p-2 ">
      <div className="flex ">
        <div className="w-[900px] md:w-auto">
       <iframe
        width="1300"
        height="750"
        src={"https://www.youtube.com/embed/" + searchParam+"?autoplay=1&mute=0&showinfo=0&rel=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> 
      </div>
      <div className="">
           
     <LiveChat />
      </div>
      </div>

      <div className="flex justify-between w-[900px] md:w-[1300px]">
        <div className="flex">
        <img className="w-8 h-8 mx-2" src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" alt="user"/>
          <button className="border border-gray-200 px-3 py-1 mx-1 rounded-3xl font-medium">Join</button>
          <button className="border bg-black text-white px-3 py-1 mx-1 rounded-3xl ">Subscribe</button>
        </div>
        <form className="">
        <button className="border py-2 px-3 bg-gray-200 rounded-3xl mx-1">Like</button>
        <button className="border py-2 px-3 bg-gray-200 rounded-3xl mx-1">DisLike</button>
        <button className="border py-2 px-3 bg-gray-200 rounded-3xl mx-1">Download</button>
        <button className="border py-2 px-3 bg-gray-200 rounded-3xl mx-1">Share</button>
        <button className="border py-2 px-3 bg-gray-200 rounded-3xl mx-1">More</button>
        </form>
      </div>
        <CommentContainer />
      
    </div>
  );
};

export default WatchPage;
