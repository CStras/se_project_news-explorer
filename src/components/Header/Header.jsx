import "./Header.css";
import Nav from "../Navigation/Nav.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Header({
  handleLogin,
  handleLogout,
  isLoggedIn,
  handleSearch,
  setCurrentKeyword,
  activeModal,
  setActiveModal,
  handleMenuClick,
}) {
  return (
    <header className="header">
      <div className="header__nav">
        <Nav
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          handleMenuClick={handleMenuClick}
        />
      </div>
      <div className="header__content">
        <h1 className="header__title">What&#39;s going on in the world?</h1>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="search-form">
        <SearchForm
          handleSearch={handleSearch}
          setCurrentKeyword={setCurrentKeyword}
        />
      </div>
    </header>
  );
}

export default Header;
