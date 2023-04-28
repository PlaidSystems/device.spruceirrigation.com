import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import LogoBlock from "../components/LogoBlock";
import IconButton from "../components/IconButton";

function IndexPage({ location, search }) {
  console.log(location.search);
  let model;
  let deveui;
  let appeui;
  let appkey;
  if (location.search) {
    const params = new URLSearchParams(location.search.match(/\?.*/)[0]);
    model = params.get("model");
    deveui = params.get("eui");
    appeui = params.get("dev");
    appkey = params.get("key");
  }

  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy);}}

  const pageData = getObjectFromArray(
    landingPageData,
    "name",
    "embarkablelabs"
  );

  async function scan() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.scan();
        ndef.onreading = (event) => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            console.log("Record type:  " + record.recordType);
            console.log("MIME type:    " + record.mediaType);
            console.log("=== data ===\n" + decoder.decode(record.data));
          }
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Web NFC is not supported.");
    }
  }

  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write("What Web Can Do Today");
        console.log("NDEF message written!");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Web NFC is not supported.");
    }
    // console.log("User clicked scan button");

    // try {
    //   const ndef = new NDEFReader();
    //   await ndef.scan();
    //   console.log("> Scan started");

    //   ndef.addEventListener("readingerror", () => {
    //     console.log(
    //       "Argh! Cannot read data from the NFC tag. Try another one?"
    //     );
    //   });

    //   ndef.addEventListener("reading", ({ message, serialNumber }) => {
    //     console.log(`> Serial Number: ${serialNumber}`);
    //     console.log(`> Records: (${message.records.length})`);

    //     meow.play();
    //   });
    // } catch (error) {
    //   console.log("Argh! " + error);
    // }
  }

  return (
    <Layout header={pageData.SEO.title}>
      {/*use default SEOfrom gatsby-config*/}
      <SEO title={pageData.SEO.title} image={imageLookup[pageData.SEO.image]} />

      <div className="relative h-screen overflow-hidden">
        <img
          className="absolute object-cover w-full h-full overflow-hidden"
          src={imageLookup.LandingPageImage}
        />
        <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto top-1/5 md:w-160">
          {location.search ? (
            <React.Fragment>
              <div
                onClick={() => {
                  scan();
                }}
                className="flex flex-col justify-center w-full h-40 p-5 text-center bg-white rounded-md shadow-lg opacity-100"
              >
                New device found Add to Helium Share keys
              </div>

              <div className="flex flex-col justify-center w-full p-5 bg-white rounded-md shadow-lg opacity-100">
                <div>Device Eui {deveui}</div>
                <div>appeui Eui {appeui}</div>
                <div>appkey Eui {appkey}</div>
              </div>
              <div className="flex flex-col justify-center w-full h-20 p-5 rounded-md shadow-2xl opacity-100 bg-lime-400">
                Add to Helium
              </div>
            </React.Fragment>
          ) : (
            <div className="flex flex-col justify-center w-full h-40 p-5 text-center bg-white rounded-md shadow-lg opacity-100">
              Scan device with NFC reader
            </div>
          )}

          <div className="flex justify-center w-full gap-4 md:h-40">
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
      </div>
    </Layout>
  );
}

export default IndexPage;
