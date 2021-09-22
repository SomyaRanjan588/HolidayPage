import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../App.css";

function Marketplacelist() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div
        className="mainmarketplacediv"
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
              items: 9,
              slidesToSlide: 9,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 4,
              slidesToSlide: 4,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 5,
              slidesToSlide: 5,
            },
          }}
          showDots={matches}
          sliderClass=""
          swipeable
        >
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Consumable_1_4.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>

            <span>Consumable & Disposable</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Medical_Equipment_6.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Lab Diagnostics & Instruments</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Medical_Device_4.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Medical Device & Equipment</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Pharmaceutical_Products_4.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Medicines and Pharmaceutical Products</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Dental_7.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Dental</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Medical_Implants_2.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Medical Medical Implants</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Surgical_6.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Surgical Instruments</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Hospital_2.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Hospital Establihshment</span>
          </div>
          <div className="maindivlist1">
            <span>
              <img
                src="https://www.medikabazaar.com/media/catalog/category/Physiotherapy_3.png"
                alt=""
              />
            </span>
            <br></br>
            <br></br>
            <span>Physiotherapy & Rehabilitation-Medical Aids</span>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Marketplacelist;
