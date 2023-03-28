import React, { Component} from "react";
import Loader from "./Loader";
import NewsComponent from "./NewsComponent";
import PropTypes from "prop-types";

export class News extends Component {

  constructor(props) {
    super(props);
    console.log("constructor here from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=this.props.category  
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&everything&apiKey=89f69c3ff2b940969d5190b87d75986b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, loading: false });
  }

  prePage = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&everything&apiKey=89f69c3ff2b940969d5190b87d75986b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  nextPage = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&everything&apiKey=89f69c3ff2b940969d5190b87d75986b&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container my-4">
        <h2 className="container text-center">NewsPanda   Headlines-{this.props.category}</h2>

        {this.state.loading && <Loader />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsComponent
                    title={element.title ? element.title.slice(0, 23) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.prePage}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
};

News.PropsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
