import React from "react";
import { View, AppRegistry } from "react-native";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Router from "./src/Router";
import reducers from "./reducers";

//Create the Redux store
const store = createStore(reducers, applyMiddleware(reduxThunk));

//Create the GraphQL Client and link it to our backend
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://cryptic-falls-75424.herokuapp.com/" }),
  cache: new InMemoryCache()
});

//Create the root view with the overarching style
//Add the Apollo Provider and Redux Provider
//Insert the router component to control navigation
const Root = () => {
  return (
    <View style={styles.bodyStyle}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ApolloProvider>
    </View>
  );
};

//Add styles for the body
const styles = {
  bodyStyle: {
    backgroundColor: "#cdcdcd",
    height: "100%",
    flex: 1
  }
};

//Render the root component to the screen
AppRegistry.registerComponent("NBCFrontEnd", () => Root);
