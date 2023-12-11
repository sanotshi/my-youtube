import React, { useEffect, useState } from "react";
import { closeMenu } from "../utilities/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {   GOOGLE_API_KEY, YOUTUBE_CHANNEL_DATA_API } from "../utilities/constants";
 import ChannelData from "./ChannelData";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("v");
  const channelId=videos.id;
  console.log(channelId)
 
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);


useEffect(()=>{
getChannelData();
},[]);
const getChannelData=async()=>{
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key="+GOOGLE_API_KEY);
    const json=await data.json();
    console.log(json?.items[0]);
    setVideos(json?.items[0])
}

  return (
    <div className="p-3">
       <iframe
        width="1200"
        height="750"
        src={"https://www.youtube.com/embed/" + searchParam}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> 
      
      <div>
            {/* <ChannelData description={videos?.snippet}/>     */}
        
        {/* <h1>{videos?.items?.snippet?.title}</h1> */}
     
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
