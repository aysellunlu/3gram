import styles from "./styles.module.css";
import FooterLogo from "../../icons/FooterLogo";
import Facebook from "../../icons/Facebook";
import GitLab from "../../icons/GitLab";
import GitHub from "../../icons/GitHub";
import Send from "../../icons/Send";
import Instagram from "../../icons/Instagram";
import Figma from "../../icons/Figma";
import { useState, useEffect } from "react";

const Footer = ({ className = "", ...props }) => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <>
    {width >= 800 && (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={`${styles.logoContainer} `}>
        <FooterLogo />
        <p>
          High level experience in web design and development <br /> knowledge,
          producing quality work.
        </p>
      </div>
      <div className={`${styles.usecasesContainer} `}>
        <h5>Use Cases</h5>

        <a href="/">Web Designers</a>
        <br />
        <a href="/">Marketers</a>
        <br />
        <a href="/">Small Business</a>
        <br />
        <a href="/">Website Builder</a>
        <br />
      </div>
      <div className={`${styles.companyContainer} `}>
        <h5>Company</h5>
        <a href="/">About Us</a> <br />
        <a href="/">Careers</a>
        <br />
        <a href="/">FAQs</a>
        <br />
        <a href="/">Teams</a>
        <br />
        <a href="/">Contact Me</a>
        <br />
      </div>
      <div className={`${styles.followusContainer} `}>
        <h5>Follow Us</h5>
        <div className={`${styles.iconsContainer} `}>
          <div className={`${styles.iconContainer} `}>
            <Facebook />
          </div>
          <div className={`${styles.iconContainer} `}>
            <GitLab />
          </div>
          <div className={`${styles.iconContainer} `}>
            <GitHub />
          </div>
          <div className={`${styles.iconContainer} `}>
            <Send />
          </div>
          <div className={`${styles.iconContainer} `}>
            <Instagram />
          </div>
          <div className={`${styles.iconContainer} `}>
            <Figma />
          </div>
        </div>
      </div>
    </div>
     )}
      {width <= 425 && (
        <div className="mt-4 mb-4 text-center">MOBILE FOOTER</div>
         )}
    </>
  );
};

export default Footer;
