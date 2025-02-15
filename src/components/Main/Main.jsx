import "./Main.css";
import Header from "../Header/Header.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import About from "../About/About.jsx";

function Main({ handleLogin }) {
  return (
    <div className="main_content">
      <Header handleLogin={handleLogin} />
      <NewsCard />
      <About />
    </div>
  );
}

export default Main;
