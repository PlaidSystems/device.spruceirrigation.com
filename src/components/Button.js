import React from "react";
import { navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconLookup } from "../utilities/iconLookup";

export const Button = ({
  link,
  tag,
  children,
  color = "blue",
  isOutline,
  isRound,
  isExternal,
  isFullwidth,
  isLarge,
}) => {
  const setClass = `block mx-2 mt-4 py-2 px-6 md:inline-block md:mt-0
		${isFullwidth && `lg:w-full`}
		${isLarge && `text-2xl`}
		${isRound ? "rounded-full" : "rounded-md"}
		${
      isOutline
        ? `border border-white text-white hover:bg-white hover:text-${color}-600`
        : `bg-${color}-400 text-white hover:bg-${color}-200 hover:text-${color}-600`
    }		
		`;

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

export const CloseButton = ({
  right,
  link,
  tag,
  children,
  color = "blue",
  isOutline,
  isRound,
  isExternal,
  isFullwidth,
  isLarge,
  onClick,
}) => {
  const setClass = `block mx-2 mt-4 py-2 px-6 md:inline-block md:mt-0
		${isFullwidth && `lg:w-full`}
		${isLarge && `text-2xl`}
		${isRound ? "rounded-full" : "rounded-md"}
		${
      isOutline
        ? `border border-white text-white hover:bg-white hover:text-${color}-600`
        : `bg-${color}-400 text-white hover:bg-${color}-200 hover:text-${color}-600`
    }		
		`;

  return (
    <React.Fragment>
      <button
        className={`${right &&
          "float-right"} text-pink-200 rounded-full focus:outline-none hover:text-pink-500`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={iconLookup.faTimesCircle} size="3x" />
      </button>
    </React.Fragment>
  );
};
