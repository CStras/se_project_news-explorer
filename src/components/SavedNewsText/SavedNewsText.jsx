import "./SavedNewsText.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";
import stubbedSavedNewsList from "../../utils/SavedArticlesList";

function SavedNewsText() {
  const currentUser = useContext(CurrentUserContext);

  const savedArticles = stubbedSavedNewsList.length;

  const keywords = [
    ...new Set(stubbedSavedNewsList.map((article) => article.keyword)),
  ];
  const keywordsText =
    keywords.length > 2
      ? `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others`
      : keywords.join(", ");

  return (
    <div className="saved-news__content">
      <p className="saved-news__title">Saved articles</p>
      <h1 className="saved-news__subtitle">
        {currentUser?.username}, you have {savedArticles} saved articles
      </h1>
      <p>
        By keywords: <b>{keywordsText}</b>
      </p>
    </div>
  );
}

export default SavedNewsText;
