import React from "react";
import "./FooterDesk.css";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-cib/instagram";
import facebookIcon from "@iconify/icons-cib/facebook";
import twitterIcon from "@iconify/icons-cib/twitter";
import youtubeIcon from "@iconify/icons-cib/youtube";
import logoWhite from "./logo_white.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const FooterDesk = () => {
  return (
    <div className="footer">
      <div className="logo-wrapper">
        <img src={logoWhite} alt="logo" style={{ height: 50 }} />
      </div>
      <div className="link-wrapper">
        <Button color="primary" size="large">
          <Link to="/category/25" className="link-button">
            Info
          </Link>
        </Button>
        <Button color="primary" size="large" className="link-button">
          <Link to="/category/26" className="link-button">
            Politika
          </Link>
        </Button>
        <Button color="primary" size="large" className="link-button">
          <Link to="/category/5" className="link-button">
            Kultura
          </Link>
        </Button>
      </div>
      <div className="link-wrapper">
        <Button color="primary" size="large" className="link-button">
          <Link to="/category/27" className="link-button">
            Tehno
          </Link>
        </Button>
        <Button color="primary" size="large" className="link-button">
          <Link to="/category/7" className="link-button">
            Sport
          </Link>
        </Button>
        <Button color="primary" size="large" className="link-button">
          <Link to="/category/28" className="link-button">
            Magazin
          </Link>
        </Button>
      </div>
      <div className="social-wrapper-footer">
        <div className="social-item-first">
          <a href="https://www.facebook.com/jovan.radulovic.3304">
            <Icon icon={facebookIcon} />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={instagramIcon} />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={twitterIcon} />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={youtubeIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterDesk;
