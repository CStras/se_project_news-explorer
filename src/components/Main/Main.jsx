import "./Main.css";
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
}) {
  return (
    <div className="main_content">
      <Header
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        handleSearch={handleSearch}
        setCurrentKeyword={setCurrentKeyword}
      />
      <NewsCardList
        newsData={newsData}
        isSuccessNewsData={isSuccessNewsData}
        isError={isError}
        isLoadingNewsData={isLoadingNewsData}
        setActiveModal={setActiveModal}
        isLoggedIn={isLoggedIn}
      />
      <About />
    </div>
  );
}

export default Main;
