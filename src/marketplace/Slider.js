import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "../App.css";

// onMove means if dragging or swiping in progress.

function Slider() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          infinite
          autoPlay={true}
          customTransition="all .15"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          centerMode={false}
          className="imageslider"
          dotListClass=""
          draggable
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
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          showDots={matches}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src="./mediaimage1.jpg"
            style={{
              display: "block",
              height: "100%",

              width: "100%",
            }}
            alt=""
          />
          <img
            src="./mediaimage2.jpg"
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
            alt=""
          />
          <img
            src="./mediaimage3.jpg"
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
            alt=""
          />
          <img
            src="./mediaiamge4.jpg"
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
