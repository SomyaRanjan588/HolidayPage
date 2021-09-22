import React from "react";
import { MdCode } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Covidproducts() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <div className="coviditemsmaindiv">
        <h4
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "19px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          <span style={{ paddingTop: "5px", fontWeight: "bold" }}>
            Covid Products
          </span>
          <span>
            <span style={{ color: "#2a4689 " }}>View all</span>
            <span className="mdcodeicon">
              <MdCode size="40px" color="blueviolet" />
            </span>
          </span>
        </h4>
        <h6
          style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "20px",
            display: "block",
            width: "100%",
            marginLeft: "10px",
          }}
        >
          Top Grade Covid Essential Products
        </h6>
        <div
          className="coviditemscoursel"
          style={{
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          <Carousel
            arrows={false}
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={false}
            centerMode={false}
            dotListClass=""
            infinite={false}
            draggable={true}
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 6,
                slidesToSlide: 6,
              },
              mobile: {
                breakpoint: {
                  max: 550,
                  min: 0,
                },
                items: 2,
                slidesToSlide: 2,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 550,
                },
                items: 4,
                slidesToSlide: 4,
              },
            }}
            showDots={matches}
            sliderClass=""
            swipeable={true}
          >
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Masks_2x.png "
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt="mask"
              />

              <p style={{ paddingTop: "15px", color: "black" }}>Mask</p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Hand_Sanitizer_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>
                Hand Sanitizer{" "}
              </p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Air_Purifier_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>Air Purifier</p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/PPE_Kit_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>PPE Kit</p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Infrared-Thermometer_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>
                Infrared Thermometer
              </p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Hand_Rub_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>Hand Rub</p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Pulse_Oximeter_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>
                Pulse Oximeter
              </p>
            </div>
            <div className="coviditemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Thermometer_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p style={{ paddingTop: "15px", color: "black" }}>Thermometer</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Covidproducts;
