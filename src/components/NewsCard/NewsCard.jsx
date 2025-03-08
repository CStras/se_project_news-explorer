import "./NewsCard.css";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

function NewsCard({
  newsItem,
  isLoggedIn,
  handleSaveArticle,
  setActiveModal,
  currentKeyword,
}) {
  const [isSaved, setIsSaved] = useState(newsItem.saved || false);
  //const isLoggedIn = useContext(CurrentUserContext).isLoggedIn;

  const location = useLocation();

  const source = newsItem
    ? newsItem.source?.name.toUpperCase().split(".")[0]
    : "UNKNOWN";

  const dateInWords = new Date(newsItem.publishedAt).toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const setLoginModal = () => {
    setActiveModal("login");
  };

  const handleSaveClick = () => {
    setIsSaved((state) => !state);
    newsItem.keyword = currentKeyword;
    handleSaveArticle({
      item: newsItem,
      saved: false,
    });
  };

  const handleDeleteClick = () => {
    handleSaveArticle({
      item: newsItem,
      saved: true,
    });
  };

  /*const isSaved = stubbedSavedNewsList.some((article) => {
    return article.link === newsItem.url;
  }); */

  return (
    <article className="news-card__container">
      <div className="news-card__image_container">
        {window.location.hash === "#/saved-news" && (
          <span className="news-card__keyword-icon">{newsItem.keyword}</span>
        )}
        <div className="news-card__button-container">
          {!isLoggedIn && window.location.hash === "#/" && (
            <div className="news-card__sign-in-note">
              Sign in to save articles
            </div>
          )}
          {window.location.hash === "#/saved-news" && (
            <div className="news-card__sign-in-note">Remove from saved</div>
          )}
          {window.location.hash === "#/" && (
            <button
              className={isSaved ? "news-card__save_active" : "news-card__save"}
              onClick={!isLoggedIn ? setLoginModal : handleSaveClick}
            ></button>
          )}
          {window.location.hash === "#/saved-news" && (
            <button
              className="news-card__delete"
              onClick={handleDeleteClick}
            ></button>
          )}
        </div>
        <img
          className="news-card__image"
          src={newsItem.urlToImage}
          alt="News Image"
        />
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{dateInWords}</p>
        <Link to={newsItem.url} target="_blank" className="news-card__link">
          <h2 className="news-card__title">{newsItem.title}</h2>
        </Link>
        <p className="news-card__text">
          {window.location.hash === "#/"
            ? newsItem.description
            : newsItem.description}
        </p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
