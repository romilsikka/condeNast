import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NewsContent from "../../Components/NewsContent/NewContent";
import Footer from "../../Components/Footer/Footer";
import { fetchTopHeadlines } from "../../utils";
import "./NewsPage.css";
class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWords: "",
      data: {},
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.keyWords === "" &&
      prevState.keyWords.length !== this.state.keyWords.length
    ) {
      fetchTopHeadlines().then((res) => {
        this.setState({
          data: res,
        });
      });
    }
  }

  componentDidMount() {
    fetchTopHeadlines().then((res) => {
      this.setState({
        data: res,
      });
    });
  }

  getData = (value) => {
    if (value) {
      fetch(
        `https://newsapi.org/v2/everything?q=${value}&apiKey=${process.env.REACT_APP_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data,
          });
        });
    }
  };

  debounce = (fn, delay) => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };

  handleChange = this.debounce(this.getData, 300);

  handleKeywords = (e) => {
    this.handleChange(e.target.value);
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
        <NewsContent
          newsData={this.state.data && this.state.data.articles}
          title={this.state.keyWords}
        />
        <Footer />
      </div>
    );
  }
}
export default NewsPage;
