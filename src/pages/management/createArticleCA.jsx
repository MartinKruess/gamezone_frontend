import { useContext, useEffect, useState } from "react";
import { backendURL } from "../../App";
import { CreatePreview } from "../../components/reusables/createPreview";
import { CreateArticle } from "../../components/reusables/newSpan";
import { CelestArticleContext } from "../../global/useContext";
import {
  getFromLocalStorage,
  saveInLocalStorage,
} from "../../global/localstorage";

export const CreateArticleCA = () => {
  const { newArticle, setNewArticle } = useContext(CelestArticleContext);
  const [preview, setPreview] = useState(true);
  const [spans, setSpans] = useState([1]);

  useEffect(() => {
    saveInLocalStorage("newArticle", newArticle);
    getFromLocalStorage("newArticle", newArticle);
  }, [preview]);

  const clickHandler = () => {
    setSpans([...spans, spans + 1]);
  };

  const handleCreateArticle = async (caData) => {
    console.log("caData", caData);

    const res = await fetch(`${backendURL}/management/ca`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(caData),
    });
    const newArticles = await res.json();
    console.log(newArticles);
  };

  return (
    <article id="ca">
      <h2>Neuer Celest Abyss Blog-Post</h2>
      <div className="articleMenu">
        <button onClick={() => setPreview(true)} className="button">
          Preview
        </button>
        <button onClick={() => setPreview(false)} className="button">
          Details
        </button>
      </div>
      {preview === true ? (
        <CreatePreview />
      ) : (
        <div>
          {spans.map((span, i) => (
            <div key={i}>
              <CreateArticle i={i} />
            </div>
          ))}
          {spans.length < 5 && (
            <button className="newSpan" onClick={() => clickHandler()}>
              + add span
            </button>
          )}
        </div>
      )}
      <button
        className="createArticle"
        type="submit"
        onClick={() => handleCreateArticle(newArticle)}
      >
        Artikel erstellen
      </button>
    </article>
  );
};
