import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleContainer = ({ newsData, searchQuery }) => {
  const artCard = newsData.map((article, index) => {
    return (
      <ArticleCard
        article={article}
        key={index}
      />
    );
  });

  return <section className="article-container">{artCard}</section>;
};

export default ArticleContainer;
