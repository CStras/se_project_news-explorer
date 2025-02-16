import "./Main.css";
import Header from "../Header/Header.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import About from "../About/About.jsx";

function Main({ handleLogin, isLoggedIn }) {
  return (
    <div className="main_content">
      <Header handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <NewsCard />
      <About />
    </div>
  );
}

export default Main;
