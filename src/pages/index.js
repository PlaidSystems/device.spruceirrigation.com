import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import IconButton from "../components/IconButton";

function IndexPage({ location, search }) {
  console.log(location.search);

  const test = [
    "https://www.device.spruceirrigation.com",
    "6081F942CCE66854",
    "6081F962248666AE",
    "F876C1026FC4695D7BAC5143522A0065",
    "on",
    "join",
    "21.2",
    "65",
    "3200",
    "2100",
  ];

  const [NDEFScan, setNDEFScan] = useState([]);
  const [nfcMessage, setNfcMessage] = useState(null);

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

  // useEffect(() => {

  // }, [NDEFScan]);
  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy);}}

  const pageData = getObjectFromArray(
    landingPageData,
    "name",
    "embarkablelabs"
  );

  async function scan() {
    if ("NDEFReader" in window) {
      setNfcMessage("Scan device now");
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
          setNfcMessage("");
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      setNfcMessage("NFC is not supported");
      console.log("Web NFC is not supported.");
    }
  }

  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      setNfcMessage("Write to device now");
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
        setNfcMessage("");
        console.log("NDEF message written!");
      } catch (error) {
        console.log(error);
      }
    } else {
      setNfcMessage("NFC is not supported");
      console.log("Web NFC is not supported.");
    }
  }

  return (
    <Layout header={pageData.SEO.title}>
      {/*use default SEOfrom gatsby-config*/}
      <SEO title={pageData.SEO.title} image={imageLookup[pageData.SEO.image]} />

      <div className="relative h-screen overflow-hidden bg-slate-50">
        {nfcMessage && (
          <div className="absolute z-10 flex justify-center w-full py-5 bg-red-300 bottom-1/5">
            {nfcMessage}
          </div>
        )}
        <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto md:w-160">
          {NDEFScan[4] !== "on" && (
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
          )}

          {NDEFScan[6] && (
            <React.Fragment>
              <div className="flex flex-col justify-center p-5 m-auto bg-white rounded-lg shadow-lg opacity-100 w-80 h-80">
                <div className="text-center text-green-600 text-7xl">
                  {NDEFScan[6]}
                  <span className="text-3xl">%</span>
                </div>
                <div className="text-xl text-center">Soil Moisture</div>
              </div>
            </React.Fragment>
          )}

          {NDEFScan[7] && (
            <React.Fragment>
              <div className="flex flex-col justify-center p-5 m-auto bg-white rounded-lg shadow-lg opacity-100 w-80">
                <div className="text-center">Temperature {NDEFScan[7]}F</div>
              </div>
            </React.Fragment>
          )}

          {NDEFScan[1] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full p-5 bg-white rounded-md shadow-lg opacity-100">
                <div>Device Eui {NDEFScan[1]}</div>
                <div>appeui Eui {NDEFScan[2]}</div>
                <div>appkey Eui {NDEFScan[3]}</div>
              </div>
            </React.Fragment>
          )}

          <div className="flex flex-col justify-center w-full h-auto gap-3">
            {NDEFScan[4] && (
              <div className="flex flex-col justify-center w-full p-2 rounded-md shadow-2xl opacity-100 bg-slate-300">
                {NDEFScan[4]}
              </div>
            )}
            {NDEFScan[5] && (
              <div className="flex flex-col justify-center w-full p-2 rounded-md shadow-2xl opacity-100 bg-slate-300">
                {NDEFScan[5]}
              </div>
            )}
          </div>
          <React.Fragment>
            <div
              onClick={() => {
                scan();
              }}
              className="flex flex-col justify-center w-full h-20 p-5 text-center bg-green-300 rounded-md shadow-lg opacity-100"
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
            <div className="flex flex-col justify-center w-full h-20 p-5 text-center bg-white rounded-md shadow-lg opacity-100">
              New device found Add to Helium Share keys
            </div>
          </React.Fragment>
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
