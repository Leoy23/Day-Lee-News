import React from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import nyt from "../../assets/nytimes.jpg";

const ArticleContainer = ({ newsData, copyright }) => {
    let image = (
        <img src={nyt} alt="ny times logo" className="nyt-default-img" />
    )

    const artCard = newsData.map((data, index) => {
        const newImage = data.multimedia ? data.multimedia[0].url : image
    return (
      <ArticleCard
        abstract={data.abstract}
        key={index}
        byline={data.byline}
        copyright={copyright}
        img={newImage}
        imgCaption={data.multimedia[0].caption}
        imgCopyRight={data.multimedia[0].copyright}
        published={data.published_date}
        location={data.geo_facets}
        section={data.section}
        title={data.title}
        url={data.url}
      />
    );
  });

  return <section className="article-container">{artCard}</section>;
};

export default ArticleContainer;
