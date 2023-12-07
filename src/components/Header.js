import React, { useEffect, useState } from "react";
import {
  BELL_ICON,
  HIDDEN_MENU,
  LOGO,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utilities/constants";
import { toggleMenu } from "../utilities/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const handleSignOut=()=>{
  //   console.log("clicked")

  // }
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
    // const json = await data.json();
    console.log(data);
  };

  return (
    <div className="grid grid-flow-col m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src={HIDDEN_MENU}
          className="h-12 px-2  cursor-pointer"
          alt="menu"
        />
        <img src={LOGO} alt="logo" className="h-14 px-2" />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border w-1/2 py-2 px-4 text-xl rounded-l-full border-gray-300 cursor-pointer"
        />
        <button className="border py-2 px-4 rounded-r-full text-xl bg-gray-300 ">
          Search
        </button>
      </div>
      <div className=" flex col-span-1 ">
        <img src={BELL_ICON} alt="bell-icon" className="w-8 h-9 pt-4 mx-4" />
        <button className=" border py-2 px-4  bg-red-500 text-white rounded-lg">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
