import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "./components/App";
import Article from "./components/Article";

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
        <Scene key="article" component={Article} />
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBarTitleStyle: {
    // centering for Android
    flex: 1,
    textAlign: "center"
  }
};

export default RouterComponent;
