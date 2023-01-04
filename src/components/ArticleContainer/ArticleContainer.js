import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleContainer = ({ newsData }) => {
    const artCard = newsData.map((article, index) => {
    return (
      <ArticleCard
        abstract={article.abstract}
        byline={article.byline}
        img={article.img.url}
        key={index}
        published={article.published}
        section={article.section}
        title={article.title}
        url={article.url}
      />
    );
  });

  return <section className="article-container">{artCard}</section>;
};

export default ArticleContainer;
