import React from "react";
import { BELL_ICON, HIDDEN_MENU, LOGO } from "../utilities/constants";
import { toggleMenu } from "../utilities/appSlice";
import { useDispatch } from "react-redux";
import { Login } from "@mui/icons-material";


const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src={HIDDEN_MENU}
          className="h-14 px-2  cursor-pointer"
          alt="menu"
        />
        <img src={LOGO} alt="logo" className="h-14 px-2" />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="search"
          className="border w-1/2 py-2 px-4 text-xl rounded-l-full border-gray-300 cursor-pointer"
        />
        <button className="border py-2 px-4 rounded-r-full text-xl bg-gray-300 ">
          Search
        </button>
      </div>
      <div className=" flex col-span-1 ">
        <img src={BELL_ICON} alt="bell-icon" className="w-8 h-9 pt-4 mx-4" />
        <button className=" border py-2 px-4  bg-red-500 text-white rounded-lg">
          <a href={<Login />}>
          SignOut
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
