import React from "react";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
const custodianLogo = require("../assets/logo-white.png");

const Navbar = () => {
  return (
    <nav className="w-[fit] bg-[#900000] text-white flex gap-20 px-[7rem] py-4 flex flex-row justify-between">
      <div className=" w-[20%]">
        <img src={custodianLogo} />
      </div>
      <div className="w-[30%] flex justify-end">
        <div className="flex gap-4 mt-6">
          <div>
            <FaTwitter />{" "}
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaGithub />
          </div>
        </div>

        {/* <div className="w-[10%] flex gap-1 mb-6 border-white ml-4 mt-8"><button>ChatMax </button></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
