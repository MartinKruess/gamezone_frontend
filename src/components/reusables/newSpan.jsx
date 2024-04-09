import { useContext, useEffect, useRef, useState } from "react";
import { CelestArticleContext } from "../../global/useContext";

export const CreateArticle = ({ i }) => {
  const { newArticle, setNewArticle } = useContext(CelestArticleContext);
  const [paraTitle, setParaTitle] = useState(
    newArticle.paragraphs[i].paraTitle || ""
  );
  const [paraContext, setParaContext] = useState(
    newArticle.paragraphs[i].paraContext || ""
  );

  // Img Upload
  const [fileInput, setFileInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState([]);
  const [imgKind, setImgKind] = useState("left");

  const handleChange = (e) => {
    setParaTitle(e.target.value);
  };

  const textFunktions = (e) => {
    (e) => setCount(e.target.value.length), (e) => handleChange(e);
    setParaContext(e.target.value);
  };

  useEffect(() => {
    newArticle.paragraphs[i].paraTitle = paraTitle;
  }, [paraTitle]);

  useEffect(() => {
    newArticle.paragraphs[i].paraContext = paraContext;
  }, [paraContext]);

  useEffect(() => {
    newArticle.paragraphs[i].paraImg = previewSource;
  }, [previewSource]);

  useEffect(() => {
    newArticle.paragraphs[i].imgPos = imgKind;
  }, [imgKind]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const [count, setCount] = useState(0);
  return (
    <form className="createForm">
      <label htmlFor="">Abschnitt</label>
      <input
        name="titel"
        type="text"
        onChange={(e) => setParaTitle(e.target.value)}
        value={paraTitle}
      />
      <label className="content" htmlFor="">
        Content
      </label>
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        maxLength={3000}
        onChange={(e) => textFunktions(e)}
        value={paraContext}
      ></textarea>
      <p className="counter">{count}/3000</p>
      <input
        name="img"
        type="file"
        accept="image/*"
        onChange={(e) => handleFileInputChange(e)}
        value={fileInput}
      />
      <select
        name="position"
        id=""
        onChange={(e) => setImgKind(e.target.value)}
      >
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="center">Center</option>
        <option value="banner">Banner</option>
        <option value="icon">Icon</option>
      </select>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ width: "10rem" }} />
      )}
    </form>
  );
  /*
    abschnitt objekt struktur
    articles: [
        {
            name: "",
            text: "",
            abschnitte: [
                {
                    abschnittName: "",

                }
            ]
        }
    ]
*/
};
