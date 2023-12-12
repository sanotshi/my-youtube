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
    <div className="p-3 w-full">
      <div className="flex ">
        <div>
       <iframe
        width="1350"
        height="750"
        src={"https://www.youtube.com/embed/" + searchParam+"?autoplay=1&mute=0&showinfo=0&rel=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> 
      </div>
      <div className="w-full">
           
     <LiveChat />
      </div>
      </div>
      
        <CommentContainer />
      
    </div>
  );
};

export default WatchPage;
