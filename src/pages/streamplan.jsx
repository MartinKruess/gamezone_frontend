import { Termine } from "../global/termine";

export const Streamplan = () => {
  const streamPlanDetails = [
    {
      title: "Valorant - Der Schlumpfschütze on Tour",
      time: "18-21 Uhr",
      video:
        "https://res.cloudinary.com/streamcollection/video/upload/v1712657986/valo1_uojtl1.mp4",
      img: "",
      day: "Dienstag",
    },
    {
      title: "Rocket League",
      time: "18-21 Uhr",
      video:
        "https://res.cloudinary.com/streamcollection/video/upload/v1712659462/rl1_w24uef.mp4",
      img: "",
      day: "Donnerstag",
    },
    {
      title: "Rocket League - 3s mit Rakete13 und SamoPaddy",
      time: "18-21 Uhr",
      video:
        "https://res.cloudinary.com/streamcollection/video/upload/v1712657953/rl2_q88d5g.mp4",
      img: "",
      day: "Sonntag",
    },
  ];

  return (
    <section className="streamplanContainer">
      <Termine />
      <h2>Streamplan - Raikun</h2>
      <article className="planContainer">
        {streamPlanDetails.map((streamDay, i) => (
          <div className="planCard">
            <div className="day">
              <h2 className="streamHeader">{streamDay.title}</h2>
              <p>
                {streamDay.day}: {streamDay.time}
              </p>
            </div>
            <div className="video">
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                src={streamDay.video}
              ></video>
            </div>
            <div className="social">
              <a
                href="https://www.twitch.tv/RaikunGaming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitch"></i>
              </a>
              <a
                href="https://www.youtube.com/@RaikunsGamezone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="http://"></a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
