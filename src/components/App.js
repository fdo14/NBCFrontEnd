import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";
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

  //This helper function will loop through our news data gathered by our fetchNews action
  //It will read each piece of data and then depending on its type, render the appropriate Card component
  renderNews = () => {
    let arr = []; //We will push all of our JSX into this empty array and return it at the bottom
    if (this.props.news) {
      //If our fetchNews action hasn't resolved yet, we do not want to run this code
      for (let news of this.props.news.news) {
        if (news.type === "article") {
          arr.push(<ArticleCard data={news} key={news.id} />); //If the news is of type Article, let's render the ArticleCard Component
        }

        if (news.type === "video") {
          arr.push(<VideoCard data={news} key={news.id} />); //If the news is of type Video, let's render the VideoCard Component
        }

        if (news.type === "slideshow") {
          arr.push(<PhotoCard data={news} key={news.id} />); //If the news is of type Slideshow, let's render the PhotoCard Component
        }
      }
    }
    return arr; //Return the array filled with JSX, so we can render it to the screen
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          //Grab our refreshing state from above so we don't attempt to refresh while already refreshing
          //Call our refresh function when necessary
          //Because we will be displaying so many items, we need to scroll.
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {this.renderNews()}
        {/* This is the helper function from above to render our different cards! */}
      </ScrollView>
    );
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
