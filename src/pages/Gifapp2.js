import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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
      <h4 className="rightgifheading">Random {tag} GIF</h4>
      <img
        width="250"
        height="220"
        src={gif}
        alt="Random Gif"
        className="gifimage"
      />
      <br></br>
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter Any GIF Name"
        className="rightgifinputbox"
      />
      <br></br>
      <button onClick={handleClick} className="rightgifbutton">
        CLICK HERE FOR NEW GIF
      </button>
    </div>
  );
};

export default Random;
