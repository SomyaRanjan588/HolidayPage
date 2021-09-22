import {
  Container,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import "../../css/index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loverspoint1 from "../../assest/images/loverspoint1.jpg";
import Loverspoint3 from "../../assest/images/loverspoint3.jpg";
import Loverspoint4 from "../../assest/images/loverspoint4.jpg";
import { BiRupee } from "react-icons/bi";

const CustomRightArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <div
      style={{
        position: "absolute",

        right: "0",
      }}
      className="lovespointrightarrow"
    >
      <span onClick={() => onClick()} className="rightbutton">
        <KeyboardArrowRight
          className="rightarrowicon"
          style={{ fontSize: 30 }}
        />
      </span>
    </div>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <div
      style={{
        position: "absolute",

        left: "0",
      }}
      className="lovespointleftarrow"
    >
      <span onClick={() => onClick()} className="leftbutton">
        {" "}
        <KeyboardArrowLeft className="leftarrowicon" style={{ fontSize: 30 }} />
      </span>
    </div>
  );
};

const LoverspointDeparture = [
  {
    id: 1,
    place: "Bhubaneswar",
  },
  {
    id: 2,
    place: "Puri",
  },
  {
    id: 3,
    place: "Kolkata",
  },
  {
    id: 4,
    place: "Goa",
  },
  {
    id: 5,
    place: "Kerala",
  },
  {
    id: 6,
    place: "Hyderabad",
  },
];

