import "./SavedNews.css";
import Nav from "../Navigation/Nav.jsx";
import SavedNewsText from "../SavedNewsText/SavedNewsText.jsx";

import SavedArticlesList from "../SavedArticlesList/SavedArticlesList.jsx";

function SavedNews({ isLoggedIn, savedArticles }) {
  return (
    <>
      <div className="saved__nav">
        <Nav isLoggedIn={isLoggedIn} />
      </div>
      <SavedNewsText savedArticles={savedArticles} />
      <SavedArticlesList newsData={savedArticles} />
    </>
  );
}

export default SavedNews;
