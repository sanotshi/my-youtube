import React, { useEffect, useState } from "react";
import { closeMenu } from "../utilities/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {  GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utilities/constants";
 import ChannelData from "./ChannelData";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("v");
 
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+"&key="+GOOGLE_API_KEY);
  //   const json = await data.json();
  //   // console.log(json.items);
  //   setVideos(json.items);
  // };
//   useEffect(()=>{
// videoDescriptionApi();
//   },[]);
//   const videoDescriptionApi=async()=>{
//     const data=await fetch(YOUTUBE_CHANNEL_DESCRIPTION_API);
//     const json=await data.json();
//     console.log(json);
//     setVideos(json)
//   }

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
        <ChannelData />
        {/* <h1>{videos?.items?.snippet?.title}</h1> */}
        <div className="flex justify-between">
          {/* <h1>{videos[0]?.snippet?.channelTitle}</h1> */}
           {/* <div className="">
            <button>Like</button>
            <button>DisLike</button>
            <button>Share</button>
            <button>Subscribe</button>
            <button>More</button>
          </div> */}
        </div> 
        {/* <h1>{videos[0]?.statistics?.viewCount}</h1> */}
      </div>
    </div>
  );
};

export default WatchPage;
