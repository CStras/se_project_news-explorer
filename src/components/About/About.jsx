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
          Hi, I'm Colin Strasser, a Full-Stack Software Engineer. I have 1+
          years of experience in software development and a passion for creating
          clean, efficient, and user-friendly applications. I (will) have a
          certificate in Full-Stack Software Engineering from TripleTen. I am
          proficient in JavaScript, React, Node.js, Express, MongoDB, and more.
          I am excited to continue learning and growing as a developer.
        </p>
        <p className="about__text">
          Before starting my certification program, I had ~6 months of
          experience in general programming which included Python, HTML, CSS,
          PHP, MySQL, and SEO.
        </p>
        <p className="about__text">
          One of the biggest things I advocate for in any situation is
          communcaition. I believe that communication is key to any successful
          project. Because of this belief I have developed strong communication
          skills and have experience working in a team environment which is
          important for getting projects finished efficiently and effectively. I
          am excited to start my carreer as a software engineer and become a
          valuable asset to any team I am a part of.
        </p>
      </div>
    </div>
  );
}

export default About;
