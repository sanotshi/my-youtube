import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1 px-3 mx-3 ml-8 my-2 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-400">
        {name}
      </button>
    </div>
  );
};

export default Button;
