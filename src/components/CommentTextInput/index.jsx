import styles from "./styles.module.css";
const CommentTextInput = ({
  id,
  type = "text",
  placeholder = "Type your comment here",
  inputValue,
  onChangeTextInput,
  className = "",
  props,
}) => {
  return (
    <textarea
      id={id}
      inputValue={inputValue}
      className={`${styles.input}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeTextInput}
    />
  );
};

export default CommentTextInput;
