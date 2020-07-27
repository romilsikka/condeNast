import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewContent.css";
export default function NewsContent(props) {
  const newsIteration = () => {
    return (
      <>
        {props.newsData && props.newsData.map((news) => {
          return <NewsCard title={news.title} description={news.description} image={news.urlToImage} url={news.url} />;
        })}
      </>
    );
  };
  return (
    <div className="NewsContent">
      <h2>{props.title ? "news Content":"Top Trending News"}</h2>
      {!props.newsData && <div className="loader"></div> }
      {newsIteration()}
    </div>
  );
}
