import "./SavedArticlesList.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedArticlesList({
  newsData,
  handleSaveArticle,
  savedArticles,
  setSavedArticles,
}) {
  return (
    <NewsCardList
      newsData={newsData}
      savedArticles={savedArticles}
      handleSaveArticle={handleSaveArticle}
      setSavedArticles={setSavedArticles}
    />
  );
}

export default SavedArticlesList;
