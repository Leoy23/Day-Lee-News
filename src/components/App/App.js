import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchData } from "../../utilities/apiCalls";
import "./App.css";
import siteLogo from "../../assets/DLN.png";
// import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Search from "../Search/Search";
import SingleArticle from "../SingleArticle/SingleArticle";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = () => {
    setLoading(true);
    fetchData("health").then((data) => {
      setNewsData(data);
      setLoading(false);
    });
  };

  const findArticle = (publishedDate) => {
    return newsData.filter((news) => {
      return news.published === publishedDate;
    })
  };

  return (
    <main className="App">
      {loading && <div>Loading...</div>}
      <Switch>
        <Route
          exact
          path="/article/:published"
          render={({ match }) => {
            console.log(match)
            const selectedArt = findArticle(match.params.published)
            return (
              <SingleArticle article={selectedArt} />
            );
          }}
        />
        <Route exact path="/">
          <section className="home-page">
            <div className="logo-box">
              <img
                src={siteLogo}
                alt="site wallpaper"
                className="site-logo"
                width="35%"
              />
              <h2 style={{ color: "#b89d40" }}>
                <i>Your new favorite news source</i>
              </h2>
            </div>
            <Navbar />
            <ArticleContainer newsData={newsData} />
          </section>
        </Route>
        {/* <Route path="/search">
          <Search />
        </Route> */}
      </Switch>
    </main>
  );
};

export default App;
