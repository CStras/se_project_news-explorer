import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav__content">
      <div className="nav__logo">
        <p>NewsExplorer</p>
      </div>
      <div className="nav__links">
        <Link className="nav__links_item" to="/">
          Home
        </Link>
        <Link className="nav__links_item" to="/saved-news">
          Sign in
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
