import { Link } from "react-router-dom"

export const Dropdown = () => {
return (
    <div className="dropdownMenu">
        <Link to="/">
            <i class="fa-solid fa-house"></i>Home 
        </Link>
        <Link to="/live/streamplan" >
        <i class="fa-brands fa-twitch"></i> Streamplan
        </Link>
        <Link to="/mygame/celestabyss" >
            <i class="fa-solid fa-gamepad"></i> Celest Abyss
        </Link>
        <Link to="/shop/merch">
            <i class="fa-solid fa-shirt"></i> Merch Shop
        </Link>        
    </div>
    )
}