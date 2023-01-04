import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({
  abstract,
  byline,
  copyright,
  img,
  imgCaption,
  imgCopyRight,
  published,
  location,
  section,
  title,
  url,
}) => {
  return (
    <article className="article-card">
      <div className="article-title-box">
        <h1>{title}</h1>
      </div>
    </article>
  );
};

export default ArticleCard;
