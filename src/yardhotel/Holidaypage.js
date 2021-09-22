import { LocationOn } from "@material-ui/icons";
import React from "react";
import Cardimages from "./Cardimages";
import "../css/index.css";
function Holidaypage() {
  return (
    <div>
      <div className="Holidaypagemaindiv">
        <div className="backgroundimage">
          <div className="imagecontent">
            <h2 className="title">Best Holiday Packages</h2>
            <br></br>

            <div className="searchbox">
              <div className="searchboxleft">
                <input
                  type="text"
                  className="inputbox"
                  placeholder="Search your holiday place"
                />
                <div>
                  <LocationOn style={{ fontSize: "25" }} />
                </div>
              </div>
              <div className="searchboxright">
                <button className="searchbtn">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardimagesdiv">
          <Cardimages />
        </div>
      </div>
    </div>
  );
}

export default Holidaypage;
