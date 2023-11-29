import React from 'react';
import {useSelector} from "react-redux";

const SideBar = () => {

    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className=' w-72 shadow-lg px-8'>
        <ul className='mx-2  text-md font-normal'>
            <li className='py-1'>Home</li>
            <li className='py-1'>Shorts</li>
            <li className='py-1'>Subscription</li>
            </ul>
            <h1 className='text-2xl  mx-2 pt-2' >You</h1>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-1'>History</li>
            <li className='py-1'>Watch Later</li>
            <li className='py-1'>Liked Videos</li>
            </ul>
            <h1 className='text-2xl mx-2 pt-2'>Explore</h1>
            <ul className='mx-2 text-md font-normal'>
            <li className='py-1'>Trending</li>
            <li className='py-1'>Shopping</li>
            <li className='py-1'>Music</li>
            <li className='py-1'>Movies</li>
            <li className='py-1'>Live</li>
            <li className='py-1'>Gaming</li>
            <li className='py-1'>News</li>
            <li className='py-1'>Sports</li>
            <li className='py-1'>Learning</li>
            <li className='py-1'>Fashion & Beauty</li>
            <li className='py-1'>Podcasts</li>
        </ul>
        <h1 className='text-2xl  mx-2 pt-2' >More from youtube</h1>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-1'>Youtube premium</li>
            <li className='py-1'>Youtube music</li>
            <li className='py-1'>Youtube kids</li>
            </ul>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-1'>Settings</li>
            <li className='py-1'>Report history</li>
            <li className='py-1'>Help</li>
            <li className='py-1'>Feed back</li>
            </ul>
    </div>
  )
}

export default SideBar