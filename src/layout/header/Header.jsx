import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import etho_logo from "../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [menutoggle, settogglmenu] = useState(true);

  const hanldeMenu = () => {
    console.log("t");
    settogglmenu(!menutoggle);
  };
  return (
    <>
      <header>
        <div className="container-xxl main_header web_view">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-2">
              <div classNa me="aw_logo">
                <img src={etho_logo} alt="logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="header_nav">
                <ul className="">
                  <li className="nav-item">
                    <Link to="#"> Miner </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#"> Contract</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#"> Telegram </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#"> How to Start </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="btn_tele d-flex justify-content-end">
                <button>Telegram</button>
                <button>Miner</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_view">
          <div className="container-xxl">
            <div className="row justify-content-between">
              <div className="col-6">
                <div classNa me="aw_logo">
                  <img src={etho_logo} alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="mobile_navigation" onClick={hanldeMenu}>
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
     
        <div className={menutoggle ? "menu--mobile hide--mobilemen" : ' menu--mobile '}>
          <div className="header_nav">
            <ul className="">
              <li className="nav-item">
                <Link to="#"> Miner </Link>
              </li>
              <li className="nav-item">
                <Link to="#"> Contract</Link>
              </li>
              <li className="nav-item">
                <Link to="#"> Telegram </Link>
              </li>
              <li className="nav-item">
                <Link to="#"> How to Start </Link>
              </li>
            </ul>
          </div>
        </div>
      
    </>
  );
};

export default Header;
