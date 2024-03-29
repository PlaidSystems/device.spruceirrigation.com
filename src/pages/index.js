import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData.json";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import IconButton from "../components/IconButton";

function IndexPage({ location, search }) {
  console.log(location.search);

  const test = [
    "https://www.device.spruceirrigation.com",
    "PS-LORASMS-02",
    "2",
    "100012",
    "LORA1-V3",
    "on",
    "2" /*measure */,
    "10" /*report*/,
    "1" /* reportomcahnge */,
    "2" /* erport port */,
    "117" /* fields */,
    "0" /* setscale */,
    "45" /* scaleFactor */,
    "2370",
    "2000",
    "2370",
    "2000",
    "1F942CCE66854",
    "F962248666AE",
    "6C1026FC4695D7BAC5143522A0065",
    "21008",
  ];

  // const [NDEFRecords, setNDEFRecords] = useState([]);
  const [NDEFScan, setNDEFScan] = useState([]);
  const [nfcMessage, setNfcMessage] = useState(null);

  const [measurement, setMeasurement] = useState(null);
  const [interval, setInterval] = useState(null);
  const [reportOnChange, setReportOnChange] = useState(
    NDEFScan[8] === "1" ? true : false
  );

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

  async function writeTag(event) {
    console.log(event);
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      setNfcMessage("Write to device now");

      try {
        await ndef.write({
          records: [
            {
              recordType: "url",
              data: NDEFScan[0],
            },
            {
              recordType: "text",
              data: NDEFScan[1],
            },
            {
              recordType: "text",
              data: NDEFScan[2],
            },
            {
              recordType: "text",
              data: NDEFScan[3],
            },
            {
              recordType: "text",
              data: NDEFScan[4],
            },
            {
              recordType: "text",
              data: event,
            },
            {
              recordType: "text",
              data: NDEFScan[6],
            },
            {
              recordType: "text",
              data: NDEFScan[7],
            },
            {
              recordType: "text",
              data: NDEFScan[8],
            },
            {
              recordType: "text",
              data: NDEFScan[9],
            },
            {
              recordType: "text",
              data: NDEFScan[10],
            },
            {
              recordType: "text",
              data: NDEFScan[11],
            },
            {
              recordType: "text",
              data: NDEFScan[12],
            },
            {
              recordType: "text",
              data: NDEFScan[13],
            },
            {
              recordType: "text",
              data: NDEFScan[14],
            },
            {
              recordType: "text",
              data: NDEFScan[15],
            },
            {
              recordType: "text",
              data: NDEFScan[16],
            },
            {
              recordType: "text",
              data: NDEFScan[17],
            },
            {
              recordType: "text",
              data: NDEFScan[18],
            },
            {
              recordType: "text",
              data: NDEFScan[19],
            },
            {
              recordType: "text",
              data: NDEFScan[20],
            },
          ],
        });
        setNfcMessage("Done");
        console.log("NDEF message written!");
      } catch (error) {
        console.log(error);
      }
    } else {
      setNfcMessage("NFC is not supported");
      console.log("Web NFC is not supported.");
    }
  }

  async function resetTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      setNfcMessage("Write to device now");
      try {
        await ndef.write({
          records: [
            {
              recordType: "text",
              id: "1",
              data: "reset",
            },
          ],
        });
        setNfcMessage("Done");
        console.log("NDEF message written!");
      } catch (error) {
        console.log(error);
      }
    } else {
      setNfcMessage("NFC is not supported");
      console.log("Web NFC is not supported.");
    }
  }

  function inputChange(event) {
    //const target = event.target
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target);
    switch (name) {
      case "measurement":
        NDEFScan[6] = value;
        // setMeasurement(value);
        break;
      case "interval":
        NDEFScan[7] = value;
        // setInterval(value);
        break;
      case "onchange":
        NDEFScan[8] = value === true ? "1" : "0";
        setReportOnChange(!reportOnChange);
        break;
      // case 'password':
      //   setPassword(value);
      //   break;
      // case 'confirmPassword':
      //   setConfirmPassword(value);
      //   break;
      // case 'teamName':
      //   setTeamName(value);
      //   break;
      default:
        break;
    }
    setNDEFScan(NDEFScan);
    console.log(NDEFScan);
  }

  return (
    // <Layout header={pageData.title}>
    <Layout header="Harmony">
      {/*use default SEOfrom gatsby-config*/}
      <SEO title="Harmony" image={imageLookup.LogoIcon} />

      <div className="relative h-screen overflow-hidden bg-slate-50">
        {nfcMessage && (
          <div className="absolute z-10 flex justify-center w-full py-5 bg-red-300 bottom-1/3">
            {nfcMessage}
          </div>
        )}

        {NDEFScan[0] && (
          <React.Fragment>
            <div className="absolute flex flex-row justify-center w-full gap-6 p-4 mx-auto bottom-1/10 md:w-160">
              <div
                onClick={() => {
                  writeTag("on");
                }}
                className="flex flex-col self-center justify-center w-64 h-20 p-5 mx-auto text-center rounded-md shadow-lg bg-slate-300"
              >
                {NDEFScan[5] === "off" ? (
                  <span className="text-slate-700">Turn On Device</span>
                ) : (
                  <span className="text-red-300">Write to Device</span>
                )}
              </div>
              <div
                onClick={() => {
                  scan();
                }}
                className="flex flex-col self-center justify-center w-64 h-20 p-5 mx-auto text-center rounded-md shadow-lg bg-slate-400"
              >
                Read device
              </div>
            </div>
            <div className="absolute bottom-0 flex flex-row items-stretch justify-between w-full gap-2 p-4">
              <div
                onClick={() => {
                  writeTag("off");
                }}
                className="flex w-full h-12 p-3 text-center bg-red-300 rounded-md shadow-lg justify-self-stretch"
              >
                Turn Off Device
              </div>
              <div
                onClick={() => {
                  resetTag();
                }}
                className="flex justify-center w-12 h-12 p-3 text-center bg-red-300 rounded-md shadow-lg"
              >
                Reset
              </div>
            </div>
          </React.Fragment>
        )}

        {/* {NDEFScan[5] == "on" && (
          <React.Fragment>
            <div className="absolute bottom-0 flex flex-row items-stretch justify-between w-full gap-2 p-4">
              <div
                onClick={() => {
                  writeTag();
                }}
                className="flex w-full h-12 p-3 text-center bg-red-300 rounded-md shadow-lg justify-self-stretch"
              >
                Turn Off Device
              </div>
              <div
                onClick={() => {
                  writeTag();
                }}
                className="flex justify-center w-12 h-12 p-3 text-center bg-red-300 rounded-md shadow-lg"
              >
                Reset
              </div>
            </div>
          </React.Fragment>
        )} */}

        {!NDEFScan[0] && (
          <div
            onClick={() => {
              scan();
            }}
            className="flex justify-center p-5 mx-auto mt-40 bg-purple-500 rounded-lg shadow-lg w-80 h-80"
          >
            <div className="flex self-center text-4xl text-center text-white">
              Scan device with NFC
            </div>
          </div>
        )}

        <div className="absolute flex flex-col justify-center w-full gap-6 p-6 mx-auto md:w-160">
          {NDEFScan[5] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full h-32 p-5 m-auto bg-white rounded-lg shadow-lg opacity-100">
                <div className="text-xs text-left">Name</div>
                <div className="text-3xl text-center text-green-600 bg-slate-300">
                  {NDEFScan[4]}
                </div>

                <div className="mt-2 text-center text-sms text-slate-700">
                  Serial: <span>{NDEFScan[3]}</span>
                </div>
                <div className="mt-2 text-xs text-center text-slate-700">
                  model: <span>{NDEFScan[1]}</span>
                </div>
              </div>
            </React.Fragment>
          )}

          {/* {NDEFScan[5] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-1/3 h-16 p-5 m-auto bg-white rounded-lg shadow-lg opacity-100">
                <div className="text-3xl text-center text-green-600">S</div>
              </div>
              <div className="flex flex-col justify-center w-1/3 h-16 p-5 m-auto bg-white rounded-lg shadow-lg opacity-100">
                <div className="text-3xl text-center text-green-600">S</div>
              </div>
              <div className="flex flex-col justify-center w-1/3 h-16 p-5 m-auto bg-white rounded-lg shadow-lg opacity-100">
                <div className="text-3xl text-center text-green-600">K</div>
              </div>
            </React.Fragment>
          )} */}

          {NDEFScan[1] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full gap-1 p-5 text-sm bg-white rounded-md shadow-lg opacity-100">
                <div className="mt-2 text-left underline text-md text-slate-700">
                  Reporting
                </div>
                {/* <div className="mt-2 text-xs text-left text-slate-700">
                  If measurement interval is smaller than reporting interval,
                  the report is only sent when there is a change or at the
                  reporting interval.
                </div> */}
                <div className="flex flex-row justify-between text-slate-800">
                  <div className="mt-2 text-left text-md ">
                    Measurement Interval (minutes)
                  </div>
                  <input
                    className="w-12 p-1 text-center rounded-md bg-slate-200 text-md"
                    placeholder={NDEFScan[6]}
                    name="measurement"
                    label="test"
                    onChange={inputChange}
                  />
                </div>
                <div className="flex flex-row justify-between text-slate-800 ">
                  <div className="mt-2 text-left text-md">
                    Reporting Interval (minutes)
                  </div>
                  <input
                    className="w-12 p-1 text-center rounded-md bg-slate-200 text-md"
                    placeholder={NDEFScan[7]}
                    name="interval"
                    onChange={inputChange}
                  />
                </div>
                <div className="flex flex-row justify-between text-slate-800">
                  <div className="mt-2 text-md">Report on change</div>
                  <input
                    type="checkbox"
                    className="w-6 p-1 mx-3 text-center rounded-md bg-slate-300 text-md"
                    checked={reportOnChange}
                    name="onchange"
                    onChange={inputChange}
                    value={!reportOnChange}
                  />
                </div>
              </div>
            </React.Fragment>
          )}

          {NDEFScan[30] && (
            <React.Fragment>
              <div className="flex flex-col justify-center w-full p-5 text-sm bg-white rounded-md shadow-lg opacity-100">
                <div className="mt-2 text-sm text-left text-slate-700">
                  Reporting Format
                </div>
                {/* <div className="mt-2 text-xs text-left text-slate-700">
                  If measurement interval is smaller than reporting interval,
                  the report is only sent when there is a change or at the
                  reporting interval.
                </div> */}
                <div className="mt-2 text-xs text-left text-slate-700">
                  1 = Battery/TemperatureC/Moisture/RawMoisture
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  2 = CayenneLPP Battery/TemperatureC/Moisture/A/B
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  3 = Custom Fields
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[8]}
                </div>
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
                  {NDEFScan[17]}
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  Join Eui
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[18]}
                </div>
                <div className="mt-2 text-xs text-left text-slate-700">
                  App Key
                </div>
                <div className="p-2 text-center rounded-sm bg-slate-300 text-md">
                  {NDEFScan[19]}
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
