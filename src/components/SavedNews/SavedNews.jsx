import "./SavedNews.css";
import Nav from "../Navigation/Nav.jsx";
import SavedNewsText from "../SavedNewsText/SavedNewsText.jsx";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext.js";

function SavedNews({ isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <div className="saved__nav">
        <Nav isLoggedIn={isLoggedIn} />
      </div>
      <SavedNewsText />
      <SavedArticlesList />
    </>
  );
}

export default SavedNews;
