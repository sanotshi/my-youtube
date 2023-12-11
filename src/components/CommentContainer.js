import React from "react";
import Comments from "./Comments";

const commentsData = [
  {
    name: "santoshi",
    text: "how did you find",
    replies: [
      //reply takes an array it takes again name text reply....
      {
        name: "santoshi",
        text: "how did you find",
        replies: [
          {
            name: "santoshi",
            text: "how did you find",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "santoshi",
    text: "how did you find",
    replies: [],
  },
  {
    name: "santoshi",
    text: "how did you find",
    replies: [],
  },
  {
    name: "santoshi",
    text: "how did you find",
    replies: [],
  },
];
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
    <Comments key={index} data={comment} />
    <div className="pl-5 border border-l-black">
        {/* this is n level nesting  */}
      <CommentList comments={comment.replies} />   
    </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      {/* <Comments data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
