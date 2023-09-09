import React, { useState } from "react";
import Modal from "react-modal";

import { CloseButton } from "./Button";
import { TrialSignupAxios } from "./TrialSignupAxios";

export function SubscribeModal({
  CTAButtonText,
  data,
  event_id,
  buttonColor = "purple",
  textColor = "white",
  small,
  creditcard,
  onSubmit,
}) {
  const [isOpen, toggleOpen] = useState(false);

  function ga(result) {
    //process.env.GATSBY_PRODUCTION === 'true' && typeof window !== 'undefined' && window.gtag('event', `modal_${result}`, { 'event_id': result });
  }

  const hoverColor = "pink";
  const bgcolor1 = "purple-700";
  const bgcolor2 = "orange-200";
  const bgcolor3 = "pink-600";

  return (
    <div>
      <div className="flex flex-col max-w-sm">
        <button
          className={`px-4 md:px-8 text-${textColor} bg-${buttonColor}-500 bg-opacity-75 transition-colors-shadow duration-500 
					rounded-lg shadow-xl ${
            small ? "py-2 text-sm md:text-lg" : "py-3 text-lg md:text-xl"
          } focus:outline-none 
					hover:bg-${hoverColor}-500 hover:bg-opacity-100`}
          onClick={() => toggleOpen(true) + ga(event_id)}
        >
          {CTAButtonText}
        </button>
        {creditcard && (
          <span className="flex justify-center my-1 text-sm text-gray-500">
            NO CREDIT CARD REQUIRED
          </span>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        style={customStyles}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <div
          className={`w-screen h-screen md:h-160 overflow-hidden md:max-w-6xl p-4 m-0 bg-gradient-to-br from-${bgcolor1} via-${bgcolor3} to-${bgcolor2}`}
        >
          <CloseButton right onClick={() => toggleOpen(false)} />

          <div className="flex flex-col w-full lg:flex-row">
            <div className="w-full mx-auto">
              <TrialSignupAxios
                color="indigo"
                inputText={data.inputText}
                buttonText={data.buttonText}
                event_id={event_id}
                onSubscribe={toggleOpen}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const customStyles = {
  content: {
    position: "fixed",
    overflow: "hidden",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    padding: "none",
    borderRadius: "30px",
    zIndex: "1000",
    border: "none",
  },
  overlay: {
    zIndex: "1000",
    position: "fixed",
    overflow: "hidden",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(5px)",
  },
};
