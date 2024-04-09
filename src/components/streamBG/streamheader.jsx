export const StreamHeader = () => {
  return (
    <div className="headContainer">
      <div className="videoLogoContainer">
        <video src="./images/DragonEye.mp4" autoPlay muted loop></video>
      </div>
      <div className="breakHeader">KURZE PAUSE</div>
      <div className="socialContainer">
        <img src="./images/youtubeLogo.png" alt="" />
        <a
          href="https://www.youtube.com/@RaikunsGamezone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="yt">
            <i className="fa-solid fa-caret-right">
              <span> Abo</span>
            </i>
          </div>
        </a>
        <a
          href="http://twitch.tv/RaikunGaming"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitch twitch">
            <span>Follow</span>
          </i>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-amazon">
            {" "}
            <span> Merch</span>
          </i>
        </a>
      </div>
    </div>
  );
};
