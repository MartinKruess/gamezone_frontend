export const Footer = () => {
  return (
    <section className="footerContainer">
      <article className="aboutContainer">
        <ul>
          <li>Kontakte</li>
          <li>Impressum</li>
          <li>Datenschutz</li>
        </ul>
      </article>
      <article className="socialContainer">
        <a
          className="discord"
          href="https://discord.gg/NMErAPK"
          target="_blank"
        >
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="https://www.twitch.tv/raikungaming" target="_blank">
          <i className="fa-brands fa-twitch"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCi3rd4qmZhIv9eaYzPLzrqg"
          target="_blank"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="http://tiktok.com/@raikungz" target="_blank">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </article>
    </section>
  );
};
