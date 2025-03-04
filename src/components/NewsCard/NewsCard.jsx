import "./NewsCard.css";
import { useLocation, Link } from "react-router-dom";
import { useState, useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";

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
    console.log("saved");
    setIsSaved((state) => !state);
    console.log(isSaved);
    console.log(currentKeyword);
    newsItem.keyword = currentKeyword;
    handleSaveArticle({
      item: newsItem,
      saved: false,
    });
  };

  const handleDeleteClick = () => {
    console.log("deleted");
    setIsSaved((state) => !state);
    console.log(isSaved);
    handleSaveArticle({ item: newsItem, saved: true });
  };

  /*const isSaved = stubbedSavedNewsList.some((article) => {
    return article.link === newsItem.url;
  }); */

  return (
    <div className="news-card__container">
      <div className="news-card__image_container">
        {location.pathname === "/saved-news" && (
          <div className="news-card__keyword-icon">{newsItem.keyword}</div>
        )}
        <div className="news-card__button-container">
          {!isLoggedIn && location.pathname === "/" && (
            <div className="news-card__sign-in-note">
              Sign in to save articles
            </div>
          )}
          {location.pathname === "/saved-news" && (
            <div className="news-card__sign-in-note">Removed from saved</div>
          )}
          {location.pathname === "/" && (
            <button
              className={isSaved ? "news-card__save_active" : "news-card__save"}
              onClick={!isLoggedIn ? setLoginModal : handleSaveClick}
            ></button>
          )}
          {location.pathname === "/saved-news" && (
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
          {location.pathname === "/" ? newsItem.description : newsItem.text}
        </p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
