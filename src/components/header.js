import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { ProductCard } from "../components/ProductCard";
import learnData from "../data/learnData";
import landingPageData from "../data/embarkablePageData";
import { useScrollPosition } from "../utilities/useScrollPosition";
import LogoBlock from "./LogoBlock";
import { SubscribeModal } from "./Modal";

const solutionData = landingPageData[0].features;

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isFeatureExpanded, toggleFeatureExpansion] = useState(false);
  const [isResourcesExpanded, toggleResourcesExpansion] = useState(false);
  const [scroll, setScroll] = useState(0);

  useScrollPosition(function setScrollPosition({ currentPosition }) {
    setScroll(currentPosition.y);
  });

  return (
    <nav
      className={`${
        isFeatureExpanded || isResourcesExpanded || scroll < 0
          ? `bg-white shadow-xl transition-colors-shadow duration-500`
          : "bg-transparent transition-colors-shadow duration-500"
      }
			fixed top-0 z-50 w-screen`}
    >
      <div
        className={`flex flex-wrap justify-between px-4 py-4 mx-auto mt-0 ${isExpanded &&
          "bg-white"} w-full lg:w-4/5`}
      >
        <div className="items-center">
          <LogoBlock />
        </div>

        <button
          className="flex items-center px-3 py-2 text-gray-700 border border-white rounded md:hidden focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full md:w-auto md:flex md:items-center`}
        >
          <div
            className="ml-4 text-sm"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <div
              onMouseOver={() => {
                toggleFeatureExpansion(!isFeatureExpanded) &
                  toggleResourcesExpansion(false);
              }}
              className={`${
                isFeatureExpanded ? `text-teal-400` : `text-gray-700`
              }
							block mt-4 mr-16 text-lg font-light cursor-pointer md:inline-block md:mt-0 hover:text-teal-400`}
            >
              Product
            </div>

            <Link
              to="/price"
              onMouseOver={() => {
                toggleResourcesExpansion(false) & toggleFeatureExpansion(false);
              }}
              className="block mt-4 mr-16 text-lg font-light text-gray-700 no-underline cursor-pointer md:inline-block md:mt-0 hover:text-teal-400"
            >
              Pricing
            </Link>
            {/*
						<div
							onClick = {() => {navigate('/about')} }
							onMouseOver = {() => {toggleResourcesExpansion(false) & toggleFeatureExpansion(false)}}
							className="block mt-4 mr-6 text-lg font-semibold text-gray-700 no-underline cursor-pointer md:inline-block md:mt-0 hover:text-teal-400"
						>
							About
						</div>
*/}
            <div
              onMouseOver={() => {
                toggleResourcesExpansion(!isResourcesExpanded) &
                  toggleFeatureExpansion(false);
              }}
              className={`${
                isResourcesExpanded ? `text-teal-400` : `text-gray-700`
              }
							block mt-4 mr-16 font-light text-lg cursor-pointer md:inline-block md:mt-0 hover:text-teal-400`}
            >
              Learn
            </div>
          </div>
        </div>

        <div
          className={`${isExpanded ? `block` : `hidden`}
					w-full md:w-auto md:flex md:items-center`}
        >
          <div className="block my-4 md:my-0 md:inline-block">
            <SubscribeModal
              small
              CTAButtonText={landingPageData[0].titleBlock.CTAButtonText}
              data={landingPageData[0].CTA}
              event_id="cta_modal"
            />
          </div>
        </div>
      </div>

      {isFeatureExpanded && (
        <div
          onClick={() => {
            toggleFeatureExpansion(!isFeatureExpanded);
          }}
          onMouseLeave={() => {
            toggleFeatureExpansion(!isFeatureExpanded);
          }}
          className={`flex justify-center w-full py-10 border-t-2 mx-auto bg-white md:items-center md:w-auto`}
        >
          <ProductCard data={solutionData} />
        </div>
      )}

      {isResourcesExpanded && (
        <div
          onClick={() => {
            toggleResourcesExpansion(!isResourcesExpanded);
          }}
          onMouseLeave={() => {
            toggleResourcesExpansion(!isResourcesExpanded);
          }}
          className="flex justify-center w-full py-10 mx-auto bg-white border-t-2 md:items-center md:w-auto"
        >
          <ProductCard data={learnData} />
        </div>
      )}
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
