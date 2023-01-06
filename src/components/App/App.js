import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchData } from "../../utilities/apiCalls";
import "./App.css";
import siteLogo from "../../assets/DLN.png";
import Navbar from "../Navbar/Navbar";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Search from "../Search/Search";
import SingleArticle from "../SingleArticle/SingleArticle";
import BadUrl from "../BadUrl/BadUrl";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(!open);
  };
  
  const getNewsData = () => {
    setLoading(true);
    fetchData("health").then((data) => {
      setNewsData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getNewsData();
  }, []);
  
  const findArticle = (publishedDate) => {
    return newsData.filter((news) => {
      return news.published === publishedDate;
    });
  };

  const articleSearch = () => {
    const searchTitles = newsData.filter((art) => {
      return art.title.toLowerCase().includes(query.toLowerCase());
    });
      setSearchQuery(searchTitles);
  };


  return loading ? (
    <div>Loading...</div>
  ) : (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/article/:published"
          render={({ match }) => {
            const selectedArt = findArticle(match.params.published);
            return <SingleArticle article={selectedArt} />;
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
              <h2 style={{ color: "#b89d40" }} className="site-info">
                <i>An exciting way to view top news stories around the globe</i>
              </h2>
            </div>
            <Navbar handleOpen={handleOpen} />
            {open ? (
              <Search
                articleSearch={articleSearch}
                query={query}
                setQuery={setQuery}
                searchQuery={searchQuery}
              />
            ) : null}
            <ArticleContainer newsData={newsData} searchQuery={searchQuery} />
          </section>
        </Route>
        <Route component={BadUrl} />
      </Switch>
    </main>
  );
};

export default App;
