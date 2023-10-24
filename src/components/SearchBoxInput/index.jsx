import styles from "./styles.module.css";
import SearchIcon from "../../img/search.png";
const SearchBoxInput = ({
  id,
  type = "text",
  placeholder = "Search...",
  inputValue,
  onChangeTextInput,
  className = "",
  props,
}) => {
  return (
    <>
    <div className={`${styles.iconContainer}`}>
    <img src={SearchIcon} alt="searchIcon" />
    </div>
     
      <input
        id={id}
        inputValue={inputValue}
        className={`${styles.input} ${styles.iconInput}`}
        type={type}
        placeholder={placeholder}
        onChange={onChangeTextInput}
      />
    </>
  );
};

export default SearchBoxInput;
