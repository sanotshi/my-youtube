import React from 'react';
import {useSelector} from "react-redux";

const SideBar = () => {

    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='w-56 shadow-lg px-8'>
        <ul className='mx-2  text-md font-normal'>
            <li className='py-2'>Home</li>
            <li className='py-2'>Shorts</li>
            <li className='py-2'>Subscription</li>
            </ul>
            <h1 className='text-2xl  mx-2 pt-2' >You</h1>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-2'>History</li>
            <li className='py-2'>Watch Later</li>
            <li className='py-2'>Liked Videos</li>
            </ul>
            <h1 className='text-2xl mx-2 pt-2'>Explore</h1>
            <ul className='mx-2 text-md font-normal'>
            <li className='py-2'>Trending</li>
            <li className='py-2'>Shopping</li>
            <li className='py-2'>Music</li>
            <li className='py-2'>Movies</li>
            <li className='py-2'>Live</li>
            <li className='py-2'>Gaming</li>
            <li className='py-2'>News</li>
            <li className='py-2'>Sports</li>
            <li className='py-2'>Learning</li>
            <li className='py-2'>Fashion & Beauty</li>
            <li className='py-2'>Podcasts</li>
        </ul>
        <h1 className='text-2xl  mx-2 pt-2' >More from youtube</h1>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-2'>Youtube premium</li>
            <li className='py-2'>Youtube music</li>
            <li className='py-2'>Youtube kids</li>
            </ul>
            <ul className=' mx-2 text-md font-normal'>
            <li className='py-2'>Settings</li>
            <li className='py-2'>Report history</li>
            <li className='py-2'>Help</li>
            <li className='py-2'>Feed back</li>
            </ul>
    </div>
  )
}

export default SideBar