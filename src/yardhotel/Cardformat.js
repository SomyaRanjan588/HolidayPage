import {
  CardMedia,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React from "react";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "0.1em 0.2em",
      }}
      className="rightarrow"
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
        top: "0",
        right: "2.3em",

        padding: "0.1em 0.2em",
      }}
      className="leftarrow"
    >
      <span onClick={() => onClick()} className="leftbutton">
        {" "}
        <KeyboardArrowLeft className="leftarrowicon" style={{ fontSize: 30 }} />
      </span>
    </div>
  );
};
const CustomRightArrowxs = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <div
      style={{
        position: "absolute",
        top: "5",
        right: "0",
        padding: "0.2em 0.2em",
      }}
      className="rightarrowxs"
    >
      <span onClick={() => onClick()} className="rightbutton">
        <KeyboardArrowRight
          style={{ fontSize: 30 }}
          className="rightarrowiconxs"
        />
      </span>
    </div>
  );
};
const CustomLeftArrowxs = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <div
      style={{
        position: "absolute",
        top: "5",
        Left: 0,

        padding: "0.2em 0.2em",
      }}
      className="leftarrowxs"
    >
      <span onClick={() => onClick()} className="leftbutton">
        {" "}
        <KeyboardArrowLeft
          style={{ fontSize: 30 }}
          className="leftarrowiconxs"
        />{" "}
      </span>
    </div>
  );
};

function Cardformat({ products }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <div className="parentcard">
        <Carousel
          customRightArrow={
            matches ? <CustomRightArrowxs /> : <CustomRightArrow />
          }
          customLeftArrow={
            matches ? <CustomLeftArrowxs /> : <CustomLeftArrow />
          }
          additionalTransfrom={0}
          removeArrowOnDeviceType={false}
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
              items: 4,
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
              items: 3,
            },
          }}
          showDots={false}
          sliderClass=""
        >
          {products.map((product) => (
            <div key={product.id}>
              <Card className="maincard">
                <CardMedia
                  component="img"
                  height="60%"
                  width="100%"
                  margin="auto"
                  image={product.img}
                />
                <CardContent>
                  <h2 className="cardtitle">{product.name}</h2>
                  <h4 className="dayandnight">{product.room}</h4>
                  <h2 className="price">
                    <span>{product.price}</span>
                  </h2>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Cardformat;
