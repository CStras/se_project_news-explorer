import "./Nav.css";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/currentUserContext";
import logout from "../../assets/logout.svg";
import logoutWhite from "../../assets/logoutWhite.svg";
import { useContext } from "react";
import menu from "../../assets/menu.svg";
import menuDark from "../../assets/menu-dark.svg";

function Nav({
  handleLogin,
  isLoggedIn,
  handleLogout,
  activeModal,
  handleMenuClick,
}) {
  console.log(window.location.hash);
  const { username } = useContext(CurrentUserContext);
  return (
    <nav className="nav__content">
      <p className="nav__logo">NewsExplorer</p>
      <div className="nav__links">
        <div className="nav__link">
          <Link
            className={
              window.location.hash === "#/saved-news"
                ? "nav__home-btn_saved"
                : "nav__home-btn nav__btn_focused"
            }
            to="/"
          >
            Home
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <div className="nav__link">
              <Link
                className={
                  window.location.hash === "#/saved-news"
                    ? "nav__home-btn_saved nav__saved-btn_focused"
                    : "nav__home-btn"
                }
                to="/saved-news"
              >
                Saved articles
              </Link>
            </div>
            <button
              onClick={isLoggedIn ? handleLogout : handleLogin}
              className={
                window.location.hash === "#/saved-news"
                  ? "nav__profile-btn_saved"
                  : "nav__profile-btn"
              }
            >
              <span className="nav__profile-btn_text">
                {username || "User"}
              </span>
              <img
                className="nav__profile-img"
                src={
                  window.location.hash === "#/saved-news" ? logout : logoutWhite
                }
                alt="Login/Logout icon"
              />
            </button>
            <img
              className={activeModal ? "nav__menu-img_hidden" : "nav__menu-img"}
              src={window.location.hash === "#/saved-news" ? menuDark : menu}
              onClick={handleMenuClick}
              alt="Menu icon"
            />
          </>
        ) : (
          <div className="nav__link">
            <button onClick={handleLogin} className="nav__signup-btn">
              Sign in
            </button>
            <img
              className={activeModal ? "nav__menu-img_hidden" : "nav__menu-img"}
              src={menu}
              alt="Menu icon"
              onClick={handleMenuClick}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
