import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../global/useContext";
import { loadData } from "../../global/loadData";

export const ShopCard = () => {
  const {type, filter} = useContext(ShopContext)
  const [merches, setMerches] = useState([])
  const [merchArr, setMerchArr] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const result = await loadData("merchArticles")
      setMerches(result)
      setMerchArr(result)
    }
    dataFetch()
  }, [])

  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price - b.price) },
    descending: { method: (a, b) => (b.price - a.price) },
    new: { method: (a, b) => (a.timestamp - b.timestamp) },
    sells: { method: (a, b) => (b.sells - a.sells) },
  };
  
  useEffect(() => {
    const filteredArticles = merches && merches.filter((merch => merch.type === type))
    type === "default" ? setMerchArr(merches) : setMerchArr(filteredArticles)
    console.log("filteredArticles", filteredArticles, type)
  }, [type])

  return (
    <article>
      {merchArr.sort(sortMethods[filter].method).map((article, i) => (
        <div key={i} className="shopPreviewContainer">
          <h3>{article.title}</h3>
          <div className="shopPreviewCard">
            <img src={article.image} alt="" ></img>
          </div>
          <p>{article.type}</p>
          <p className="description">{article.description}</p>
          <div className="cardFooter">
            <p className="price">{article.price} €
            </p>
            <a href={article.url} target="_blank">zum Artikle</a>
          </div>
        </div>
      ))}
    </article>
  );
};
