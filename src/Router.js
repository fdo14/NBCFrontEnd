import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "./components/App";
import Article from "./components/Article";
import Pictures from "./components/Pictures";

//Create a router component to control user navigation
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="home"
          component={App}
          initial
          title="NBC's News For You"
          titleStyle={styles.navigationBarTitleStyle}
        />
        {/* Create our initial route to the home page */}
        <Scene key="article" component={Article} />
        {/* This will be the scene we route to when a user clicks on an article headline */}
        <Scene key="pictures" component={Pictures} />
        {/* This will be the scene we route to when a user clicks on a slideshow headline */}
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBarTitleStyle: {
    // Centering for Android
    flex: 1,
    textAlign: "center"
  }
};

export default RouterComponent;
