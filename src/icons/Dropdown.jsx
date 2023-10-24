const Dropdown = ({ width = "14", height = "8" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#C9CED6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Dropdown;
