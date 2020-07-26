import React from "react";
import "./NewsCard.css";
export default function NewsCard(props) {
  return (
    <div className="NewsCard" onClick={() => window.open(props.url, "_blank")}>
      <img className="image" src={props.image} alt="news" />
      <div className="newsContentCard">
        <h2 className="titlecard">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
