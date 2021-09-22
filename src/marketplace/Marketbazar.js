import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Marketbazar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <div
        className="Marketbazarmaindiv"
        style={{
          paddingBottom: "30px",
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
                min: 1100,
              },
              items: 3,
              slidesToSlide: 3,
            },
            mobile: {
              breakpoint: {
                max: 550,
                min: 0,
              },
              items: 1,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: {
                max: 1100,
                min: 550,
              },
              items: 2,
              slidesToSlide: 2,
            },
          }}
          showDots={matches}
          sliderClass=""
          swipeable={true}
        >
          <div
            className="Marketbazarcoursellist"
            style={{ marginRight: "10px" }}
          >
            <h3>Medikabazaar - Freedom</h3>
            <img
              src="	https://www.medikabazaar.com/media/New-Shop-Page-Freedom_375_X_190.jpg"
              style={{
                display: "block",
                height: "100%",
                margin: "auto",
                width: "100%",
                borderRadius: "5px",
                boxShadow: "rgb(149 157 165 / 60%) 0px 2px 3px 0px",
              }}
              alt=""
            />
          </div>
          <div
            className="Marketbazarcoursellist"
            style={{ marginLeft: "10px" }}
          >
            <h3>Xerox Vortran Ventilator</h3>
            <img
              src="https://www.medikabazaar.com/media/Xerox-MB_Mobile_375-X-190-px.jpg"
              style={{
                display: "block",
                height: "100%",
                margin: "auto",
                width: "100%",
                borderRadius: "5px",
                boxShadow: "rgb(149 157 165 / 60%) 0px 2px 3px 0px",
              }}
              alt=""
            />
          </div>
          <div
            className="Marketbazarcoursellist"
            style={{ marginLeft: "10px", paddingLeft: "10px" }}
          >
            <h3>Roche Diagnostic Products</h3>
            <img
              src="	https://www.medikabazaar.com/media/Roche_Mobile_375-X-190-px.jpg"
              style={{
                display: "block",
                height: "100%",
                margin: "auto",
                width: "100%",
                borderRadius: "5px",
                boxShadow: "rgb(149 157 165 / 60%) 0px 2px 3px 0px",
              }}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Marketbazar;
