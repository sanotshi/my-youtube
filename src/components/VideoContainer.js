import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utilities/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos=async ()=>{
const data=await fetch(YOUTUBE_VIDEOS_API);
const json=await data.json();
//  console.log(json.items);
setVideos(json.items);
    }

  return (
    <div className='flex flex-wrap pl-5'>
       {videos.map((video)=>(<VideoCard key={video.id} info={video}/>))} 
         {/* <VideoCard info={videos[0]}/>  */}
    </div>
  )
};

export default VideoContainer;