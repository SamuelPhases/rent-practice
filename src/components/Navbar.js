import React from "react";
import "./Navbar.css";

//
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DragHandleOutlinedIcon from "@material-ui/icons/DragHandleOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__row">
        <img
          src="https://lh3.googleusercontent.com/proxy/A71QAq_YkQioQ8QvReMw03gLTrxVvhnf_LSIBOfxm5P3o_ouMFaXMm3cbBrMlXH6FmQxqxylBC4pMvpSqQK63BhOp25XSRn6ggq86yMGjeTv6FsNVoY"
          alt=""
          className="logo"
        />
        <div className="navbar__middle">
          <Search />
        </div>
        <div className="navbar__right">
          <p className="host">Become a host</p>
          <div className="navbar__lang">
            <LanguageIcon />
            <ExpandMoreIcon />
          </div>
          <div className="navbar__login">
            <DragHandleOutlinedIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
