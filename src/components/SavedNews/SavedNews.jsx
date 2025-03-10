import "./SavedNews.css";
import Nav from "../Navigation/Nav.jsx";
import SavedNewsText from "../SavedNewsText/SavedNewsText.jsx";

import SavedArticlesList from "../SavedArticlesList/SavedArticlesList.jsx";

function SavedNews({
  isLoggedIn,
  savedArticles,
  handleLogout,
  handleLogin,
  handleMenuClick,
  activeModal,
  handleSaveArticle,
  setSavedArticles,
}) {
  return (
    <>
      <nav className="saved__nav">
        <Nav
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          activeModal={activeModal}
          handleMenuClick={handleMenuClick}
        />
      </nav>
      <SavedNewsText savedArticles={savedArticles} />
      <SavedArticlesList
        newsData={savedArticles}
        handleSaveArticle={handleSaveArticle}
        savedArticles={savedArticles}
        setSavedArticles={setSavedArticles}
      />
    </>
  );
}

export default SavedNews;
