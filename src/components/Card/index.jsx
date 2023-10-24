import styles from "./styles.module.css";

const Card = ({ className = "", children, ...props }) => {
  return (
    <div className={`${styles.container}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
