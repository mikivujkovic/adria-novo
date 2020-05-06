import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-cib/instagram";
import facebookIcon from "@iconify/icons-cib/facebook";
import twitterIcon from "@iconify/icons-cib/twitter";
import youtubeIcon from "@iconify/icons-cib/youtube";

const Footer = () => {
  return (
    <div className="footer-mobile">
      <div className="social-wrapper-footer-mobile">
        <div className="social-item-mobile">
          <a href="https://www.facebook.com/jovan.radulovic.3304">
            <Icon icon={facebookIcon} />
          </a>
        </div>
        <div className="social-item-mobile">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={instagramIcon} />
          </a>
        </div>
        <div className="social-item-mobile">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={twitterIcon} />
          </a>
        </div>
        <div className="social-item-mobile">
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={youtubeIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
