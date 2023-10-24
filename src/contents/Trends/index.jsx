import styles from "./styles.module.css";
import Card from "../../components/Card";
import TrendImage from "../../img/trendsImage.png";

const index = ({
  className = "",
  title = "On Trending",
  trendsName = "trends name",
  firstText = "Nothing to See Here!",
  secondText = "Start with your priorities first.",
  ...props
}) => {
  return (
    <div>
      <Card>
        <div className={`${styles.container}`}>
          <div className={`${styles.title}`}>{title}</div>
          <div className={`${styles.imageContainer}`}>
            <img src={TrendImage} alt={trendsName} width="70%" />
          </div>
          <div className={`${styles.firstText}`}>{firstText}</div>
          <div className={`${styles.secondText}`}>{secondText}</div>
        </div>
      </Card>
    </div>
  );
};

export default index;
