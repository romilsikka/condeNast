import React, { useState } from "react";
export default function Search(props) {
  const [state, setState] = useState({
      data:{},
      keyWord:""
  });
  const handleSearch = (e) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${e.target.value}&apiKey=${process.env.REACT_APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        setState({
          ...state,
          data,
        })
      );
  };
  return (
    <div className="searchBar">
      <input type="text" onChange={handleSearch} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
