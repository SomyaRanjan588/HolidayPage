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
              <div className="leftgridcontainer">
                <div style={{ paddingLeft: "50px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>Dental</p>
                  <p style={{ fontWeight: "500", color: "grey" }}>
                    Largest Catalogue of Dental Products
                  </p>
                </div>
                <div className="leftgridmaincoursel">
                  <div className="leftgridmaincourseltop">
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_Cement_2x.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Cement</p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Zinc_Phosphate_Cement_2x.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>
                        Zinc Phosphate Cement
                      </p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Gitta_Percha_Points_2x_1.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Gutta percha points</p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_X-Ray_Machine_2x.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>X-Ray Machine</p>
                    </div>
                  </div>
                  <div className="leftgridmaincourselbotton">
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_Chair_2x.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Dental Chair</p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Airotor_Handpiece_2x_1.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Air rotor Handpiece</p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Autoclave_Machine_2x.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Autoclave</p>
                    </div>
                    <div>
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Alginate_Powder_2x_1.png"
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Impression Material</p>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} sm={4}>
            <Paper className={classes.paper}>
              <div className="rightgridcontainer">
                <div
                  style={{
                    paddingLeft: "40px",
                    paddingRight: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      letterSpacing: ".3px",
                    }}
                  >
                    Dental Offer
                  </h5>
                  <img
                    src="https://www.medikabazaar.com/media/New-Shop-Page-Waldent_375_X_190.jpg"
                    style={{
                      borderRadius: "5px",
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                      boxShadow: "0 0 2px black",
                    }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    paddingLeft: "40px",
                    paddingRight: "10px",
                    paddingTop: "20px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      letterSpacing: ".3px",
                    }}
                  >
                    Dental Offer
                  </h5>
                  <img
                    src="	https://www.medikabazaar.com/media/New-Shop-Page-Woodpecker_375_X_190.jpg"
                    style={{
                      borderRadius: "5px",
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",

                      boxShadow: "0 0 2px black",
                    }}
                    alt=""
                  />
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
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_Cement_2x.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Cement</p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Zinc_Phosphate_Cement_2x.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>
                        Zinc Phosphate Cement
                      </p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Gitta_Percha_Points_2x_1.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Gutta percha points</p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_X-Ray_Machine_2x.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}> X-Ray Machine</p>
                    </div>

                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Dental_Chair_2x.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Dental Chair</p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Airotor_Handpiece_2x_1.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Air rotor Handpiece</p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="https://www.medikabazaar.com/media/catalog/category/Autoclave_Machine_2x.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Autoclave</p>
                    </div>
                    <div className="covidproductmobilelist">
                      <img
                        src="	https://www.medikabazaar.com/media/catalog/category/Alginate_Powder_2x_1.png"
                        style={{
                          display: "block",
                          height: "100%",
                          margin: "auto",
                          width: "100%",
                        }}
                        alt=""
                      />
                      <p style={{ fontWeight: "bold" }}>Impression Material</p>
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
                      items: 2,
                      slidesToSlide: 2,
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
                        max: 1024,
                        min: 550,
                      },
                      items: 1,
                      slidesToSlide: 1,
                    },
                  }}
                  showDots={true}
                  sliderClass=""
                  swipeable
                >
                  <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                        letterSpacing: ".3px",
                      }}
                    >
                      Dental Offer
                    </p>
                    <img
                      src="https://www.medikabazaar.com/media/New-Shop-Page-Waldent_375_X_190.jpg"
                      style={{
                        borderRadius: "5px",
                        display: "block",
                        height: "100%",
                        margin: "auto",
                        width: "100%",
                        boxShadow: "0 0 2px black",
                      }}
                      alt=""
                    />
                  </div>
                  <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                        letterSpacing: ".3px",
                      }}
                    >
                      Dental Care
                    </p>

                    <img
                      src="	https://www.medikabazaar.com/media/New-Shop-Page-Woodpecker_375_X_190.jpg"
                      style={{
                        borderRadius: "5px",
                        display: "block",
                        height: "100%",
                        margin: "auto",
                        width: "100%",

                        boxShadow: "0 0 2px black",
                      }}
                      alt=""
                    />
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
