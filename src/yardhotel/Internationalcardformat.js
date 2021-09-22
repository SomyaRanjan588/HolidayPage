import { CardContent, CardMedia, Card } from "@material-ui/core";

import { BiRupee } from "react-icons/bi";
import React from "react";
import "../App.css";

function Cardformat({ internationalproduct }) {
  return (
    <div>
      <div className="parentcard">
        <Card className="maincard">
          <CardMedia
            component="img"
            height="60%"
            width="100%"
            margin="auto"
            image={internationalproduct.img}
          />
          <CardContent>
            <h2 className="cardtitle">{internationalproduct.name}</h2>
            <h4 className="dayandnight">{internationalproduct.room}</h4>
            <h2 className="price">
              <BiRupee size="25px" />
              <span>{internationalproduct.price}</span>
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Cardformat;
