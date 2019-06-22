import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";
import { Actions } from "react-native-router-flux";

import CardHeader from "./CardHeader";
import colorStyle from "../utils/colorStyle";

const PhotoCard = props => {
  const { contentStyle, headlineStyle, wrapperStyle, thumbnailStyle } = styles; //Destructure the necessary style
  let { label, headline, tease, published } = props.data; //Destructure the necessary data from our news object

  return (
    <View style={[wrapperStyle, colorStyle()]}>
      <CardHeader label={label} published={published} />
      {/* Use the Card Header component */}
      <View style={contentStyle}>
        <Text
          style={headlineStyle}
          onPress={() => Actions.pictures({ data: props.data })}
        >
          {/* Create a clickable headline text that brings the user to the slideshow page */}
          {headline}
        </Text>
        <Image
          source={{
            uri: tease
          }}
          style={thumbnailStyle}
          resizeMode={"contain"}
        />
        {/* Create the image tease for this component */}
      </View>
    </View>
  );
};

const styles = {
  //Styling for the wrapper holding the header, picture, and title
  wrapperStyle: {
    backgroundColor: "white",
    marginLeft: 2,
    marginRight: 2,
    paddingBottom: 10
  },

  //Styling for the flexbox holding the image and headline
  contentStyle: {
    flexDirection: "column"
  },

  //Styling for the picture
  thumbnailStyle: {
    height: 250,
    width: "100%",
    borderRadius: 10
  },

  //Styling for the headline
  headlineStyle: {
    paddingLeft: 5,
    flexWrap: "wrap",
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto"
  }
};

export default PhotoCard;
