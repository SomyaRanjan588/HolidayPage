import { Card, CardContent, CardMedia } from "@material-ui/core";
import { BiRupee } from "react-icons/bi";
import React from "react";
import "../App.css";

function Cardformat({ holidayproduct }) {
  return (
    <div>
      <div className="parentcard">
        <Card className="maincard">
          <CardMedia
            component="img"
            height="60%"
            width="100%"
            margin="auto"
            image={holidayproduct.img}
          />
          <CardContent>
            <h2 className="cardtitle">{holidayproduct.name}</h2>
            <h4 className="dayandnight">{holidayproduct.room}</h4>
            <h2 className="price">
              <BiRupee size="25px" />
              <span>{holidayproduct.price}</span>
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Cardformat;
