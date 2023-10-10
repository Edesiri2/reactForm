import React from "react";

import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
const Navbar: React.FC = () => {
  const custodianLogo = require("../../assets/cutodian_logo.png")
  return (
    <nav className="w-[fit] bg-[#900000] h-[100px] text-white flex gap-20 px-2 py-4 ">
      <div className=" w-[150px]">
        <img  src={custodianLogo} />
      </div>
      <div className=" w-[50%] mt-6">
        {/* <ul className="flex  gap-2 justify-around text-sm">
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>KEY MOMENTS</li>
          <li>CLAIM</li>
          <li>CONTACT</li>
        </ul> */}
      </div>
      <div className="w-[30%] flex gap-4  justify-between">
        <div className="w-[10%] flex gap-4 ml-4 mt-6">
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