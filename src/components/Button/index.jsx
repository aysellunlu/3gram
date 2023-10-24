import styles from "./styles.module.css";

const Button = ({ className = "", type = "", children, ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[type]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
