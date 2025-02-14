import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav__content">
      <p className="nav__logo">NewsExplorer</p>
      <div className="nav__links">
        <div>
          <Link className="nav__home-btn" to="/">
            Home
          </Link>
        </div>
        <button className="nav__signup-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Nav;
