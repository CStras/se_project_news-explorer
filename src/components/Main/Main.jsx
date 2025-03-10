import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import About from "../About/About.jsx";

function Main({
  isLoggedIn,
  newsData,
  isSuccessNewsData,
  isError,
  isLoadingNewsData,
  setActiveModal,
  handleSaveArticle,
  savedArticles,
  currentKeyword,
}) {
  return (
    <main className="main__content">
      <NewsCardList
        newsData={newsData}
        isSuccessNewsData={isSuccessNewsData}
        isError={isError}
        isLoadingNewsData={isLoadingNewsData}
        setActiveModal={setActiveModal}
        isLoggedIn={isLoggedIn}
        handleSaveArticle={handleSaveArticle}
        savedArticles={savedArticles}
        currentKeyword={currentKeyword}
      />
      <About />
    </main>
  );
}

export default Main;
