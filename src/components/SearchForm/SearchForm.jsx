import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
