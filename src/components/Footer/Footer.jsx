import "./Footer.css";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <div className="footer__nav-links">
          <Link className="footer__link" to="/">
            Home
          </Link>
          <a
            className="footer__link"
            target="_blank"
            href="https://tripleten.com/"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icon-links">
          <a
            className="footer__link"
            target="_blank"
            href="https://github.com/CStras"
          >
            <img src={github} className="footer__icon" alt="Github icon" />
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://www.linkedin.com/in/colin-strasser-5870822a9/"
          >
            <img src={linkedin} className="footer__icon" alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
