import styles from "./styles.module.css";
import Logo from "../../icons/Logo";
import SearchBoxInput from "../../components/SearchBoxInput";
import Notification from "../../icons/Notification";
import Chat from "../../icons/Chat";
import People from "../../icons/People";
import Explorer from "../../icons/Explorer";
import HeaderProfile from "../../components/HeaderProfile";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
const Header = ({ className = "", ...props }) => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    
    <>
      {width >=750 && (
      <div className={`${styles.container}  ${styles.row}`} {...props}>
        <div className={`${styles.logoContainer}`}>
          <Logo />
        </div>
        <div className={`${styles.searchContainer}`}>
          <SearchBoxInput />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Notification />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Chat />
        </div>
        <div className={`${styles.iconContainer}`}>
          <People />
        </div>
        <div className={`${styles.iconContainer}`}>
          <Explorer />
        </div>
        <div className={`${styles.profileContainer}`}>
          <HeaderProfile />
        </div>
      </div>
      )}
      {width < 750 && (
      <Navbar />
      )}
    </>
  );
};

export default Header;
