const FooterLogo = ({ width = "110", height = "33" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="16" r="11" stroke="white" stroke-width="4" />
      <circle cx="20" cy="7" r="5" fill="white" />
      <circle cx="13" cy="16" r="5" fill="white" />
      <path
        d="M41.792 24.264C40.608 24.264 39.48 24.096 38.408 23.76C37.336 23.424 36.456 22.968 35.768 22.392L36.944 19.584C38.368 20.64 39.936 21.168 41.648 21.168C43.6 21.168 44.576 20.44 44.576 18.984C44.576 17.64 43.664 16.968 41.84 16.968H39.008V13.968H41.48C42.28 13.968 42.912 13.784 43.376 13.416C43.84 13.048 44.072 12.536 44.072 11.88C44.072 10.568 43.216 9.912 41.504 9.912C39.904 9.912 38.48 10.448 37.232 11.52L36.056 8.784C36.76 8.16 37.624 7.68 38.648 7.344C39.672 6.992 40.736 6.816 41.84 6.816C43.664 6.816 45.088 7.224 46.112 8.04C47.136 8.856 47.648 9.976 47.648 11.4C47.648 12.28 47.424 13.056 46.976 13.728C46.528 14.4 45.904 14.888 45.104 15.192C46.064 15.464 46.808 15.968 47.336 16.704C47.88 17.424 48.152 18.296 48.152 19.32C48.152 20.856 47.584 22.064 46.448 22.944C45.312 23.824 43.76 24.264 41.792 24.264ZM56.6866 28.584C55.5506 28.584 54.4866 28.464 53.4946 28.224C52.5186 27.984 51.6626 27.608 50.9266 27.096L51.9106 24.624C52.5506 25.024 53.2706 25.328 54.0706 25.536C54.8866 25.76 55.6546 25.872 56.3746 25.872C58.4226 25.872 59.4466 24.928 59.4466 23.04V21.696C59.1266 22.304 58.6226 22.792 57.9346 23.16C57.2466 23.528 56.4946 23.712 55.6786 23.712C54.6226 23.712 53.7026 23.472 52.9186 22.992C52.1346 22.496 51.5266 21.808 51.0946 20.928C50.6626 20.048 50.4466 19.016 50.4466 17.832C50.4466 16.664 50.6626 15.64 51.0946 14.76C51.5266 13.88 52.1346 13.2 52.9186 12.72C53.7026 12.224 54.6226 11.976 55.6786 11.976C56.5266 11.976 57.2866 12.16 57.9586 12.528C58.6306 12.896 59.1266 13.384 59.4466 13.992V12.216H62.9746V22.632C62.9746 24.616 62.4386 26.104 61.3666 27.096C60.2946 28.088 58.7346 28.584 56.6866 28.584ZM56.7586 21C57.5586 21 58.1986 20.72 58.6786 20.16C59.1746 19.6 59.4226 18.824 59.4226 17.832C59.4226 16.84 59.1746 16.072 58.6786 15.528C58.1986 14.968 57.5586 14.688 56.7586 14.688C55.9426 14.688 55.2946 14.968 54.8146 15.528C54.3346 16.072 54.0946 16.84 54.0946 17.832C54.0946 18.824 54.3346 19.6 54.8146 20.16C55.2946 20.72 55.9426 21 56.7586 21ZM66.0282 24V12.216H69.5802V14.256C70.1402 12.88 71.3402 12.12 73.1802 11.976L74.2362 11.904L74.4522 14.952L72.4122 15.168C70.6202 15.344 69.7242 16.256 69.7242 17.904V24H66.0282ZM80.0257 24.264C79.1457 24.264 78.3697 24.096 77.6977 23.76C77.0257 23.424 76.4897 22.968 76.0897 22.392C75.7057 21.816 75.5137 21.168 75.5137 20.448C75.5137 19.6 75.7377 18.92 76.1857 18.408C76.6337 17.896 77.3617 17.536 78.3697 17.328C79.3777 17.104 80.7137 16.992 82.3777 16.992H83.2417V16.584C83.2417 15.88 83.0817 15.384 82.7617 15.096C82.4417 14.792 81.8977 14.64 81.1297 14.64C80.4897 14.64 79.8097 14.744 79.0897 14.952C78.3857 15.144 77.6817 15.44 76.9777 15.84L75.9937 13.416C76.4097 13.144 76.9137 12.896 77.5057 12.672C78.1137 12.448 78.7457 12.28 79.4017 12.168C80.0577 12.04 80.6817 11.976 81.2737 11.976C83.0977 11.976 84.4577 12.392 85.3537 13.224C86.2497 14.04 86.6977 15.312 86.6977 17.04V24H83.3137V22.224C83.0737 22.848 82.6657 23.344 82.0897 23.712C81.5297 24.08 80.8417 24.264 80.0257 24.264ZM80.8417 21.84C81.5137 21.84 82.0817 21.608 82.5457 21.144C83.0097 20.68 83.2417 20.08 83.2417 19.344V18.864H82.4017C81.1697 18.864 80.2977 18.976 79.7857 19.2C79.2737 19.408 79.0177 19.776 79.0177 20.304C79.0177 20.752 79.1697 21.12 79.4737 21.408C79.7937 21.696 80.2497 21.84 80.8417 21.84ZM89.6891 24V12.216H93.2411V13.92C93.5931 13.312 94.0731 12.84 94.6811 12.504C95.3051 12.152 96.0251 11.976 96.8411 11.976C97.6731 11.976 98.3771 12.16 98.9531 12.528C99.5451 12.896 99.9931 13.456 100.297 14.208C100.665 13.504 101.193 12.96 101.881 12.576C102.585 12.176 103.361 11.976 104.209 11.976C105.553 11.976 106.553 12.384 107.209 13.2C107.865 14 108.193 15.24 108.193 16.92V24H104.569V17.04C104.569 16.256 104.441 15.688 104.185 15.336C103.945 14.968 103.529 14.784 102.937 14.784C102.249 14.784 101.713 15.024 101.329 15.504C100.945 15.984 100.753 16.664 100.753 17.544V24H97.1291V17.04C97.1291 16.256 97.0011 15.688 96.7451 15.336C96.4891 14.968 96.0731 14.784 95.4971 14.784C94.8091 14.784 94.2731 15.024 93.8891 15.504C93.5051 15.984 93.3131 16.664 93.3131 17.544V24H89.6891Z"
        fill="white"
      />
    </svg>
  );
};

export default FooterLogo;