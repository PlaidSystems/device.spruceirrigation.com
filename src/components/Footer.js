import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoBlock from "./LogoBlock";
import { iconLookup } from "../utilities/iconLookup";

export function Footer() {
  return (
    <footer className="h-40">
      <div className="flex flex-col justify-between w-full mx-auto md:flex-row md:w-4/5">
        <div className="hidden w-1/2 p-10 md:block">
          <LogoBlock showLabel={true} size="lg" />
        </div>

        <div className="flex flex-col w-full gap-2 px-4 pt-10 align-middle md:w-1/5">
          {/*<SubscribeAxios id="subscribe-marketing" color="blue"/>*/}

          <div className="font-light text-gray-500">
            <FontAwesomeIcon icon={iconLookup.faCopyright} size="sm" />
            2023 EmbarkableLabs
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
