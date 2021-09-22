import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const API_KEY = "QPAHG63SJOS656c9KZzABkYCyThyA5Qw";

const Random = () => {
  const [tag, setTag] = useState("cats");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="rightgif">
      <h5 className="rightgifheading">Random {tag} GIF</h5>
      <Card className="rightgifcard">
        <CardMedia image={gif} alt="Random Gif" className="gifimage" />

        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Enter Any GIF Name"
          className="rightgifinputbox"
        />
        <br></br>
        <br></br>
        <Button
          onClick={handleClick}
          className="rightgifbutton"
          variant="contained"
          color="primary"
        >
          CLICK HERE FOR NEW GIF
        </Button>
      </Card>
    </div>
  );
};

export default Random;
