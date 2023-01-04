import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleContainer = ({ newsData }) => {
    const artCard = newsData.map((article, index) => {
    return (
      <ArticleCard
        abstract={article.abstract}
        img={article.img.url}
        key={index}
        section={article.section}
        title={article.title}
      />
    );
  });

  return <section className="article-container">{artCard}</section>;
};

export default ArticleContainer;
