import styles from "./styles.module.css";
import Card from "../../components/Card";
import NewsFeed from "../../icons/NewsFeed";
import MarketPlace from "../../icons/Marketplace";
import Gallery from "../../icons/Gallery";

const Menu = () => {
  return (
    <Card>
      <div className={`${styles.option} ${styles.selected} ${styles.icon}`}>
        <NewsFeed />
        <div className={`${styles.optionText}`}>News Feed</div>
      </div>
      <div className={`${styles.option} ${styles.nonSelected}`}>
        <MarketPlace />
        <div className={`${styles.optionText}`}>Market Place</div>
      </div>
      <div className={`${styles.option} ${styles.nonSelected}`}>
        <Gallery />
        <div className={`${styles.optionText}`}>Gallery</div>
      </div>
    </Card>
  );
};

export default Menu;
