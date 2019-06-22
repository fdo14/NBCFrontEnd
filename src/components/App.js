import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";

import { fetchNews } from "../../actions";
import ArticleCard from "./ArticleCard";
import VideoCard from "./VideoCard";
import PhotoCard from "./PhotoCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.fetchNews().then(() => {
      this.setState({ refreshing: false });
    });
  };

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
          arr.push(<VideoCard data={news} key={news.id} />);
        }

        if (news.type === "slideshow") {
          arr.push(<PhotoCard data={news} key={news.id} />);
        }
      }
    }
    return arr;
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {this.renderNews()}
      </ScrollView>
    );
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
