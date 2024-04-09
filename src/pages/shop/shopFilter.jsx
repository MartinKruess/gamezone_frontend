import { useContext } from "react"
import { ShopContext } from "../../global/useContext"

export const ShopFilter = () => {
    const {type, setType, filter,  setFilter} = useContext(ShopContext)

    const getTypeTarget = (e) => {
        setType(e.target.value)
    }

    const getFilterTarget = (e) => {
        setFilter(e.target.value)
    }

return(
    <form action="" className="shopFilter">
        <select name="typeTarget" id=""
        onChange={(e) => getTypeTarget(e)}>
            <option value="default">Alle</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="V-Shirt">V-Shirt</option>
            <option value="TankTop">Tank Top</option>
            <option value="Langarmshirt">Langarmshirt</option>
            <option value="Sweater">Sweater</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Kapuzen-Hoodie">Kaputzen-Hoodie</option>
        </select>
        <select name="filterTarget" id=""
        onChange={(e) => getFilterTarget(e)}>
            <option value="default">unsortiert</option>
            <option value="ascending">Preis up</option>
            <option value="descending">Preis down</option>
            <option value="new">Neuheiten</option>
            <option value="sells">Topseller</option>
        </select>
    </form>
)}