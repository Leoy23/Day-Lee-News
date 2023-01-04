import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({
  abstract,
  img,
  section,
  title,
}) => {
  return (
    <article className="article-card">
      <div className="article-title-box">
        <h1>{title}</h1>
      </div>
      <div className="art-details">
        <img src={img} alt="article card background" className="art-img" height="185rem"/>
      <div className="art-abstract">
        <p><b><i>{section.toUpperCase()}</i></b> || {abstract}</p>
      </div>
      </div>
    </article>
  );
};

export default ArticleCard;
