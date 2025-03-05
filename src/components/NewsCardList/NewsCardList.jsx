import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NF from "../../assets/not-found_v1.svg";
import { useState } from "react";

function NewsCardList({
  newsData,
  isSuccessNewsData,
  isError,
  isLoadingNewsData,
  setActiveModal,
  isLoggedIn,
  handleSaveArticle,
  savedArticles,
  currentKeyword,
  setSavedArticles,
}) {
  const [activeNewsDataLength, setActiveNewsDataLength] = useState(3);
  const activeNewsDataItems = newsData?.slice(0, activeNewsDataLength);
  const isInitialState =
    newsData?.length === 0 &&
    !isSuccessNewsData &&
    !isError &&
    !isLoadingNewsData;
  const emptyNewsDataArray = newsData?.length === 0 && isSuccessNewsData;
  const handleOnClick = () => {
    setActiveNewsDataLength((num) => num + 3);
  };

  return (
    <section
      className={
        isInitialState
          ? "news-cards-list news-cards-list_hidden"
          : "news-cards-list"
      }
    >
      <h2
        className={
          location.pathname === "/"
            ? "news-cards-list__title"
            : "news-cards-list__title_hidden"
        }
      >
        Search Results
      </h2>
      <div
        className={
          emptyNewsDataArray
            ? "news-cards-list__not-found"
            : "news-cards-list__not-found news-cards-list__not-found_hidden"
        }
      >
        <img
          className="news-cards-list_not-found-img"
          src={NF}
          alt="Not found, sad face."
        />
        <h2 className="news-cards-list__not-found-title">Nothing found</h2>
        <p className="news-cards-list__not-found-text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>

      <div className={isLoadingNewsData ? "preloader" : "preloader_hidden"}>
        <Preloader />
        <h3 className="preloader__text">Searching for news...</h3>
      </div>

      <div className="news-cards-list__grid">
        <ul className="news-cards-list__cards">
          {activeNewsDataItems?.map((item) => (
            <NewsCard
              key={item.url}
              newsItem={item}
              setActiveModal={setActiveModal}
              isLoggedIn={isLoggedIn}
              handleSaveArticle={handleSaveArticle}
              savedArticles={savedArticles}
              currentKeyword={currentKeyword}
              setSavedArticles={setSavedArticles}
            />
          ))}
        </ul>
      </div>
      <button
        onClick={handleOnClick}
        className={
          emptyNewsDataArray
            ? "news-cards-list__more-button news-cards-list__more-button_hidden"
            : "news-cards-list__more-button"
        }
      >
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
