import React from "react";
import './SearchBar.css';
export default function Search(props) {

  return (
    <div className="searchBarWrapper">
      <input className="searchBar" type="text" onChange={(e)=>props.saveKeywords(e)} />
    </div>
  );
}
