import React from "react";
import { navigate } from "@reach/router";
const IconButton = ({ link, tag, children, isExternal }) => {
  const setClass = `md:m-8 shadow-lg md:w-24 md:h-24 w-16 h-16 
    shadow-lg	rounded-md hover:shadow-2xl overflow-hidden`;

  return (
    <React.Fragment>
      {isExternal ? (
        <button className={setClass} tag={tag}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(link);
          }}
          className={setClass}
          tag={tag}
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};

export default IconButton;
