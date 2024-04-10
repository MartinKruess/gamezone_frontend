import { useEffect, useState } from "react";

export const IMGContainer = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const sliderImages = [
    {
      url: "./images/rl.jpg",
      alt: "Titelbild des Spieles Rocket League Season 9",
    },
    {
      url: "./images/realm.jpg",
      alt: "Titelbild des Spieles Realm Royale reforged",
    },
    {
      url: "./images/towerOfFantasy.jpg",
      alt: "Titelbild des Spieles Tower of Fantasy im Eis Biom",
    },
    {
      url: "./images/SonsForest.jpg",
      alt: "Titelbild des Spieles Sons of the Forest",
    },
    {
      url: "./images/SeaOfThieves.jpg",
      alt: "Titelbild des Spieles Sea of Thieves",
    },
    {
      url: "./images/valo.jpg",
      alt: "Titelbild des Spieles Valorant",
    },
  ];

  useEffect(() => {
    console.log("currentImg", currentImg);
  }, [currentImg]);

  const previosImg = () => {
    setCurrentImg(currentImg === 0 ? sliderImages.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === sliderImages.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <div className="imgContainer">
      <div className="carousel">
        <i className="fa-solid fa-angle-left" onClick={() => previosImg()}></i>
        <div>
          <img
            src={sliderImages[currentImg].url}
            alt={sliderImages[currentImg].alt}
          />
        </div>
        <div className="tabletOff">
          <img
            src={
              currentImg > sliderImages.length - 2
                ? sliderImages[0].url
                : sliderImages[currentImg + 1].url
            }
            alt={
              currentImg > sliderImages.length - 2
                ? sliderImages[0].alt
                : sliderImages[currentImg + 1].alt
            }
          />
        </div>
        <i className="fa-solid fa-angle-right" onClick={() => nextImg()}></i>
      </div>
    </div>
  );
};
