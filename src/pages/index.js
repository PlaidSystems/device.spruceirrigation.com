import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import IconButton from "../components/IconButton";

function IndexPage({ location, search }) {
  console.log(location.search);

  const [NDEFScan, setNDEFScan] = useState([
    "https://www.device.spruceirrigation.com",
    "6081F942CCE66854",
    "6081F962248666AE",
    "F876C1026FC4695D7BAC5143522A0065",
    "15,15",
    "1,1,1,0,0,1,1,0,0",
  ]);

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
          let recordArray = [];
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            console.log("Record type:  " + record.recordType);
            console.log("MIME type:    " + record.mediaType);
            console.log("=== data ===\n" + decoder.decode(record.data));
            recordArray.push(decoder.decode(record.data));
          }
          setNDEFScan(recordArray);
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
        await ndef.write({
          records: [
            {
              recordType: "url",
              data: "https://www.device.spruceirrigation.com",
            },
            {
              recordType: "text",
              data: "6081F942CCE66854",
            },
            {
              recordType: "text",
              data: "6081F962248666AE",
            },
            {
              recordType: "text",
              data: "F876C1026FC4695D7BAC5143522A0065",
            },
            {
              recordType: "text",
              data: "15,15",
            },
            {
              recordType: "text",
              data: "1,1,1,0,0,1,1,0,0",
            },
          ],
        });
        console.log("NDEF message written!");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Web NFC is not supported.");
    }
  }

  return (
    <Layout header={pageData.SEO.title}>
      {/*use default SEOfrom gatsby-config*/}
      <SEO title={pageData.SEO.title} image={imageLookup[pageData.SEO.image]} />

      <div className="relative h-screen overflow-hidden bg-slate-50">
        {/* <img
          className="absolute object-cover w-full h-full overflow-hidden"
          src={imageLookup.LandingPageImage}
        /> */}
        <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto top-1/5 md:w-160">
          {NDEFScan[0] ? (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full h-40 p-5 text-center bg-white rounded-md shadow-lg opacity-100">
                New device found Add to Helium Share keys
              </div>

              <div className="flex flex-col justify-center w-full p-5 bg-white rounded-md shadow-lg opacity-100">
                <div>Device Eui {NDEFScan[1]}</div>
                <div>appeui Eui {NDEFScan[2]}</div>
                <div>appkey Eui {NDEFScan[3]}</div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div
                onClick={() => {
                  scan();
                }}
                className="flex flex-col justify-center w-full h-40 p-5 text-center bg-green-300 rounded-md shadow-lg opacity-100"
              >
                Scan device with NFC reader
              </div>
              <div
                onClick={() => {
                  writeTag();
                }}
                className="flex flex-col justify-center w-full h-20 p-5 text-center bg-green-300 rounded-md shadow-lg opacity-100"
              >
                Write Tag
              </div>
            </React.Fragment>
          )}
          <div className="flex flex-col justify-center w-full h-auto gap-3">
            <div className="flex flex-col justify-center w-full p-2 rounded-md shadow-2xl opacity-100 bg-slate-300">
              {NDEFScan[0]}
            </div>
            {NDEFScan.map((record) => (
              <div className="flex flex-col justify-center w-full p-2 rounded-md shadow-2xl opacity-100 bg-slate-300">
                {record}
              </div>
            ))}
          </div>
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
