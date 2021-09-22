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
      <div className="todayitemsmaindiv">
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
          <span
            style={{ paddingTop: "5px", fontWeight: "bold", color: "white" }}
          >
            Today' Deals
          </span>
          <span>
            <span className="viewall">See all deals</span>
            <span className="mdcodeicon">
              <MdCode size="40px" color="white" />
            </span>
          </span>
        </h4>
        <h6
          style={{
            fontSize: "14px",

            marginBottom: "20px",
            display: "block",
            width: "100%",
            marginLeft: "10px",
          }}
          className="todaydeal"
        >
          Buy Now
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
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Oxygen_Concentrator_00_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />

              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Oxygen Concentrator
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Stethoscope.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Stethoscope
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Dental_Cement_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Dental Cement
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Fowler_Bed_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Fowler Bed
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Oxygen_Cylinder_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Oxygen Cylinder
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Semi_Fowler_Bed_2x_1.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Semi Fowler Bed
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Ventilator_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Ventilator
              </p>
            </div>
            <div className="todayitemscoursellist1">
              <img
                src="https://www.medikabazaar.com/media/Clavicle_Brace_2x.png"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
                alt=""
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Clavicle Brace
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Covidproducts;
