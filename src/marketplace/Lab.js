import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {},
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className="covidproductsmaindiv">
      <div className="covidproductsdesktop">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} sm={8}>
            <Paper className={classes.paper}>
              <div
                className="leftgridcontainer"
                style={{ paddingBottom: "50px" }}
              >
                <div style={{ paddingLeft: "50px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Hospital
                    <span style={{ color: "orange", marginLeft: "10px" }}>
                      Establishment
                    </span>
                  </p>
                  <p style={{ fontWeight: "500", color: "grey" }}>
                    Best in class Hospital Establishment & Surgical Instruments
                  </p>
                </div>
                <div className="leftgridmaincoursel">
                  <div className="leftgridmaincourseltop">
                    <div>
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/incubator_1.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Incubator
                      </p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Laminar_Air_Flow_1.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Laminar Air Flow
                      </p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/lab_chemicals.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Lab Chemical
                      </p>
                    </div>
                    <div>
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Hot-Air-Oven.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Hot Air Oven
                      </p>
                    </div>
                  </div>
                  <div className="leftgridmaincourselbotton">
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Refrigerator_1.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Refrigerator
                      </p>
                    </div>
                    <div>
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Deep-Freezer_1.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Deep Freezer
                      </p>
                    </div>
                    <div>
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Analyzer.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Analyser
                      </p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/lab-centrifuge_2.png"
                        alt=""
                      />
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Centrifuge
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} sm={4}>
            <Paper className={classes.paper}>
              <div className="Labrightgridcontainer">
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}
                >
                  Physiotherapy Rehabilitation-Medical{" "}
                  <span style={{ color: "orange" }}>Aids</span>
                </h3>
                <h5
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  Advanced Medical Aids
                </h5>
                <div className="labtopitems">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <img
                      src="	https://www.medikabazaar.com/media/catalog/category/Wheelchair_2x_1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Wheel Chair
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <img
                      src="https://www.medikabazaar.com/media/catalog/category/Knee_Brace_2x.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Knee Brace
                    </p>
                  </div>
                </div>
                <div className="labtopitems">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <img
                      src="		https://www.medikabazaar.com/media/catalog/category/Shoulder_Immobilizer_2x.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Shoulder Immobilizer
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <img
                      src="	https://www.medikabazaar.com/media/catalog/category/Cervical_Collar_2x.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Cervical Collar
                    </p>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="covidproductsmobile">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={8}>
            <Paper className={classes.paper}>
              <div className="leftgridmobilecontainer">
                <div style={{ paddingLeft: "10px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Consumable &{" "}
                    <span style={{ color: "orange" }}>Disposable</span>
                  </p>
                  <p style={{ fontWeight: "500", color: "grey" }}>
                    Top Selling Consumables and Disposables
                  </p>
                </div>
                <div
                  className="leftgridmaincoursel"
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
                    showDots={true}
                    sliderClass=""
                    swipeable
                  >
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/incubator_1.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Incubator
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Laminar_Air_Flow_1.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Laminar Air Flow
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/lab_chemicals.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Lab Chemical
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Hot-Air-Oven.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Hot Air Oven
                      </p>
                    </div>

                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Refrigerator_1.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Refrigerator
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Deep-Freezer_1.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Deep Freezer
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Analyzer.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Analyser
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/lab-centrifuge_2.png"
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
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3f4246",
                        }}
                      >
                        Centrifuge
                      </p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} sm={4}>
            <Paper className={classes.paper}>
              <div
                className="rightgridcontainermobile
              "
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
                      items: 2,
                      slidesToSlide: 2,
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
                      items: 3,
                      slidesToSlide: 3,
                    },
                  }}
                  showDots={true}
                  sliderClass=""
                  swipeable
                >
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <img
                      src="https://www.medikabazaar.com/media/catalog/category/Wheelchair_2x_1.png"
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
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Wheel Chair
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <img
                      src="https://www.medikabazaar.com/media/catalog/category/Knee_Brace_2x.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "auto",
                      }}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Knee Brace
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <img
                      src="	https://www.medikabazaar.com/media/catalog/category/Cervical_Collar_2x.png"
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
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Cervical Collar
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <img
                      src="	https://www.medikabazaar.com/media/catalog/category/Shoulder_Immobilizer_2x.png"
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
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#3f4246",
                      }}
                    >
                      Shoulder Immobilizer
                    </p>
                  </div>
                </Carousel>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
