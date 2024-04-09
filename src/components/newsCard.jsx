import { useState } from "react";
import { useEffect } from "react";
import { loadData } from "../global/loadData";

// BLOCK POSTS

export const NewsCard = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);
  let [restructedArticles, setRestructedArticles] = useState(["test"]);

  useEffect(() => {
    const dataFetch = async () => {
      const result = await loadData("load/ca");
      setAllArticles(result);
    };
    dataFetch();
  }, []);

  useEffect(() => {
    const arr = allArticles.sort((a, b) => Number(b.date) - Number(a.date));
    setRestructedArticles(arr);
  }, [allArticles, restructedArticles]);

  useEffect(() => {}, [toggle, index]);

  const handleToggle = (i) => {
    setIndex(i);
    console.log("Close", index, "Open", i, toggle);
    index === i && setToggle(!toggle);
    index != i && toggle && setToggle(toggle);
    index != i && !toggle && setToggle(!toggle);
  };

  return (
    allArticles &&
    restructedArticles
      .slice(0)
      .reverse()
      .map((article, i) => (
        <div className="basicNewsCard" key={i}>
          <div className="newsHeadLine">
            <h2>{article.title}</h2>
            <h2 className="date">{article.date}</h2>
          </div>

          {!toggle && <p className="newsDescription">{article.description}</p>}
          <button className="newsDetails" onClick={() => handleToggle(i)}>
            zum Artikel
          </button>
          {toggle &&
            i === index &&
            article.paragraphs.map(
              (paragraph, p) =>
                paragraph.paraContext && (
                  <div className="paragraphs" key={`part_${p}`}>
                    <h3 className="paraTitle">{paragraph.paraTitle}</h3>
                    {paragraph.paraTitle ? <hr /> : <></>}
                    <div className="contentContainer">
                      <span className="paraContent" style={{ width: "69%" }}>
                        {paragraph.imgPos != "center" && (
                          <span className={paragraph.imgPos}>
                            <img src={paragraph.paraImg} alt="" />
                          </span>
                        )}
                        {/* {paragraph.paraContext.replace(/\\n/g, '\n')} */}
                        {paragraph.paraContext
                          .split("\\n")
                          .map((paragraphPart, pp) => (
                            <div
                              style={{ paddingBottom: "1rem" }}
                              key={`pp_${pp}`}
                            >
                              {" "}
                              {paragraphPart}
                            </div>
                          ))}
                        {paragraph.imgPos === "center" && (
                          <div
                            className={paragraph.imgPos}
                            style={{ width: "100%" }}
                          >
                            <img
                              src={paragraph.paraImg}
                              style={{ width: "30%" }}
                              alt=""
                            />
                          </div>
                        )}
                      </span>
                    </div>
                  </div>
                )
            )}
        </div>
      ))
      .sort()
  );
};
