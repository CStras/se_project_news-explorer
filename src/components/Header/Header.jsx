import "./Header.css";
import Nav from "../Navigation/Nav.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Nav />
      </div>
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="search">
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
