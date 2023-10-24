import styles from "./styles.module.css";
import Menu from "../../contents/Menu";
import Comments from "../../contents/Comments";
import News from "../../contents/News";
import Trends from '../../contents/Trends'

const MainPage = ({ className = "", ...props }) => {
  return (
    <div className="row p-3">
      <div className="col-lg-3">
        <div className="p-3">
          <Menu />
        </div>
        <div className="p-3">
          <Comments />
        </div>
      </div>
      <div className="col-lg-6 col-12 p-3">
        <News />
      </div>
      <div className="col-lg-3 col-12 px-4 pt-3">
        <Trends />
      </div>
    </div>
  );
};

export default MainPage;
