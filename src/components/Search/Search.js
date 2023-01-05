import React from "react";
import "./Search.css";

const Search = ({ articleSearch, onChangeFxn }) => {
  return (
    <section className="search-page">
      <div className="search-box-title">
        <h1>SEARCH FOR ARTICLES BY TITLE</h1>
      </div>
      <div className="form-box">
        <form>
          <input
            type="search"
            className="search-field"
            placeholder="search"
            onChange={onChangeFxn}
          />
          <button className="search-btn" onClick={(e) => articleSearch(e)}>
            search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
