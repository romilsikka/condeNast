import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import PropTypes from "prop-types";
import "./NewsContent.css";

export default function NewsContent({ newsData, title }) {
  const newsIteration = () => {
    return (
      <>
        {newsData &&
          newsData.map((news,index) => {
            return (
              <div className="newsIteration" key={index}>
                <NewsCard
                  title={news.title}
                  description={news.description}
                  image={news.urlToImage}
                  url={news.url}
                />
              </div>
            );
          })}
      </>
    );
  };
  return (
    <div className="NewsContent">
      <h2>{title ? "News Content" : "Top Trending News"}</h2>
      {!newsData && <div className="loader"></div>}
      {newsIteration()}
    </div>
  );
}
NewsCard.propTypes = {
  title: PropTypes.string,
  newsData: PropTypes.array,
};
NewsCard.defaultProps = {
  title: "",
  newsData: [],
};
