import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Awards",
  "Live",
  "News",
  "Recently Uploaded",
  "BigBoss",
  "Tamil Cinema",
  "Nwe To You",
  "Watched",
  "Filmi",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((list) => (
        <Button key={list} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
