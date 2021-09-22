import { CardMedia, Card, CardContent, Grid } from "@material-ui/core";

import React from "react";
import "../css/index.css";
import hotel from "../assest/icons/hotel.png";
import Car from "../assest/icons/car.png";
import dish from "../assest/icons/dish.png";
import motorcycle from "../assest/icons/motorcycle.png";
import Activites from "../assest/icons/life-style.png";
function Allictycardformat({ products }) {
  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className="mainbhubaneswargrid"
            key={product.id}
          >
            <div>
              <Card className="bhubaneswarcard">
                <CardMedia
                  component="img"
                  height="45%"
                  width="100%"
                  margin="auto"
                  image={product.img}
                />
                <CardContent>
                  <h3 className="bbsrname">{product.name}</h3>
                  <h4 className="bbsrdaynight">{product.daynight}</h4>
                  <h4 className="pricestartstext">Price Starts from </h4>
                  <div className="pricebtnwrapperclass">
                    <h4 className="pricedetails">{product.price}</h4>
                    <button className="viewdetailsbtn">View Details</button>
                  </div>
                  <div className="dividerclass"></div>
                  <div className="parenticondiv">
                    <div className="iconmaindiv">
                      <div className="hotelicondiv">
                        <div>
                          <img src={hotel} alt="" className="hotelicon" />
                        </div>
                        <p>Hotel</p>
                      </div>
                      <div className="dishicondiv">
                        <div>
                          <img src={dish} alt="" className="dishicon" />
                        </div>
                        <p>Restaurants</p>
                      </div>
                      <div className="motoricondiv">
                        <div>
                          <img src={motorcycle} alt="" className="motoricon" />
                        </div>
                        <p>Long Travel</p>
                      </div>

                      <div className="activitiesicondiv">
                        <div>
                          <img
                            src={Activites}
                            alt=""
                            className="activitiesicon"
                          />
                        </div>
                        <p>Other Activites</p>
                      </div>
                      <div className="caricondiv">
                        <div>
                          <img src={Car} alt="" className="caricon" />
                        </div>
                        <p>Transfer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Allictycardformat;
