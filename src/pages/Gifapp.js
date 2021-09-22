import React from "react";
import "../App.css";
import Popup from "./Popbox";
import Divider from "@material-ui/core/Divider";

import LeftApp from "./Gifapp1";
import RightApp from "./Gifapp2";
import { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: "center",
  },
}));

function Gifapp() {
  const [timePopup, setTimePopup] = useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
      setOpen(true);
    }, 50);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <div>
        <h4 className="title">Welcome to Random GIF Application</h4>
        <Divider />
      </div>
      <div className="leftright">
        <LeftApp />
        <RightApp />
      </div>
      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoFocus
                    size="small"
                    label="Email Adress"
                    margin="normal"
                  />
                  <br></br>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                  />
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Popup>
    </div>
  );
}

export default Gifapp;
