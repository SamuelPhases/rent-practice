import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div>
          <h3>about</h3>
          <ul>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div>
          <h3>community</h3>
          <ul>
            <li>diversity & belonging</li>
            <li>diversity & belonging</li>
            <li>diversity & belonging</li>
            <li>diversity & belonging</li>
            <li>diversity & belonging</li>
            <li>diversity & belonging</li>
          </ul>
        </div>
        <div>
          <h3>host</h3>
          <ul>
            <li>host your home</li>
            <li>host your home</li>
            <li>host your home</li>
            <li>host your home</li>
            <li>host your home</li>
            <li>host your home</li>
          </ul>
        </div>
        <div>
          <h3>support</h3>
          <ul>
            <li>Updates for COVID-19</li>
            <li>Updates for COVID-19</li>
            <li>Updates for COVID-19</li>
            <li>Updates for COVID-19</li>
            <li>Updates for COVID-19</li>
            <li>Updates for COVID-19</li>
          </ul>
        </div>
      </div>
      <div className="footer__container2">
        <div className="footer__containerleft">
          <p>&copy; 2020 Airbnb, Inc. All rights reserved</p>
          <p>&middot;</p>
          <p>privacy</p>
          <p>&middot;</p>
          <p>terms</p>
          <p>&middot;</p>
          <p>sitemap</p>
        </div>
        <div className="footer__containerright">
          <div>
            <LanguageIcon />
            <h2>English(US)</h2>
          </div>
          <div>
            <AttachMoneyIcon />
            <h2>USD</h2>
          </div>
          <div className="social">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
