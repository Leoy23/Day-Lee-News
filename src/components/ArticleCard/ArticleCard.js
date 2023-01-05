import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ abstract, img, section, published, title }) => {
  return (
    <article className="article-card">
      <div className="article-title-box">
        <h1>{title}</h1>
      </div>
      <div className="art-details">
        <img
          src={img}
          alt="article card background"
          className="art-img"
          height="185rem"
        />
        <div className="art-abstract">
          <p>
            <b>{section.toUpperCase()}</b> || {abstract}
          </p>
        </div>
      </div>
      <Link to={`/article/${published}`}>
        <button>View Article</button>
      </Link>
    </article>
  );
};

export default ArticleCard;
