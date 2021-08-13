import React, { Component, useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 50,
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <List>
        <ListItem>
          <div className="filterclass">
            <h3>Pages</h3>
            <div>
              <input type="checkbox" name="ratings" value="4" />

              <span className="pagesclass">1 to 10</span>
            </div>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">1 to 20</span>
            </div>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">1 to 30</span>
            </div>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">1 to 40</span>
            </div>

            <h3>Industray</h3>
            <label for="" style={{ fontSize: "12px" }}>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Health</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Hotel</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Transport and Logistics</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Retail</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Travel and Toursim</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Agriculture</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Education</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Oil and Gas</span>
              </div>
              <div className="pagediv1">
                <input type="checkbox" name="ratings" value="4" />
                <span className="pagesclass">Financial and Banking</span>
              </div>
            </label>
            <h3>Price</h3>
            <input type="checkbox" />
            <label for="" style={{ fontSize: "12px" }}>
              Paid
            </label>
            <input type="checkbox" style={{ marginLeft: "10px" }} />
            <label for="" style={{ paddingLeft: "5px", fontSize: "12px" }}>
              Free
            </label>
            <h3>Rating</h3>
            <div className="ratingdiv">
              <input type="checkbox" name="ratings" value="4" />

              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <div className="ratingdiv">
              <input type="checkbox" name="ratings" value="4" />

              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <div className="ratingdiv">
              <input type="checkbox" name="ratings" value="4" />

              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <div className="ratingdiv">
              <input type="checkbox" name="ratings" value="4" />

              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3>Edition</h3>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">Standard</span>
            </div>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">Professional</span>
            </div>
            <div className="pagediv1">
              <input type="checkbox" name="ratings" value="4" />
              <span className="pagesclass">Enterprises</span>
            </div>
          </div>
        </ListItem>
      </List>
    </Dialog>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function Middle() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const classes = useStyles();

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const PersonDetails = [
    { id: 1, name: "Health" },
    { id: 2, name: "Hotel" },
    { id: 3, name: "Transport and Logictics" },
    { id: 4, name: " Retail" },
    { id: 5, name: "Travel and Toursim" },
    { id: 6, name: "Agriculture" },
    { id: 7, name: "Education" },
    { id: 8, name: "Oil and gas" },
    { id: 9, name: "Finance and Banking" },
  ];
  const EditionList = [
    { id: 1, name: "Standard" },
    { id: 2, name: "Professional " },
    { id: 3, name: "Enterprises" },
  ];
  const PageList = [
    { id: 1, name: "1 to 10" },
    { id: 2, name: "1 to 20 " },
    { id: 3, name: "1 to 30" },
    { id: 4, name: "1 to 40" },
  ];
  const PersonNames = PersonDetails.map((person) => (
    <>
      <p value={person.id}>{person.name}</p>
    </>
  ));
  const EditionNames = EditionList.map((edition) => (
    <p value={edition.id}>{edition.name}</p>
  ));
  const PageNames = PageList.map((page) => <p value={page.id}>{page.name}</p>);

  return (
    <div className="container">
      <div className="parentdiv">
        <div className="childdiv1">
          <p className="pageclass">Pages </p>
          <input type="checkbox" /> 
          <label for="" className="pagelist">
            {PageNames}
          </label>
          <p className="industrayclass">Industray</p>
          <label for="" style={{ fontSize: "12px" }}>
            {PersonNames}
          </label>
          <p className="price">Price</p>
          <input type="checkbox" /> 
          <label for="" style={{ fontSize: "12px" }}>
            Paid
          </label>
          <input type="checkbox" style={{ marginLeft: "10px" }} /> 
          <label for="" style={{ paddingLeft: "5px", fontSize: "12px" }}>
            Free
          </label>
          <p className="ratingclass">Rating</p>
          <ul className="firstul">
            <li className="firstli">
              <input type="checkbox" name="ratings" value="4" />
              <label className="fcontainer">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </label>
            </li>
          </ul>
          <ul>
            <li className="secondli">
              <input type="checkbox" name="ratings" value="4" />
              <label className="fcontainer">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </label>
            </li>
          </ul>
          <ul>
            <li className="thirdli">
              <input type="checkbox" name="ratings" value="4" />
              <label className="fcontainer">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </label>
            </li>
          </ul>
          <ul>
            <li className="fourthli">
              <input type="checkbox" name="ratings" value="4" />
              <label className="fcontainer">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </label>
            </li>
          </ul>
          <p className="editionclass">Edition</p>
          <input type="checkbox" /> 
          <label for="" style={{ fontSize: "12px" }}>
            {EditionNames}
          </label>
        </div>
        <div className="childdiv2">
          <div>
            <div className="filterpart">
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Filters
              </Button>
              <SimpleDialog open={open} onClose={handleClose} />
            </div>
          </div>
          <div className="cardsection">
            <div className="cardsection1">
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/19834.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Health Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/10811.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Hotel Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/3592721.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  Transport and Logictics Industray
                </p>
              </div>
            </div>
            <div className="cardsection2">
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/18980.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Retail Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/10966.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Travel and Toursim Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/8400.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  Agriculture Industray
                </p>
              </div>
            </div>
            <div className="cardsection2">
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/5836.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Education Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/10089.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Oil and gas Industray
                </p>
              </div>
              <div className="cardsectionpart1">
                <CardMedia
                  className="media"
                  image="./reactweb/10107.jpg"
                  title="Contemplative Reptile"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  Finance and Banking Industray
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