function Loverspoint() {
  const [mainnavbardiv, setMainnavbardiv] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 135) {
      setMainnavbardiv(true);
    } else {
      setMainnavbardiv(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  /* Departure place   */
  const [placename, setPlacename] = React.useState("1");

  const handleChange = (event) => {
    setPlacename(event.target.value);
  };
  return (
    <div style={{ scrollBehavior: "smooth" }} className="loverspointparentdiv">
      <div className={mainnavbardiv ? "mainnavbardiv active" : "mainnavbardiv"}>
        <Container>
          <div>
            <div className="wrapperclass">
              <div>
                <h4>Lover's Point (Darangibadi)</h4>
              </div>

              <div className="pricemaindiv">
                <div className="pricemaindiv1">
                  <div className="pricestartsdiv">Price Starts from</div>
                  <div className="ruppesdiv">
                    <BiRupee />
                    8500
                  </div>
                </div>
                <div>
                  <button className="booknowbutton">Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="listmaindiv">
            <div>
              <a href="#packageoverview">Over View</a>
              <a href="#daywiseitinerarymainid">Day Wise Itinerary</a>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <Carousel
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                additionalTransfrom={0}
                removeArrowOnDeviceType={false}
                autoPlay={true}
                autoPlaySpeed={1500}
                customTransition="all .5"
                transitionDuration={500}
                centerMode={false}
                dotListClass=""
                infinite={true}
                draggable
                swipeable={true}
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1200,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 600,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1200,
                      min: 600,
                    },
                    items: 1,
                  },
                }}
                showDots={false}
                sliderClass=""
              >
                <div className="loverspoint1div">
                  <img
                    src={Loverspoint1}
                    alt=""
                    className="lovespointcourselimage"
                  />
                </div>

                <div className="loverspoint3div">
                  <img
                    src={Loverspoint3}
                    alt=""
                    className="lovespointcourselimage"
                  />
                </div>
                <div className="loverspoint4div">
                  <img
                    src={Loverspoint4}
                    alt=""
                    className="lovespointcourselimage"
                  />
                </div>
              </Carousel>
              <div className="emptydiv1" id="packageoverview"></div>
              <div className="packageoverviewdiv">
                <h4>Package OverView</h4>
                <p>
                  Daringbadi is a hill station in Kandhmal district of Odisha
                  state in eastern India. Widely known as "Kashmir of Odisha",
                  (for its climatic similarity), it is situated at a height of
                  915 metres and is a popular tourist destination. Back in the
                  days of the British rule, there was a British officer named
                  Daring Saheb who was in charge of this place. Over the years,
                  this place was named after him, which spelled DaringBadi with
                  Badi meaning village. More than 50% of the population here
                  constitutes ST community of aboriginal tribal races. The
                  temperature level of Daringbadi has often been recorded below
                  0 °C. It is also famous for its production of superior quality
                  of organic turmeric which already got the G.I. tag.[3] It is
                  also famous for ginger harvesting.
                </p>
              </div>
              <div className="inclusonandexclusionmaindiv">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="inclusionmaindiv">
                      <h4>Inclusion</h4>
                      <ul>
                        <li>Breakfast at Hotel</li>
                        <li>Toll Taxes, Parking, Driver Charge etc.</li>
                        <li>Air conditioner car for all trip</li>
                        <li>Free Accommodation</li>
                        <li>All Aplicable Hotel Taxex</li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="exclusionmaindiv">
                      <h4>Exclusion</h4>
                      <ul>
                        <li>Flight and Train Fare</li>
                        <li>Expenses for Optional Travel</li>
                        <li>Additioanl Activities</li>
                        <li>Additional Meals</li>
                      </ul>
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div className="emptydiv1" id="daywiseitinerarymainid"></div>
              <div className="daywiseitinerarymaindiv">
                <h5>Day Wise Itinerary</h5>
                <div className="day1maindiv">
                  <div className="day1buttonmaindiv">
                    <button>Day 1</button>
                  </div>
                  <div className="daywiseiternarydiv1">
                    <div className="bobbleandborderstickdiv">
                      <div className="bobble"></div>
                      <div className="borderstick">
                        <p>s</p>
                      </div>
                    </div>
                    <div className="day1text">
                      <p>
                        Entry in hotel & Greet on arrival at Darangibadi hotel.
                        Check-in to hotel. In the evening you can take an
                        optional tour Darangibadi Market and you can explore new
                        street foods Back to hotel. Overnight stay at
                        Darangibadi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="day2maindiv">
                  <div className="day2buttonmaindiv">
                    <button>Day 2</button>
                  </div>
                  <div className="daywiseiternarydiv2">
                    <div className="bobbleandborderstickdiv">
                      <div className="bobble"></div>
                      <div className="borderstick">
                        <p>s</p>
                      </div>
                    </div>
                    <div className="day2text">
                      <p>
                        After Morning Breakfast Take a full day long tour of
                        Darangibadi city that includes the Loverspoint, Water
                        Park. You willl see how the water are falling from hill
                        and how other people are enjoying thier love life in the
                        place of lovers Point. After finshing the tour, get back
                        to hotel and stay night at hotel and take a tasty and
                        healthy dinner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="day3maindiv">
                  <div className="day3buttonmaindiv">
                    <button>Day 3</button>
                  </div>
                  <div className="daywiseiternarydiv3">
                    <div className="bobbleandborderstickdiv">
                      <div className="bobble"></div>
                      <div className="borderstick">
                        <p>s</p>
                      </div>
                    </div>
                    <div className="day3text">
                      <p>
                        After breakfast check out from hotel and transfer to
                        Darangibadi Bus Stand for different Activities and
                        different journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <div className="loverspointrightgridmaindiv">
                <div className="loverspointrightgridtitle">
                  <h3 className="loverspointrightgridtitletext">
                    Do You Want to Go For A Memorable Holiday?<br></br>
                    <span className="loverspointrightgridtitlespan">
                      {" "}
                      Provide Your Details to Know Best Holiday Deals
                    </span>
                  </h3>
                </div>
                <div
                  style={{
                    padding: "0px 15px 15px 15px",
                  }}
                >
                  <form>
                    <p className="loverspointpackagenametext">Package Name</p>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Package Name / Destination Name"
                      className="loverspointpackagenametextfield"
                    />
                    <p className="loverspointdeparturetext">
                      City of Departure
                    </p>
                    <TextField
                      id="standard-select-currency"
                      select
                      variant="outlined"
                      size="small"
                      value={placename}
                      onChange={handleChange}
                      className="loverspointdeparturetextfield"
                    >
                      {LoverspointDeparture.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.place}
                        </MenuItem>
                      ))}
                    </TextField>
                    <p className="loverspointdateofdeparturetext">
                      Date of Departure
                    </p>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Date of Departure"
                      className="loverspointdateofdeparturetextfield"
                    ></TextField>
                    <div className="loverspointcontactdetailsdiv">
                      <span>Contact Details</span>
                    </div>
                    <div>
                      <Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Your Name"
                            className="loverspointyournametextfield"
                          ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Your Email Id"
                            className="loverspointyourmailidtextfield"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <div className="loverspointphonenumberdiv">
                        <TextField
                          variant="outlined"
                          size="small"
                          className="loverspointphonenumber2textfield"
                          placeholder="Mobile No."
                        ></TextField>
                      </div>
                      <Button
                        variant="contained"
                        size="large"
                        className="loverspointsubmitbtn"
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Loverspoint;
