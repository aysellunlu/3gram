import styles from "./styles.module.css";

const HeaderProfile = ({
  className = "",
  name = "Ryan Azhari",
  profileImg = "RA",
  ...props
}) => {
  return (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={`${styles.nameText}`}>{name}</div>
      <div className={`${styles.profileImg}`}>{profileImg}</div>
    </div>
  );
};

export default HeaderProfile;
