import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch, setCurrentKeyword }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
    setCurrentKeyword(evt.target.value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
          onChange={handleChange}
          required
          value={searchValue || ""}
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
