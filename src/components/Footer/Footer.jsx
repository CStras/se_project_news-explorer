import "./Footer.css";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <Link to="/">Home</Link>
        <a href="https://tripleten.com/">TripleTen</a>
        <a href="https://github.com/CStras">
          <img src={github} className="footer__icon" />
        </a>
        <a href="https://www.linkedin.com/in/colin-strasser-5870822a9/">
          <img src={linkedin} className="footer__icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
