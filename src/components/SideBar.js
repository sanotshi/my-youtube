import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { SHORTS_ICON, TRENDING_ICON } from "../utilities/constants";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MovieIcon from "@mui/icons-material/Movie";
import SensorsIcon from "@mui/icons-material/Sensors";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg px-2  pr-16 cursor-pointer">
      <ul className="mx-2  text-md font-normal pt-2">
        <div className="flex ">
          <li className="px-4">
            <HomeIcon />
          </li>
          <li className="py-1">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex px-2">
          <img src={SHORTS_ICON} alt="shorts" className="w-8" />
          <li className="py-1 px-3">Shorts</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <SubscriptionsIcon />
          </li>
          <li className="py-1 px-2">Subscription</li>
        </div>
      </ul>
      <h1 className="text-2xl  mx-2 pt-2">You</h1>
      <ul className=" mx-2 text-md font-normal">
        <div className="flex">
          <li className="px-2 ">
            <HistoryIcon />
          </li>
          <li className="py-1 px-2">History</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <WatchLaterIcon />
          </li>
          <li className="py-1 px-2">Watch Later</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <ThumbUpOffAltIcon />
          </li>
          <li className="py-1 px-2">Liked Videos</li>
        </div>
      </ul>
      <h1 className="text-2xl mx-2 pt-2">Explore</h1>
      <ul className="mx-2 text-md font-normal pt-2">
        <div className="flex">
          <li className="px-2">
            <MusicNoteIcon />
          </li>
          <li className="py-1 px-2">Music</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <ShoppingBagIcon />
          </li>
          <li className="py-1 px-2">Shopping</li>
        </div>
        <div className="flex pl-2">
          <img className=" w-6" src={TRENDING_ICON} alt="trending" />
          <li className="py-1 pl-3">Trending</li>
        </div>
        <div className="flex ">
          <li className="px-2">
            <MovieIcon />{" "}
          </li>
          <li className="py-1 pl-2">Movies</li>
        </div>
        <div className="flex">
          <li className="px-2 ">
            <SensorsIcon />
          </li>
          <li className="py-1 pl-2">Live</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <SportsEsportsIcon />
          </li>
          <li className="py-1 pl-2">Gaming</li>
        </div>
        <div className="flex">
          <li className="px-2 ">
            <NewspaperIcon />
          </li>
          <li className="py-1 pl-2">News</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <EmojiEventsIcon />
          </li>
          <li className="py-1 pl-2">Sports</li>
        </div>
        <div className="flex">
          <li className="px-2">
            <LocalLibraryIcon />
          </li>
          <li className="py-1 pl-2">Learning</li>
        </div>
        <li className="py-1">Fashion & Beauty</li>
        <div className="flex">
          <li className="px-2"><PodcastsIcon /></li>
        <li className="py-1 pl-2">Podcasts</li>
        </div>
      </ul>
      <h1 className="text-2xl  mx-2 pt-2">More from youtube</h1>
      <ul className=" mx-2 text-md font-normal">
        <div className="flex">
          <li className="px-2"><YouTubeIcon /></li>
        <li className="py-1 pl-2">Youtube premium</li>
        </div>
        <li className="py-1">Youtube music</li>
        <li className="py-1">Youtube kids</li>
      </ul>
      <ul className=" mx-2 text-md font-normal">
        <li className="py-1">Settings</li>
        <li className="py-1">Report history</li>
        <li className="py-1">Help</li>
        <li className="py-1">Feed back</li>
      </ul>
    </div>
  );
};

export default SideBar;
