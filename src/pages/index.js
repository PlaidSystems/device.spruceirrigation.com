import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import LogoBlock from "../components/LogoBlock";
import IconButton from "../components/IconButton";

function IndexPage() {
  const pageData = getObjectFromArray(
    landingPageData,
    "name",
    "embarkablelabs"
  );
  return (
    <Layout header={pageData.SEO.title}>
      {/*use default SEOfrom gatsby-config*/}
      <SEO title={pageData.SEO.title} image={imageLookup[pageData.SEO.image]} />

      {/* <TitleBlockSplit
				title={pageData.titleBlock.title}
				subtitle={pageData.titleBlock.subtitle}
				color={pageData.titleBlock.color}
				image={pageData.titleBlock.image}
				CTA={pageData.CTA}
			/>	 */}

      <div className="relative h-screen overflow-hidden">
        <img
          className="absolute object-cover w-full h-full overflow-hidden"
          src={imageLookup.LandingPageImage}
        />
        <div className="absolute w-full text-center text-blue-600 md:text-left md:max-w-xl md:left-1/10 top-1/5">
          <LogoBlock />
          <div className="mt-3 text-3xl drop-shadow-2xl md:text-6xl">
            Where creativity meets innovation.
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full h-24 gap-4 md:h-40">
          <IconButton
            color="white"
            isExternal
            link="https://spruceirrigation.com/"
          >
            <img
              className="object-cover overflow-hidden rounded-md"
              src={imageLookup.Spruce}
            />
          </IconButton>
          <IconButton color="white" isExternal link="https://embarkable.io/">
            <img
              className="object-cover p-2 overflow-hidden bg-white rounded-md"
              src={imageLookup.Embarkable}
            />
          </IconButton>
          <IconButton
            color="white"
            isExternal
            link="https://www.linkedin.com/in/nathan-cauffman/"
          >
            <img
              className="object-cover overflow-hidden rounded-md"
              src={imageLookup.NathanIn}
            />
          </IconButton>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
