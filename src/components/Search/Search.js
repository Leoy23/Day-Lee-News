import React from "react";
import "./Search.css";

const Search = ({ query, setQuery, articleSearch }) => {

  const handleClick = (e) => {
    e.preventDefault();
    articleSearch(query);
  }

  return (
    <section className="search-page">
      <div className="search-box-title">
        <h1 className="search-title">SEARCH FOR ARTICLES BY TITLE</h1>
      </div>
      <div className="form-box">
        <form>
          <input
            type="text"
            className="search-field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={(e) => handleClick(e)}>search</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
