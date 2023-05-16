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
    "DEV1F942CCE66854",
    "JOINF962248666AE",
    "APP6C1026FC4695D7BAC5143522A0065",
    "0",
    "0",
    "LORA1-V3",
    "1515",
    "21008",
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
              id: "1",
              data: "https://www.device.spruceirrigation.com",
            },
            {
              recordType: "text",
              id: "2",
              data: NDEFScan[1],
            },
            {
              recordType: "text",
              id: "3",
              data: NDEFScan[2],
            },
            {
              recordType: "text",
              id: "4",
              data: NDEFScan[3],
            },
            {
              recordType: "text",
              id: "5",
              data: NDEFScan[4],
            },
            {
              recordType: "text",
              id: "6",
              data: NDEFScan[5],
            },
            {
              recordType: "text",
              id: "7",
              data: NDEFScan[6],
            },
            {
              recordType: "text",
              id: "8",
              data: NDEFScan[7],
            },
            {
              recordType: "text",
              id: "9",
              data: NDEFScan[8],
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
          <div className="absolute z-10 flex justify-center w-full py-5 bg-red-300 bottom-1/3">
            {nfcMessage}
          </div>
        )}
        {NDEFScan[0] && (
          <React.Fragment>
            <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto bottom-1/10 md:w-160">
              <div
                onClick={() => {
                  writeTag();
                }}
                className="flex flex-col self-center justify-center h-20 p-5 mx-auto text-center rounded-md shadow-lg bg-slate-300 w-80"
              >
                {NDEFScan[5] !== "1" ? (
                  <span className="text-slate-700">Activate Device</span>
                ) : (
                  <span className="text-red-300">De-activate Device</span>
                )}
              </div>
              <div
                onClick={() => {
                  scan();
                }}
                className="flex flex-col self-center justify-center h-20 p-5 mx-auto text-center rounded-md shadow-lg bg-slate-400 w-80"
              >
                Scan device
              </div>
            </div>
          </React.Fragment>
        )}
        {!NDEFScan[0] && (
          <div
            onClick={() => {
              scan();
            }}
            className="flex justify-center p-5 mx-auto mt-40 bg-green-300 rounded-lg shadow-lg w-80 h-80"
          >
            <div className="flex self-center text-4xl text-center text-black">
              Scan device with NFC
            </div>
          </div>
        )}
        <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto md:w-160">
          {NDEFScan[5] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full h-32 p-5 m-auto bg-white rounded-lg shadow-lg opacity-100">
                <div className="text-3xl text-center text-green-600">
                  {NDEFScan[6]}
                </div>
                <div className="text-center text-md">device name</div>
              </div>
            </React.Fragment>
          )}

          {NDEFScan[1] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full p-5 text-sm bg-white rounded-md shadow-lg opacity-100">
                <div className="mt-2 text-xs text-left text-slate-700">
                  Device Eui
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[1]}
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  Join Eui
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[2]}
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  App Key
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[3]}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
