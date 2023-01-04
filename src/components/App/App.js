import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchData } from "../../utilities/apiCalls";
import "./App.css";
import siteLogo from "../../assets/DLN.png";
// import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
 
  
  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = () => {
    setLoading(true);
    fetchData("world")
    .then((data) => {
      setNewsData(data);
      setLoading(false);
    });
  };


console.log(newsData)
  
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <section className="home-page">
            <div className="logo-box">
              <img
                src={siteLogo}
                alt="site wallpaper"
                className="site-logo"
                width="35%"
              />
              <h2 style={{color: "#b89d40"}}><i>Your new favorite news source</i></h2>
            </div>
            <Navbar />
            <ArticleContainer newsData={newsData} />
          </section>
        </Route>
      </Switch>
    </main>
  );
};

export default App;
