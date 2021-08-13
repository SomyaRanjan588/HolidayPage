import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "../pages/Firstpart2";
import Dropdownone from "../pages/Firstpart1";
import Middlepart from "./Components/Middle";
import Logo from "./Components/Logo.js";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  root: {
    flexGrow: 2,
    color: "black",
  },
  app: {
    backgroundColor: "white",
  },
  home: {
    fontWeight: 700,
  },
  about: {
    fontWeight: 700,
  },
  contact: {
    fontWeight: 700,
  },
  services: {
    fontWeight: 700,
  },
  service: {
    fontWeight: 700,
  },
}));

export default function ButtonAppBar() {
  const [selected, setSelected] = useState("");
  const classes = useStyles();
  const [mobileMenuAnchoreElement, setMobileMenuAnchorElement] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchoreElement);

  const openMobileMenu = (event) => {
    setMobileMenuAnchorElement(event.currentTarget);
  };
  const closeMobilemenu = () => {
    setMobileMenuAnchorElement(null);
  };

  const mobileMenu = (
    <Menu
      anchorElement={mobileMenuAnchoreElement}
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem
        className={classes.home}
        onClick={openMobileMenu}
        style={{ fontWeight: 600, fontSize: 14 }}
      >
        HOME
      </MenuItem>
      <MenuItem
        className={classes.about}
        onClick={openMobileMenu}
        style={{ fontWeight: 600, fontSize: 14 }}
      >
        ABOUT
      </MenuItem>
      <MenuItem
        className={classes.contact}
        onClick={openMobileMenu}
        style={{ fontWeight: 600, fontSize: 14 }}
        onClick={openMobileMenu}
      >
        CONTACT
      </MenuItem>
      <MenuItem>
        <Dropdownone onClick={openMobileMenu} />
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.app}>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }}>
              <Logo />
            </Typography>
            <div className={classes.sectionDesktop}>
              <Button className={classes.home}> Home </Button>
              <Button className={classes.about}> About </Button>
              <Button className={classes.contact}> Contact</Button>

              <Dropdownone />
            </div>
            <IconButton color="bold" onClick={openMobileMenu}>
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {mobileMenu}

        <Dropdown selected={selected} setSelected={setSelected} />
        <div>
          <Middlepart />
        </div>
      </div>
    </Fragment>
  );
}
