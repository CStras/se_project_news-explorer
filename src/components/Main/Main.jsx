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
  activeModal,
  handleMenuClick,
}) {
  return (
    <div className="main__content">
      <Header
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        handleSearch={handleSearch}
        setCurrentKeyword={setCurrentKeyword}
        handleLogout={handleLogout}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        handleMenuClick={handleMenuClick}
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
