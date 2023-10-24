import styles from "./styles.module.css";
const CommentArea = ({
  className = "",
  id,
  profilePic = "MH",
  name,
  date = "13 min",
  body,
  ...props
}) => {
  return (
    <div className={`${styles.container}`} {...props} id={id}>
      <div className={` ${styles.row}`}>
        <div className={`${styles.profilePic} `}>{profilePic}</div>
        <div className={`${styles.profileName} `}>{name}</div>
        <div className={`${styles.date} `}>{date}</div>
      </div>
      <div className={` ${styles.commentText}`}>{body}</div>
    </div>
  );
};

export default CommentArea;
