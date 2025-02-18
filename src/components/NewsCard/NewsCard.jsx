import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="news-card__container">
      <div className="news-card__image_container">
        <img
          className="news-card__image"
          src="https://via.placeholder.com/100"
          alt="News Image"
        />
      </div>
      <div className="news-card__content">
        <p className="news-card__date">Date</p>
        <h2 className="news-card__title">Title</h2>
        <p className="news-card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="news-card__source">Source</p>
      </div>
    </div>
  );
}

export default NewsCard;
