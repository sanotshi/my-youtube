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
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const handleSignOut=()=>{
  //   console.log("clicked")

  // }
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);

    const json = await data.json();
     setSuggestions(json[1]);
    // console.log(json[1]);
  };

  return (
    <div className="flex md:grid justify-between md:grid-flow-col  md:m-2 shadow-lg w-[1000px] md:w-auto">
      <div className="flex md:flex  md:col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src={HIDDEN_MENU}
          className="h-16  md:h-12 md:w-auto px-2  cursor-pointer"
          alt="menu"
        />
        <img src={LOGO} alt="logo" className="h-16 md:h-14 md:w-auto md:px-2" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border w-1/2 p-2 md:py-2 px-4 text-xl rounded-l-full border-gray-300 cursor-pointer"
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border py-2 px-4 rounded-r-full text-xl bg-gray-300 ">
            Search
          </button>
        </div>
        { showSuggestions && <div className="absolute bg-white px- 2py-2 w-[37rem] rounded-lg shadow-lg border border-gray-200">
          <ul>
            {suggestions &&
              suggestions.map((s) => (
                <li key={s} className="py-2 px-3 hover:bg-gray-200">
                  {s}
                </li>
              ))}
          </ul>
        </div>}
      </div>
      <div className=" flex col-span-1 ">
        <img src={BELL_ICON} alt="bell-icon" className="w-8 h-9 pt-4 mx-2" />
        <button className=" border py-1 md:py-2 px-4  bg-red-500 text-white rounded-lg">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
