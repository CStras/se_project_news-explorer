import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";

function SavedNewsText({ savedArticles }) {
  const currentUser = useContext(CurrentUserContext);
  const savedArticlesCount = savedArticles?.length;

  const keywords = [
    ...new Set(savedArticles?.map((article) => article.keyword)),
  ];
  const keywordsText =
    keywords.length > 2
      ? `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others`
      : keywords.join(", ");

  return (
    <div className="saved-news__content">
      <p className="saved-news__title">Saved articles</p>
      <h1 className="saved-news__subtitle">
        {currentUser?.username}, you have {savedArticlesCount} saved articles
      </h1>
      <p className="saved-news__text">
        By keywords: <b>{keywordsText}</b>
      </p>
    </div>
  );
}

export default SavedNewsText;
