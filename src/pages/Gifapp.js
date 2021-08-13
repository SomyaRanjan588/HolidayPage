import React from "react";
import "../App.css";
import Divider from "@material-ui/core/Divider";
import LeftApp from "./Gifapp1";
import RightApp from "./Gifapp2";

function Gifapp() {
  return (
    <div>
      <div>
        <h4 className="title">Welcome to Random GIF Application</h4>
        <Divider b />
      </div>
      <div className="leftright">
        <LeftApp />
        <RightApp />
      </div>
    </div>
  );
}

export default Gifapp;
