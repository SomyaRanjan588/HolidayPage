import React, { useState } from "react";
import "./App.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Health",
    " Hotel",
    "Transport and Logistics",
    "Retail",
    "Travel and Tourism",
    "Agriculture",
    "Education",
    "Oil and gas",
    "Finance and Banking",
  ];
  return (
    <div className="App">
      <div className="maindiv">
        <input
          type="text"
          className="input"
          placeholder="What are you looking"
        ></input>

        <div className="dropdown">
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {" "}
            industry
            {selected}
            <ArrowDropDownIcon />
          </div>
          {isActive && (
            <div className="dropdown-content">
              {options.map((options) => (
                <div
                  onClick={(e) => {
                    setSelected(options);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {options}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="search">
          <SearchIcon />
          search
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
