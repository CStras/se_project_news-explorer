import { set } from "mongoose";
import "./SearchForm.css";

function SearchForm({ handleSearch, setCurrentKey }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(evt);
  };

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
    setCurrentKey(evt.target.value);
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
