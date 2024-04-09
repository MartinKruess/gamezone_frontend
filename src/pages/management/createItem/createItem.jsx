import { useEffect, useState } from "react"
import { backendURL } from "../../../App"

export const CreateItem = () => {
    const [article, setArticle] = useState({
        title: "",
        description: "",
        wash: "max 49°C",
        dry: "Bei niedriger Hitze",
        collection:"Gamer4Ever",
        brand: "Gamezone",
        creator: "Raikun",
        type: "",
        gender: "",
        price: 0,
        image: "",
        url: "",
        sells: 0,
        drachenmünzen: 0,
    })

    const validation = () => {
        if(article.title.length > 2 && article.description.length > 2 && article.type.length > 2 && article.price.length > 2 && article.url.length > 2) {
            saveArticle()
        }else{
            return alert("Ups, da fehlen wichtige Angaben!")
        }
    }

    const saveArticle = () => {
        const res = fetch(`${backendURL}/management/item`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        })
    }

    const onChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
      }

    return(
        <article className="articleForm" id="merch">
            <h2>Neuen Merch Artikel anlegen</h2>
            <form action="" onChange={(e) => onChange(e)}>
                <label>
                    <span>Title</span>
                    <input type="text" name="title" required />
                </label>
                <label>
                    <span>Beschreibung</span>
                    <textarea name="description" cols="5" rows="5" maxLength={500} required ></textarea>
                </label>
                <label>
                    <span>Collection</span>
                    <input type="text" name="collection" required />
                </label>
                <label>
                    <span>Image</span>
                    <input type="text" name="image" />
                </label>
                <label>
                    <span>Brand</span>
                    <input type="text" name="brand" />
                </label>
                <label>
                    <span>Creator</span>
                    <input type="text" name="creator" required />
                </label>
                <label>
                    <span>Type</span>
                    <input type="text" name="type" required />
                </label>
                <label>
                    <span>Gender</span>
                    <input type="text" name="gender" required />
                </label>
                <label>
                    <span>Preis</span>
                    <input type="number" name="price" required />
                </label>
                <label>
                    <span>URL</span>
                    <input type="text" name="url" required />
                </label>
                <label>
                    <span>Drachenmünzen</span>
                    <input type="number" name="drachenmünzen" />
                </label>
                <button type="button" onClick={() => validation()}  >Save</button>
            </form>
            <div className="shopPreviewContainer">
                <h3>{article.title}</h3>
                <div className="shopPreviewCard">
                    <img src={article.image} alt="" ></img>
                </div>
                <p>{article.type}</p>
                <p>{article.sells}</p>
                <p className="description">{article.description}</p>
                <div className="cardFooter">
                    <p className="price">{article.price} €
                    </p>
                    <a href={article.url} target="_blank">zum Artikle</a>
                </div>
            </div>
        </article>
    )
}