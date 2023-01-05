import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  const { title, img, abstract, section, published } = article;
  return (
    <article className="article-card">
      <div className="article-title-box">
        <h1>{title}</h1>
      </div>
      <div className="art-details">
        <img
          src={img.url}
          alt="article card background"
          className="art-img"
          height="160rem"
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
