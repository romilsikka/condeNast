import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NewsContent from "../../Components/NewsContent/NewContent";
import Footer from "../../Components/Footer/Footer";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWords: "",
      data:{}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.keyWords.length);
    if (
      this.state.keyWords.length >= 3 &&
      prevState.keyWords.length !== this.state.keyWords.length
    ) {
      fetch(
        `https://newsapi.org/v2/everything?q=${this.state.keyWords}&apiKey=${process.env.REACT_APP_KEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            data,
          })
        );
    }
  }

  handleKeywords = (e) => {
    this.setState({
      keyWords: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="NewsPage">
        <Header title={this.state.keyWords} />
        <SearchBar saveKeywords={this.handleKeywords} />
        <NewsContent newsData={this.state.data.articles} />
        <Footer />
      </div>
    );
  }
}
export default NewsPage;
