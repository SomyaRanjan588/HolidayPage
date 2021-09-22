import {
  Container,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React from "react";
import "../../css/index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loverspoint1 from "../../assest/images/loverspoint1.jpg";
import Loverspoint2 from "../../assest/images/loverspoint2.jpg";
import Loverspoint3 from "../../assest/images/loverspoint3.jpg";
import Loverspoint4 from "../../assest/images/loverspoint4.jpg";

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

function Loverspointcoursel() {
  /* Departure place   */
  const [placename, setPlacename] = React.useState("1");

  const handleChange = (event) => {
    setPlacename(event.target.value);
  };
  return (
    <div>
      <Container>
        <div className="loverspointmaingriddiv">
          <Grid container spacing={3}>
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
        </div>
      </Container>
    </div>
  );
}

export default Loverspointcoursel;
