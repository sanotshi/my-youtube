import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
      const {snippet,statistics}=info;
      const {channelTitle,title,thumbnails}=snippet;
  return <div className='p-2 m-2 w-64 hover:bg-gray-200 cursor-pointer'>
          <img className='rounded-lg' src={thumbnails.medium.url} alt="video" />
        <ul>
            <li className='text-lg font-semibold py-2'>{title}</li>
            <li className='text-lg '>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>  
    </div>
  
};

export default VideoCard;