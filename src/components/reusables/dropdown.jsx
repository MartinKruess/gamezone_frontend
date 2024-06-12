import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <div className="dropdownMenu">
      <Link to="/">
        <i className="fa-solid fa-house"></i>Home
      </Link>
      <Link to="/live/streamplan">
        <i className="fa-brands fa-twitch"></i> Streamplan
      </Link>
      <Link to="/mygame/celestabyss">
        <i className="fa-solid fa-gamepad"></i> Celest Abyss
      </Link>
      <Link to="/shop/merch">
        <i className="fa-solid fa-shirt"></i> Merch Shop
      </Link>
    </div>
  );
};
