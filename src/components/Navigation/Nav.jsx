import "./Nav.css";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/currentUserContext";
import logout from "../../assets/logout.svg";
import logoutWhite from "../../assets/logoutWhite.svg";
import { useContext } from "react";
import menu from "../../assets/menu.svg";

function Nav({ handleLogin, isLoggedIn, handleLogout }) {
  console.log(isLoggedIn);
  const { username } = useContext(CurrentUserContext);
  return (
    <nav className="nav__content">
      <p className="nav__logo">NewsExplorer</p>
      <div className="nav__links">
        <div>
          <Link
            className={
              location.pathname === "/"
                ? "nav__home-btn nav__btn_focused"
                : "nav__home-btn_saved"
            }
            to="/"
          >
            Home
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <div>
              <Link
                className={
                  location.pathname === "/saved-news"
                    ? "nav__home-btn nav__saved-btn_focused"
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
                location.pathname === "/saved-news"
                  ? "nav_profile-btn_saved"
                  : "nav__profile-btn"
              }
            >
              <span className="nav__profile-btn_text">
                {username || "User"}
              </span>
              <img src={location.pathname === "/" ? logoutWhite : logout} />
            </button>
            <img className="nav__menu-img" src={menu} />
          </>
        ) : (
          <div>
            <button onClick={handleLogin} className="nav__signup-btn">
              Sign in
            </button>
            <img className="nav__menu-img" src={menu} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
