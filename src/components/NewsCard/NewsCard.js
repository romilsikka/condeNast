import React from "react";
import PropTypes from 'prop-types';
import "./NewsCard.css";
export default function NewsCard({ url, image, title, description }) {
  return (
    <div className="NewsCard" onClick={() => window.open(url, "_blank")}>
      <img className="image" src={image} alt="news" />
      <div className="newsContentCard">
        <h2 className="titlecard">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
NewsCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
NewsCard.defaultProps = {
  title: "",
  url: "",
  description: "",
  image: "",
}