import React from "react";
import { Link } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ article }) => {
  return (
    <section className="single-art-page article">
      {article.map((art, index) => {
        return (
          <div className="art-details-container article" key={index}>
              <img
                src={art.img.url}
                alt={art.title}
                className="image-url"
                height={"500px"}
              />
            <div className="art-info article">
              <div className="title-box">
                <h1 className="art-title">{art.title}</h1>
                <p>{art.byline}</p>
              </div>
              <div className="abstract-box">
                <h3>SECTION || {art.section.toUpperCase()}</h3>
                <hr />
                <p>{art.abstract}</p>
              </div>
              <div className="article-link">
                <p>
                  Want to read more? Click <a href={art.url}>here</a> to read
                  the full article.
                </p>
              </div>
            </div>
          </div>
        );
      })}
        <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
    </section>
  );
};

export default SingleArticle;
