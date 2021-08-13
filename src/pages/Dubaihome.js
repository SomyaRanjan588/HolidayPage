import React from "react";
import "../App.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

import { ImMan } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

import { BsHeartFill } from "react-icons/bs";

import DubaiImg from "../Dubai";
import Navbar from "../pages/Notnav";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 50,
  },
  media: {
    height: 140,
    borderRadius: 5,
  },
});

function Dubaihome() {
  const classes = useStyles();
  return (
    <div>
      <div className="div100"></div>
      <div className="div1000">
        <p className="para1000">
          Dub
          <ImMan />
          zzle
        </p>
        <div className="div1001">
          <BsHeartFill color="blue" size="25px" />
        </div>
        <p className="para1002">Covid-19</p>
        <p className="para1003">Dubai</p>
        <div className="div1004">
          <IoIosArrowDown color="black" size="10px" />
        </div>
        <div className="div1005">
          <div className="div1006">
            <NotificationsNoneIcon />
            <p className="para1004">Notifications</p>
          </div>
          <div className="div1006">
            <SearchIcon />
            <p className="para1004">Searches</p>
          </div>
          <div className="div1006">
            <FavoriteBorderIcon />
            <p className="para1004">Favorties</p>
          </div>
          <div className="div1006">
            <InsertCommentIcon />
            <p className="para1004">My Chats</p>
          </div>
          <div className="div1007">
            <p>Log in or sign up</p>
          </div>
          <button className="placead">Place Your Ad</button>
        </div>
      </div>
      <div className="div1008"></div>
      <div className="div1009">
        <Navbar />
      </div>
      <div className="div100"></div>
      <div>
        <div className="center">
          <div
            style={{
              backgroundImage: "url(./reactweb/dubai.jpg)",

              color: "white",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="back"
          >
            <p className="para1005">
              The best place to <b>buy</b> your house, <b>sell</b> your car or
              <b> find</b> a job in Dubai
            </p>
            <div className="div1010">
              <div className="div1011">
                <div>
                  <p className="para1006">
                    <b>Searching in </b>
                  </p>
                </div>
                <div className="div1012">
                  <p>
                    <button className="all">All</button>
                  </p>
                  <p>Motors</p>
                  <p>Classifieds</p>
                  <p>Property for Rent</p>
                  <p>Property for Sale</p>
                  <p>Jobs</p>
                  <p>Community</p>
                </div>
              </div>

              <div className="div1013">
                <input
                  className="input"
                  placeholder="search for any thing"
                ></input>
                <button className="search">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Rentpara">
          <p>Popular in Residential for Rent</p>
        </div>
        <div className="cardwrap">
          <div className="carddiv1">
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/rent1.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 145,000</p>
                <p className="cardpara2">2 Beds . 3 Beds</p>
                <p className="cardpara3">
                  Dubai Healthcare City Phase 2, Al jadaf
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/rent2.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 33,900</p>
                <p className="cardpara2">Studio . 1 Bath</p>
                <p className="cardpara3">
                  DAMAC Ghalia, Jumeriah Village Circle(JVC)
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/rent3.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 45,900</p>
                <p className="cardpara2">1 Bed . 1 Bath</p>
                <p className="cardpara3">
                  Pearl Coast Premier Apartments, Al Barsha 1, Al Barsha
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/rent4.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 43,900</p>
                <p className="cardpara2">1 Bed . 2 Bath</p>
                <p className="cardpara3">
                  Lake Point Tower, JLT Cluster N, Jumeirah Lake Towers(JLT)
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/rent5.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 36,000</p>
                <p className="cardpara2">Studio . 1 Bath</p>
                <p className="cardpara3">
                  Pearl Coast Premier Apartments, Al Barsha 1, Al Barsha
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Rentpara">
          <p>Popular in Used Cars for Sale</p>
        </div>
        <div className="cardwrap">
          <div className="carddiv1">
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/car1.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 36,000</p>
                <p className="cardpara2">Honda . YXi . SE</p>
                <p className="cardpara3">2018 . 15,000km</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/car2.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 16,000</p>
                <p className="cardpara2">Traverser . LT</p>
                <p className="cardpara3">2019 . 35,000km</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/car3.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 16,000</p>
                <p className="cardpara2">Honda . SE</p>
                <p className="cardpara3">2015 . 90,000km</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/car4.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 58,000</p>
                <p className="cardpara2">Mercedes-Benz . CLA</p>
                <p className="cardpara3">2014 . 185,000km</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/car5.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 45,000</p>
                <p className="cardpara2">Honda . Civic . LXi</p>
                <p className="cardpara3">2018 . 38,000km</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Rentpara">
          <p>Popular in Furniture & Garden</p>
        </div>
        <div className="cardwrap">
          <div className="carddiv1">
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/garden2.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 250</p>
                <p className="cardpara2">Brand New 2 doors, 3 doors...</p>
                <p className="cardpara3">Naif</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/garden3.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 250</p>
                <p className="cardpara2">Grass Machine</p>
                <p className="cardpara3">Casa Dora</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/garden4.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 35</p>
                <p className="cardpara2">Croton verigated</p>
                <p className="cardpara3">Academic City</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/graden5.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 40</p>
                <p className="cardpara2">Croton</p>
                <p className="cardpara3">Academic City</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/garden6.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 59</p>
                <p className="cardpara2">Macrame Wall Hanging</p>
                <p className="cardpara3">Dubai Marina</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Rentpara">
          <p>Popular in Residential for Sale</p>
        </div>
        <div className="cardwrap">
          <div className="carddiv1">
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/sale1.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 1,00,00,000</p>
                <p className="cardpara2">5 Beds . 6 Baths</p>
                <p className="cardpara3">
                  Fendi Styled Villas, Vento, DAMAC Hills
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/sale2.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 3,799,999</p>
                <p className="cardpara2">4 Beds . 4 Baths</p>
                <p className="cardpara3">
                  Fendi Styled Villas, Vento, DAMAC Hills
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/sale3.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 18,400,000</p>
                <p className="cardpara2">9 Beds . 10 Baths</p>
                <p className="cardpara3">
                  Fendi Styled Villas, Vento, DAMAC Hills (Akoya by DAMAC)
                </p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/sale4.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 1,028,185</p>
                <p className="cardpara2">1 Beds . 2 Baths</p>
                <p className="cardpara3">Falcon City of Wonders, Dubailand</p>
              </div>
            </div>
            <div className="cardbody">
              <CardMedia
                className={classes.media}
                image="./reactweb/sale5.jpg"
                title="Contemplative Reptile"
              />
              <div className="cardpara">
                <p className="cardpara1">AED 1,100,000</p>
                <p className="cardpara2">3 Beds . 3 Baths</p>
                <p className="cardpara3">DAMAC Hills 2 (Akoya Oxygens)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainfooter">
          <div className="footerclass">
            <div>
              <p className="footertext1">
                <b>Company</b>
              </p>
              <p className="footertext2">About Us</p>
              <p className="footertext2">Advertising</p>
              <p className="footertext2">Careers</p>
              <p className="footertext2">Terms of Use</p>
              <p className="footertext2">Privacy Policy</p>
            </div>
            <div>
              <p className="footertext1">
                <b>UAE</b>
              </p>
              <p className="footertext2">Dubai</p>
              <p className="footertext2">Abu Dhabi</p>
              <p className="footertext2">Ras al Khaimah</p>
              <p className="footertext2">Sharjah</p>
              <p className="footertext2">Fujairah</p>
              <p className="footertext2">Ajman</p>
              <p className="footertext2">Umm al Quwain</p>
              <p className="footertext2">Al Ain</p>
            </div>
            <div>
              <p className="footertext1">
                <b>Other Countries</b>
              </p>
              <p className="footertext2">Egypt</p>
              <p className="footertext2">Bahrain</p>
              <p className="footertext2">Saudi Arabia</p>
              <p className="footertext2">Lebanon</p>
              <p className="footertext2">Kuwait</p>
              <p className="footertext2">Oman</p>
              <p className="footertext2">Qatar</p>
              <p className="footertext2">Pakistan</p>
            </div>
            <div>
              <p className="footertext1">
                <b>Get Social</b>
              </p>
              <p className="footertext2">Facebook</p>
              <p className="footertext2">Twitter</p>
              <p className="footertext2">Youtube</p>
              <p className="footertext2">Instagram</p>
            </div>
            <div>
              <p className="footertext1">
                <b>Support</b>
              </p>
              <p className="footertext2">Help</p>
              <p className="footertext2">Contact Us</p>
            </div>
            <div>
              <p className="footertext1">
                <b>Languages</b>
              </p>
              <p className="footertext2">English</p>
              <p className="footertext2">Arabic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dubaihome;
