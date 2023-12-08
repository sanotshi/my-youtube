import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_DATA_API } from '../utilities/constants';

const ChannelData = ({}) => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
getChannelData();
    },[]);
    const getChannelData=async()=>{
        const data=await fetch(YOUTUBE_CHANNEL_DATA_API);
        const json=await data.json();
        console.log(json.items[0]);
        setVideos(json?.items[0])
    }
    
  return (
    <div>
        <h1>{videos.snippet.title}</h1>
    </div>
  )
}

export default ChannelData