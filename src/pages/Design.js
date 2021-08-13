import React from "react";
import "../App.css";
import { ImMan } from "react-icons/im";

import { IoLogoModelS } from "react-icons/io";
import { IoMdGift } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { GiSofa } from "react-icons/gi";

function Design() {
  return (
    <div>
      <div className="div1"></div>
      <div className="div2">
        <p className="para1">Looking For</p>
      </div>
      <div className="div3"></div>
      <div>
        <p className="para2">Hello, what are you listing today?</p>
      </div>
      <div className="div4">
        <p className="para3">Select the area that best suits your ad</p>
      </div>
      <div className="grand-parent">
        <div className="parent">
          <div className="child">
            <IoLogoModelS color="blue" size="50px" />
            <p className="childpara">Motors</p>
          </div>
          <div className="child">
            <IoMdGift color="blue" size="50px" />
            <p className="childpara">Jobs</p>
          </div>
          <div className="child">
            <ImHome color="blue" size="50px" />
            <p className="childpara">Property for Sale</p>
          </div>

          <div className="child">
            <FaBuilding color="blue" size="50px" />
            <p className="childpara">Motors</p>
          </div>
          <div className="child">
            <IoIosMan color="blue" size="50px" />
            <IoIosMan color="blue" size="50px" />
            <p className="childpara">Motors</p>
          </div>
          <div className="child">
            <GiSofa color="blue" size="50px" />
            <p className="childpara">Motors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
