import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleArticle.css";

const SingleArticle = ({article}) => {
  return (
    <section className='single-art-page'>
        <Link to="/">
        <button>Home</button>
        </Link>
      {article.map((art) => {
        return <div className='art-details-container'>
            <div className='img-box'>
                <img src={art.img.url} alt={art.title} className="image-url" height={"500px"} />
            </div>
            <div className='art-info'>
            <div className='title-box'>
              <h1>{art.title}</h1>
              <p style={{textDecoration: "underline"}}>{art.byline}</p>
            </div>
            <div className='abstract-box'>
              <h2>"{art.section.toUpperCase()}"</h2>
              <hr />
              <p>{art.abstract}</p>
            </div>
            <div className='article-link'>
              <p>Want to read more? Click <a href={art.url}>here</a> to read the full article.</p>
            </div>
            </div>
        </div>
      })}
    </section>
  )
}

export default SingleArticle;
