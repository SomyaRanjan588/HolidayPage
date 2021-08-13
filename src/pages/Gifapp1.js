import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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
      <h4 className="leftgifheading">Random GIF</h4>
      <img
        src={gif}
        width="250"
        height="220"
        alt="Random Gif"
        className="gifimage"
      />
      <br></br>
      <button onClick={handleClick} className="leftgifbutton">
        CLICK HERE FOR NEW GIF
      </button>
    </div>
  );
};

export default Tag;
