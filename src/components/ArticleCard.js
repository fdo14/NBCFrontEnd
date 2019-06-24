import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";
import { Actions } from "react-native-router-flux";

import colorStyle from "../utils/colorStyle";

import CardHeader from "./CardHeader";

const ArticleCard = props => {
  const { thumbnailStyle, contentStyle, headlineStyle, wrapperStyle } = styles; //Destructure the style from the style const below
  let { label, headline, tease, published } = props.data; //Destructure the necessary items from our news data
  return (
    <View style={[wrapperStyle, colorStyle()]}>
      <CardHeader label={label} published={published} />
      {/* Bring in our Card Header component and display our label and date published */}
      <View style={contentStyle}>
        <Image
          source={{
            uri: tease
          }}
          style={thumbnailStyle}
        />
        {/* Show a small teaser image */}
        <Text
          style={headlineStyle}
          onPress={() => Actions.article({ data: props.data })} //When the headline is clicked we should go to the specific article page
        >
          {headline} {/* Show the title of the article */}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  //Styling for the wrapper holding the header, thumbnail, and title
  wrapperStyle: {
    backgroundColor: "white",
    marginLeft: 2,
    marginRight: 2,
    paddingBottom: 10
  },

  //Styling for the flexbox holding the image and headline
  contentStyle: {
    flexDirection: "row",
    alignItems: "center"
  },

  //Styling for the image thumbnail on the left of the screen
  thumbnailStyle: {
    height: 75,
    width: 75,
    marginLeft: 10,
    borderRadius: 10
  },

  //Styling for the header on the right side of the wrapper
  headlineStyle: {
    paddingLeft: 5,
    flexWrap: "wrap",
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto"
  }
};

export default ArticleCard;
