import React from "react";

const Content = ({ tweet }) => {
  return (
    <div className="my-4">
      {tweet.textContent && (
        <p className="text-base md:text-lg content-text">{tweet.textContent}</p>
      )}

      {tweet.imageContent && (
        <img
          className="my-2 w-full rounded-lg object-cover content-image"
          src={tweet.imageContent}
          alt="Tweet Image"
        />
      )}
    </div>
  );
};

export default Content;
