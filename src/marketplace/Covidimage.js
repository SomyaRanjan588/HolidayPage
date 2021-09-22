import React from "react";
import "../App.css";

function Covidimage() {
  return (
    <div>
      <div className="covidimagemaindiv">
        <img
          src="https://www.medikabazaar.com/media/home_banner_image/default/Covid-Banner-9_6.png"
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            display: "block",
            borderRadius: "5px",
          }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Covidimage;
