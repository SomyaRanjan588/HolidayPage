import { Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "../../css/index.css";
import Darangibadicardformat from "../Allcitycardformat";
import Darangibadi1 from "../../assest/images/darangibadi1.jpg";
import Darangibadi2 from "../../assest/images/darangibadi2.jpg";
import Darangibadi3 from "../../assest/images/darangibadi3.jpg";
import Darangibadi4 from "../../assest/images/darangibadi4.jpg";

const darangibadiProducts = [
  {
    id: 1,
    name: "Explore the Kalinga Ghat",
    daynight: "03 Days/ 02 Nights",
    img: Darangibadi1,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 2,
    name: "Visit the Lover's Point",
    daynight: "04 Days/ 03 Nights",
    img: Darangibadi2,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(5000),
  },
  {
    id: 3,
    name: "Explore the collest watter fall",
    daynight: "02 Days/ 03 Nights",
    img: Darangibadi3,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
  {
    id: 4,
    name: "Enjoy the Hill Park View",
    daynight: "02 Days/ 03 Nights",
    img: Darangibadi4,
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
  },
];
function Darangibadi() {
  return (
    <div>
      <div className="darangibadibackgroundbanner">
        <h4>Visit the Kasmir of Odisha</h4>
        <div className="darangibadisearchfield">
          <div className="darangibadileftsearchfield">
            <input
              type="text"
              className="darangibadileftsearchfieldinputbox"
              placeholder="Search for a city"
            />
          </div>
          <div className="darangibadirightsearchfield">
            <button className="darangibadirightsearchfieldbtn">
              <Search className="darangibadisearchicon" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="darangibadiupperborderbuttom"></div>
      <div>
        <Container>
          <div className="darangibadisortingmaindiv">
            <p>Sort By:</p>
            <div className="darangibadisortingmenudiv">
              <span>
                <button className="darangibadipricebutton">Price</button>
              </span>

              <span>
                {" "}
                <button className="darangibadipopularbutton">
                  Popular place
                </button>
              </span>
              <span>
                <button className="darangibadidurationbutton">Duration</button>
              </span>
            </div>
            <h4>Showing 4 Packages of Darangibadi</h4>
          </div>
        </Container>
      </div>
      <div className="darangibadilowerbutton"></div>
      <div>
        <Container>
          <Darangibadicardformat products={darangibadiProducts} />
        </Container>
      </div>
    </div>
  );
}

export default Darangibadi;
