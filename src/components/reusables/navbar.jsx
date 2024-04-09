import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
  };

  return (
    <nav className="navbarContainer">
      
      <Link className="button" onClick={toggleDropdown}>
        <i className="fa-solid fa-bars"></i>
        {drop && <Dropdown />}
      </Link>
    </nav>
  );
};
