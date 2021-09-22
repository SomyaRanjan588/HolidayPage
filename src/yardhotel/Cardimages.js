import {
  makeStyles,
  Grid,
  Container,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";

import React from "react";
import "../App.css";

import Cardformat from "./Cardformat";
import Puri from "../assest/images/puri.jpg";

const firstCategoryData = [
  {
    id: 1,
    name: "Bhubaneswar",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(1500),
    img: "./Bhubaneswar.jpg",
    allHotels: [{ id: 1, name: "explorebhubaneswar" }],
  },
  {
    id: 2,
    name: "Puri",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2200),
    img: Puri,
  },
  {
    id: 3,
    name: "DaringBadi",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(1999),
    img: "./daringbadi.jpg",
  },
  {
    id: 4,
    name: "Kolkata",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(1600),
    img: "./kolkata2.jpg",
  },
  {
    id: 5,
    name: "New Delhi",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
    img: "./delhi.jpg",
  },
  {
    id: 6,
    name: "Hyderabad",
    room: "Per Room Per Night",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(2500),
    img: "./hydrabad.jpg",
  },
];

const international = [
  {
    id: 1,
    name: "Goa",
    room: "4 Days/3 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(4500),
    img: "./Goa.jpg",
  },
  {
    id: 2,
    name: "Srilanka",
    room: "5 Days/4 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(5500),
    img: "./Srilanka.jpg",
  },
  {
    id: 3,
    name: "Dubai",
    room: "7 Days/6 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(12000),
    img: "./Dubai.jpg",
  },
  {
    id: 4,
    name: "Paris",
    room: "6 Days/5 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(6500),
    img: "./Paris.jpg",
  },
  {
    id: 5,
    name: "Switzerland",
    room: "5 Days/4 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(5500),
    img: "./Swizerland.jpg",
  },
];
const tourpackage = [
  {
    id: 1,
    name: "Dubai",
    room: "10 Days/9 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(15000),
    img: "./Dubai1.jpg",
  },
  {
    id: 2,
    name: "Bhubaneswar",
    room: "5 Days/4 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(5000),
    img: "./Odisha.jpg",
  },
  {
    id: 3,
    name: "Kolkata",
    room: "7 Days/6 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(7000),
    img: "./Kolkata2.jpg",
  },
  {
    id: 4,
    name: "Goa",
    room: "6 Days/5 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(6000),
    img: "./Goa1.jpg",
  },
  {
    id: 5,
    name: "kerala",
    room: "3 Days/2 Nights",
    price: new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(4000),
    img: "./Kerala.jpg",
  },
];
const Departure = [
  {
    id: 1,
    place: "Bhubaneswar",
  },
  {
    id: 2,
    place: "Delhi",
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
    place: "Puri",
  },
  {
    id: 7,
    place: "Hyderabad",
  },
  {
    id: 8,
    place: "DaringBadi",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {},
}));

function Cardimages() {
  const classes = useStyles();
  console.log(Puri);

  /* Departure place   */
  const [placename, setPlacename] = React.useState("1");

  const handleChange = (event) => {
    setPlacename(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Container>
        <div className="maingriddiv">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <div>
                <div className="headermaindiv">
                  <div>
                    <p className="courseltitle">Tour Packages in India</p>
                  </div>
                </div>

                <Cardformat products={firstCategoryData} />
              </div>

              <div className="internationalcourseldiv">
                <div className="headermaindiv">
                  <div>
                    <p className="courseltitle">International Tour Packages</p>
                  </div>
                </div>

                <Cardformat products={international} />
              </div>
              <div className="internationalcourseldiv">
                <div className="headermaindiv">
                  <div>
                    <p className="courseltitle">Best Holiday Packages</p>
                  </div>
                </div>

                <Cardformat products={tourpackage} />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={4}>
              <div className="rightgridmaindiv">
                <div className="rightgridtitle">
                  <h3 className="rightgridtitletext">
                    Do You Want to Go For A Memorable Holiday?<br></br>
                    <span className="rightgridtitlespan">
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
                    <p className="packagenametext">Package Name</p>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Package Name / Destination Name"
                      className="packagenametextfield"
                    />
                    <p className="departuretext">City of Departure</p>
                    <TextField
                      id="standard-select-currency"
                      select
                      variant="outlined"
                      size="small"
                      value={placename}
                      onChange={handleChange}
                      className="departuretextfield"
                    >
                      {Departure.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.place}
                        </MenuItem>
                      ))}
                    </TextField>
                    <p className="dateofdeparturetext">Date of Departure</p>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Date of Departure"
                      className="dateofdeparturetextfield"
                    ></TextField>
                    <div className="contactdetailsdiv">
                      <span>Contact Details</span>
                    </div>
                    <div>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Your Name"
                        className="yournametextfield"
                      ></TextField>

                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Your Email Id"
                        className="yourmailidtextfield"
                      ></TextField>
                      <div className="phonenumberdiv">
                        <TextField
                          variant="outlined"
                          size="small"
                          className="phonenumber2textfield"
                          placeholder="Mobile No."
                        ></TextField>
                      </div>
                      <Button
                        variant="contained"
                        size="large"
                        className="submitbtn"
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

export default Cardimages;
