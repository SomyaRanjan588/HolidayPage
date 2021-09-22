import { Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "../../css/index.css";
import Bhubaneswarcardformat from "../Allcitycardformat";
import bbsrctc from "../../assest/images/bbsrctc.jpg";
import bbsr2 from "../../assest/images/bbsr2.jpg";
import bbsr3 from "../../assest/images/bbsr3.jpg";

const bhubaneswarProducts = [
  {
    id: 1,
    name: "Bhubaneswar-cuttack",
    daynight: "03 Days/ 02 Nights",
    img: bbsrctc,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(3500),
  },
  {
    id: 2,
    name: "Explore the Bhubaneswar City",
    daynight: "04 Days/ 03 Nights",
    img: bbsr2,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(4500),
  },
  {
    id: 3,
    name: "Explore the biggest shooping mall",
    daynight: "02 Days/ 03 Nights",
    img: bbsr3,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
];
function Bhubaneswartour() {
  return (
    <div style={{ minHeight: "150vh" }}>
      <div className="backgroundbanner">
        <h4>Make A Memorable Tour to Bhubaneswar</h4>
        <div className="searchfield">
          <div className="leftsearchfield">
            <input
              type="text"
              className="leftsearchfieldinputbox"
              placeholder="Search for a city"
            />
          </div>
          <div className="rightsearchfield">
            <button className="rightsearchfieldbtn">
              <Search className="searchicon" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="upperborderbuttom"></div>
      <div>
        <Container>
          <div className="sortingmaindiv">
            <p>Sort By :</p>
            <div className="sortingmenudiv">
              <span>
                <button className="pricebutton">Price</button>
              </span>

              <span>
                {" "}
                <button className="popularbutton">Popular place</button>
              </span>
              <span>
                <button className="durationbutton">Duration</button>
              </span>
            </div>
            <h4>Showing 3 Packages of Bhubaneswar</h4>
          </div>
        </Container>
      </div>
      <div className="lowerborderbuttom"></div>
      <div>
        <Container>
          <Bhubaneswarcardformat products={bhubaneswarProducts} />
        </Container>
      </div>
    </div>
  );
}

export default Bhubaneswartour;
