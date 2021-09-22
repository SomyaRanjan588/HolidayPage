import { Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "../../css/index.css";
import Puricardformat from "../Allcitycardformat";
import puri1 from "../../assest/images/puri1.jpg";
import puri2 from "../../assest/images/puri2.jpg";
import puri3 from "../../assest/images/puri3.jpg";
import puri4 from "../../assest/images/puri6.jpg";
import puri5 from "../../assest/images/puri5.jpg";

const puriProducts = [
  {
    id: 1,
    name: "Puri Sea Beach",
    daynight: "02 Days/ 01 Nights",
    img: puri1,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(3000),
  },
  {
    id: 2,
    name: "Explore the Konark Temple(Ex-puri)",
    daynight: "04 Days/ 03 Nights",
    img: puri2,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(4500),
  },
  {
    id: 3,
    name: "Chandra Bhaga Sea Beach",
    daynight: "02 Days/ 03 Nights",
    img: puri3,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 4,
    name: "Shree Jagannath Temple",
    daynight: "02 Days/ 03 Nights",
    img: puri4,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 5,
    name: "Visit Mausi Maa Temple",
    daynight: "02 Days/ 03 Nights",
    img: puri5,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2000),
  },
];

function Puritour() {
  return (
    <div>
      <div className="puribackgroundbanner">
        <h4>Make Your Tour Memorable in Puri</h4>
        <div className="purisearchfield">
          <div className="purileftsearchfield">
            <input
              type="text"
              className="purileftsearchfieldinputbox"
              placeholder="Search for a city"
            />
          </div>
          <div className="purirightsearchfield">
            <button className="purirightsearchfieldbtn">
              <Search className="purisearchicon" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <div className="purisortingmaindiv">
            <p>Sort By:</p>
            <div className="purisortingmenudiv">
              <span>
                <button className="puripricebutton">Price</button>
              </span>

              <span>
                {" "}
                <button className="puripopularbutton">Popular place</button>
              </span>
              <span>
                <button className="puridurationbutton">Duration</button>
              </span>
            </div>
            <h4>Showing 5 Packages of Puri</h4>
          </div>
        </Container>
      </div>
      <div className="purilowerbutton"></div>
      <div>
        <Container>
          <Puricardformat products={puriProducts} />
        </Container>
      </div>
    </div>
  );
}

export default Puritour;
