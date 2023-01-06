import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleContainer = ({ newsData, searchQuery }) => {
  let articleCards;
  

  const displayAllArts = (artData) => {
    return artData.map((article, index) => {
      return (
        <ArticleCard
        article={article}
        key={index}
        />
      )
    })
  }
  if (!searchQuery.length) {
    articleCards = displayAllArts(newsData)
  } else {
    articleCards = displayAllArts(searchQuery)
    console.log(searchQuery)
  }

  return <section className="article-container">
    {articleCards}
    </section>;
};

export default ArticleContainer;
