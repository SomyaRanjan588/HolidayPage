import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography>
        <Button
          className="service"
          aria-controls="simple-menu"
          onClick={handleClick}
        >
          <Typography style={{ fontWeight: 600, fontSize: 14 }}>
            services
          </Typography>
        </Button>
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menuitem"
      >
        <Link href="https://searchingyard.com/mobile-application-development.php">
          <MenuItem onClick={handleClose}>Mobile Application</MenuItem>
        </Link>
        <Link href="https://searchingyard.com/web-application-development.php">
          <MenuItem onClick={handleClose}>Web Application</MenuItem>
        </Link>
        <Link href="https://searchingyard.com/custom-application-development.php">
          <MenuItem onClick={handleClose}>Custom Application</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
