import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function NewsCardList() {
  return (
    <>
      <Preloader />
      <p className="news-cards-list__preloader-text">Searching for news...</p>
      <NewsCard />
      <button className="news-cards-list__more-button">Show more</button>
    </>
  );
}

export default NewsCardList;
