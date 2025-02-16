import "./SavedNews.css";
import Nav from "../Navigation/Nav.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext.js";

function SavedNews({ isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <div className="saved__nav">
        <Nav isLoggedIn={isLoggedIn} />
      </div>
      <div className="saved-news__content">
        <p className="saved-news__subtitle">Saved articles</p>
        <h1 className="saved-news__title">Colin, you have 5 saved articles</h1>
        <p>By keywords: asdfas,asdfasd,asdfasdf,asdfasd</p>
      </div>
    </>
  );
}

export default SavedNews;
