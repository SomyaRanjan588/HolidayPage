import { Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "../../css/index.css";
import Kolkatacardformat from "../Allcitycardformat";
import kolkata1 from "../../assest/images/kolkata1.jpg";
import kolkata2 from "../../assest/images/kolkata2.jpg";
import kolkata3 from "../../assest/images/kolkata3.jpg";
import kolkata4 from "../../assest/images/kolkata4.jpg";
import kolkata5 from "../../assest/images/kolkata5.jpg";

const kolkataProducts = [
  {
    id: 1,
    name: "Explore the Howrah Bridge",
    daynight: "02 Days/ 01 Nights",
    img: kolkata1,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(3000),
  },
  {
    id: 2,
    name: "Visit the Nico Park",
    daynight: "04 Days/ 03 Nights",
    img: kolkata2,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(4500),
  },
  {
    id: 3,
    name: "Indian Museum",
    daynight: "02 Days/ 03 Nights",
    img: kolkata3,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 4,
    name: "Visit the Science City",
    daynight: "02 Days/ 03 Nights",
    img: kolkata4,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 5,
    name: "Visit the Belur Math",
    daynight: "02 Days/ 03 Nights",
    img: kolkata5,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2000),
  },
];

function Kolkatatour() {
  return (
    <div>
      <div className="kolkatabackgroundbanner">
        <h4>Make Your Tour Memorable in Puri</h4>
        <div className="kolkatasearchfield">
          <div className="kolkataleftsearchfield">
            <input
              type="text"
              className="kolkataleftsearchfieldinputbox"
              placeholder="Search for a city"
            />
          </div>
          <div className="kolkatarightsearchfield">
            <button className="kolkatarightsearchfieldbtn">
              <Search className="kolkatasearchicon" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="kolkataupperbutton"></div>
      <div>
        <Container>
          <div className="kolkatasortingmaindiv">
            <p>Sort By:</p>
            <div className="kolkatasortingmenudiv">
              <span>
                <button className="kolkatapricebutton">Price</button>
              </span>

              <span>
                {" "}
                <button className="kolkatapopularbutton">Popular place</button>
              </span>
              <span>
                <button className="kolkatadurationbutton">Duration</button>
              </span>
            </div>
            <h4>Showing 5 Packages of Kolkata</h4>
          </div>
        </Container>
      </div>
      <div className="kolkatalowerbutton"></div>
      <div>
        <Container>
          <Kolkatacardformat products={kolkataProducts} />
        </Container>
      </div>
    </div>
  );
}

export default Kolkatatour;
