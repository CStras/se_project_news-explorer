import "./SavedArticlesList.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedArticlesList({ newsData }) {
  return <NewsCardList newsData={newsData} />;
}

export default SavedArticlesList;
