import React from "react";

import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

import PhoneIcon from "@material-ui/icons/Phone";
import { AiOutlineShop } from "react-icons/ai";
import SearchIcon from "@material-ui/icons/Search";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { TiThMenu } from "react-icons/ti";
import { BiBox, BiSearchAlt2 } from "react-icons/bi";
import { IoIosArchive, IoIosMore } from "react-icons/io";
import Slide from "./Slider";
import Marketlist from "./Marketplacelist";
import Covidproducts from "./MarketplaceCovidproducts";
import CovidItesm from "./Covidproducts";
import Medicaldevice from "./MedicalDevice";
import Marketbazar from "./Marketbazar";
import Dentalitems from "./Dentalproducts";
import Todaydeal from "./Todaydeal";
import Hospitalitems from "./Hospital";
import Marketbazarfreedom from "./Marketbazarfreedom";
import LabItems from "./Lab";
import CovidImage from "./Covidimage";
import Clientsay from "./Clientreview";

function Homepage() {
  return (
    <div className="App">
      <div className="mainheader">
        <div className="mainheaderleft" style={{ display: "flex" }}>
          <div>
            <img src="./logo.png" className="img-fluid" alt="Media Bazar"></img>
          </div>
          <div className="firstheaderlist">
            <ul className="firstheaderlistul">
              <li>OUR STORY</li>
              <li>VIZI</li>
              <li>REFURBISHED</li>
              <li>INNOVATIVE PRODUCTS</li>
            </ul>
          </div>
        </div>

        <div className="mainheaderright">
          <div className="firstheaderlistsell">
            <p className="firstheaderlistsellpara1">SELL ON MEDIKABAZAR</p>
            <p className="firstheaderlistsellvrline">|</p>
            <span className="firstheaderlistsellphone">
              <PhoneIcon style={{ width: 15 }} />
            </span>
            <span className="firstheaderlistsellphonenumber">
              +91 9707232323
            </span>
            <span className="firstheaderlistsellphone2">
              <PhoneIcon style={{ width: 35 }} />
            </span>
          </div>
        </div>
      </div>
      <div className="navbaritem">
        <div className="navbaritemwrapper">
          <div className="hamburgermenu">
            <span>
              <TiThMenu color="white" size="25px" />
            </span>
            <span className="menutext">Categories</span>
          </div>
          <div className="navbarinputbox">
            <input
              className="navbarinputboxfield"
              placeholder="Search India's largest catalogue of Medical Supplies  "
            ></input>
            <span className="navbarsearchicon">
              <SearchIcon />
            </span>
          </div>
          <div className="navbariconwrapper">
            <div className="navbarsigninicon">
              <span>
                <PersonOutlineIcon />
              </span>
              <br></br>
              <span>Sign In</span>
            </div>
            <div className="navbarsigninicon">
              <span>
                <LocalMallIcon />
              </span>
              <br></br>
              <span>Offers</span>
            </div>
            <div className="navbarsigninicon">
              <span>
                <ShoppingCartIcon />
              </span>
              <br></br>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="BottomNavigationwrapperclass">
        <div className="BottomNavigationshop">
          <span>
            <AiOutlineShop size="30px" />
          </span>
          <br></br>
          <span>Shop</span>
        </div>
        <div className="BottomNavigationbox">
          <span>
            <IoIosArchive size="30px" />
          </span>
          <br></br>
          <span>Products</span>
        </div>
        <div className="BottomNavigationprofile">
          <span>
            <BiBox size="30px" />
          </span>
          <br></br>
          <span>Profile</span>
        </div>
        <div className="BottomNavigationsearch">
          <span>
            <BiSearchAlt2 size="30px" />
          </span>
          <br></br>
          <span>Search</span>
        </div>
        <div className="BottomNavigationmore">
          <span>
            <IoIosMore size="30px" />
          </span>
          <br></br>
          <span>More</span>
        </div>
      </div>
      <div>
        <Slide />
      </div>
      <div>
        <Marketlist />
      </div>
      <div>
        <Covidproducts />
      </div>
      <div>
        <CovidItesm />
      </div>
      <div>
        <Medicaldevice />
      </div>
      <div>
        <Marketbazar />
      </div>
      <div>
        <Dentalitems />
      </div>
      <div>
        <Todaydeal />
      </div>
      <div>
        <Hospitalitems />
      </div>
      <div>
        <Marketbazarfreedom />
      </div>
      <div>
        <LabItems />
      </div>
      <div>
        <CovidImage />
      </div>
      <div className="ClientTestimonial">
        <h3>
          What Our{" "}
          <span style={{ color: "#ec6303" }}>Clients Say About Us</span>
        </h3>
      </div>
      <div>
        <Clientsay />
      </div>
    </div>
  );
}

export default Homepage;
