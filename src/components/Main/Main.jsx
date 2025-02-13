import "./Main.css";
import Header from "../Header/Header.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Footer from "../Footer/Footer.jsx";
import About from "../About/About.jsx";

function Main() {
  return (
    <div className="main_content">
      <Header />
      <NewsCard />
      <About />
      <Footer />
    </div>
  );
}

export default Main;
