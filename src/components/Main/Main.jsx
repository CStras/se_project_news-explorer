import Header from "../Header/Header.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import About from "../About/About.jsx";

function Main({
  handleLogin,
  isLoggedIn,
  handleSearch,
  setCurrentKeyword,
  newsData,
  isSuccessNewsData,
  isError,
  isLoadingNewsData,
  setActiveModal,
  handleLogout,
  handleSaveArticle,
  savedArticles,
  currentKeyword,
}) {
  return (
    <div className="main_content">
      <Header
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        handleSearch={handleSearch}
        setCurrentKeyword={setCurrentKeyword}
        handleLogout={handleLogout}
      />
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
    </div>
  );
}

export default Main;
