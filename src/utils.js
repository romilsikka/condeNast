
export const fetchTopHeadlines = ()=>{
  return fetch(
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_KEY}`
)
  .then((response) => response.json())
  .then((data) => data);
}