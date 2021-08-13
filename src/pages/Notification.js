import React from "react";
import "../App.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

import { ImMan } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { CgSearchFound } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { BsFillChatDotsFill } from "react-icons/bs";
import Not from "../Car";
import Navbar from "./Notnav";
import Notnav from "./Notnav";

function Notification() {
  return (
    <div>
      <div className="div100"></div>
      <div className="div101">
        <div className="div102">
          <p className="para100">
            dub
            <ImMan />
            zzle
          </p>

          <p className="para101">Dubai</p>
          <span className="span101">
            <IoIosArrowDown color="black" />
          </span>
          <div className="div103">
            <span className="span102">
              <NotificationsNoneIcon />
              <p className="para102">Notifications</p>
            </span>
            <span className="span102">
              <SearchIcon />
              <p>Searches</p>
            </span>
            <span className="span102">
              <FavoriteBorderIcon />
              <p>Favorties</p>
            </span>
            <span className="span102">
              <InsertCommentIcon />
              <p>My Charts</p>
            </span>
            <span className="span102">
              <p className="para103">A</p>
            </span>
            <span className="span103">
              <p className="para104">Ashirbad</p>
            </span>
            <span className="span101">
              <IoIosArrowDown color="black" />
            </span>
            <span className="span104">
              <button className="btn1">Place Your Ad</button>
            </span>
          </div>
        </div>
      </div>
      <div className="div104"></div>
      <div>
        <Notnav />
      </div>
      <div className="div104"></div>
      <div className="firstdiv">
        <p className="firstpara1">Notifications</p>
      </div>
      <div className="seconddiv">
        <Not />
      </div>
      <div className="thirddiv">
        <p className="secondpara2">No notifications...yet! </p>
      </div>
      <div className="fourdiv">
        <p className="thirdpara3">
          View ad recommendations and news by dubizzle, etc..
        </p>
      </div>
    </div>
  );
}

export default Notification;
