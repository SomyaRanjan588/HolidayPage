import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const API_KEY = "QPAHG63SJOS656c9KZzABkYCyThyA5Qw";

const Tag = (tag) => {
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgsrc = data.data.images.downsized_large.url;
    setGif(imgsrc);
  };
  useEffect(() => {
    fetchGif();
  }, []);
  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="leftgif">
      <h5 className="leftgifheading">Random GIF</h5>
      <Card className="leftgifcard">
        <CardMedia image={gif} alt="Random Gif" className="gifimage" />
        <br></br>

        <Button
          onClick={handleClick}
          variant="contained"
          className="leftgifbutton"
          color="primary"
        >
          CLICK HERE FOR NEW GIF
        </Button>
      </Card>
    </div>
  );
};

export default Tag;
