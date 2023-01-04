import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import nyt from "../../assets/nytimes.jpg";

const ArticleContainer = ({ newsData, copyright }) => {
  let defaultImage;

  // const artCards = newsData.map((data, index) => {
  //   console.log(data.multimedia[0])
  // })
  //   const artCard = newsData.map((data, index) => {
       
  //   return (
  //     <ArticleCard
  //       abstract={data.abstract}
  //       key={index}
  //       byline={data.byline}
  //       copyright={copyright}
  //       imgCaption={data.multimedia[0].caption}
  //       imgCopyRight={data.multimedia[0].copyright}
  //       published={data.published_date}
  //       location={data.geo_facets}
  //       section={data.section}
  //       title={data.title}
  //       url={data.url}
  //     />
  //   );
  // });

  return <section className="article-container">{}</section>;
};

export default ArticleContainer;
