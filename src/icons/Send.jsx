const Send = ({ width = "24", height = "25" }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2.0127L11 13.0127"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2.0127L15 22.0127L11 13.0127L2 9.0127L22 2.0127Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Send;
