import "./SavedNews.css";
import Nav from "../Navigation/Nav.jsx";
import SavedNewsText from "../SavedNewsText/SavedNewsText.jsx";
import stubbedSavedNewsList from "../../utils/SavedArticlesList";
import { useContext } from "react";

import SavedArticlesList from "../SavedArticlesList/SavedArticlesList.jsx";

function SavedNews({ isLoggedIn }) {
  return (
    <>
      <div className="saved__nav">
        <Nav isLoggedIn={isLoggedIn} />
      </div>
      <SavedNewsText />
      <SavedArticlesList newsData={stubbedSavedNewsList} />
    </>
  );
}

export default SavedNews;
