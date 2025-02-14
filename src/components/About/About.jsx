import "./About.css";
import about from "../../assets/aboutPic.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img className="about__image" src={about} />
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          akljsdhflaksjdhflaksjdhflkasjdhflaksjdhflaksjdhflkasjhdfklasjdhflkajhsdf
        </p>
      </div>
    </div>
  );
}

export default About;
