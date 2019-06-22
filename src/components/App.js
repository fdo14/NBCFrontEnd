import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import { fetchNews } from "../../actions";
import ArticleCard from "./ArticleCard";
import VideoCard from "./VideoCard";
import PhotoCard from "./PhotoCard";

class App extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews = () => {
    let arr = [];
    if (this.props.news) {
      for (let news of this.props.news.news) {
        if (news.type === "article") {
          arr.push(<ArticleCard data={news} key={news.id} />);
        }

        if (news.type === "video") {
          arr.push(<VideoCard data={news} />);
        }

        if (news.type === "slideshow") {
          arr.push(<PhotoCard data={news} />);
        }
      }
    }
    return arr;
  };

  render() {
    return <ScrollView>{this.renderNews()}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news.getNews
  };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(App);
