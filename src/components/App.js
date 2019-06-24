import React, { Component } from "react";
import { ScrollView, RefreshControl, FlatList, Text } from "react-native";
import { connect } from "react-redux";

import { fetchNews } from "../../actions";
import ArticleCard from "./ArticleCard";
import VideoCard from "./VideoCard";
import PhotoCard from "./PhotoCard";

class App extends Component {
  //Basic construcotr function to set a state for if we are refreshing or not
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  //This is the recommended function by Facebook for how to do pull-down refreshed with React Native
  _onRefresh = () => {
    this.setState({ refreshing: true }); //Set our refreshing state to true
    this.props.fetchNews().then(() => {
      //Re-run the fetchNews action
      this.setState({ refreshing: false }); //Set our refreshing state to false once the promise is resolved
    });
  };

  componentDidMount() {
    this.props.fetchNews(); //When the component mounts, we should run our fetchNews action exactly one time
  }

  //This helper function is called by the FlatList to conditionally render a card based on the type of news
  renderNews = newsItem => {
    let { item } = newsItem;
    if (item.type === "article") {
      return <ArticleCard data={item} key={item.id} />; //If the item is of type Article, let's render the ArticleCard Component
    }

    if (item.type === "video") {
      return <VideoCard data={item} key={item.id} />; //If the item is of type Video, let's render the VideoCard Component
    }

    if (item.type === "slideshow") {
      return <PhotoCard data={item} key={item.id} />; //If the news is of type Slideshow, let's render the PhotoCard Component
    }
  };

  render() {
    //We only want to run the FlatList if we our news data
    //The FlatList will receive the news data and then render the Items according to renderNews
    if (this.props.news) {
      return (
        <FlatList
          data={this.props.news.news}
          renderItem={this.renderNews}
          keyExtractor={news => news.id}
        />
      );
    } else return <Text />;
  }
}

//Our action has fired and our reducer has updated the state, but we need to map this state to props so we can use it in our code
const mapStateToProps = state => {
  return {
    news: state.news.news.getNews
  };
};

//We need to connect Redux to this component and tell it what actions to look for
export default connect(
  mapStateToProps,
  { fetchNews }
)(App);
