import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

import CardHeader from "./CardHeader";
import colorStyle from "../utils/colorStyle";

const VideoCard = props => {
  const {
    contentStyle,
    headlineStyle,
    wrapperStyle,
    thumbnailStyle,
    playArrowStyle
  } = styles; //Destructure the styles from the styles const below
  let { label, url, headline, tease, published } = props.data; //Destructure the necessary elements from news data

  return (
    <View style={[wrapperStyle, colorStyle()]}>
      <CardHeader label={label} published={published} />
      {/* Call in the Card Header Component */}
      <View style={contentStyle}>
        <Text style={headlineStyle}>{headline}</Text>
        <Image
          source={{
            uri: tease
          }}
          style={thumbnailStyle}
          resizeMode={"contain"}
        />
        {/* Create the teaser image */}
        <Text style={playArrowStyle} onPress={() => Linking.openURL(url)}>
          &#10095;
          {/* This is a play arrow that we will overlay on top of the image to show it's a video*/}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  //Styling for wrapper that holds everything
  wrapperStyle: {
    backgroundColor: "white",
    marginLeft: 2,
    marginRight: 2,
    paddingBottom: 10
  },

  //Styling for the flexbox holding the headline and picture
  contentStyle: {
    flexDirection: "column"
  },

  //Styling for the headline of the video
  headlineStyle: {
    paddingLeft: 5,
    flexWrap: "wrap",
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto"
  },

  //Styling for the teaser pic
  thumbnailStyle: {
    height: 250,
    width: "100%",
    borderRadius: 10
  },

  //Styling for the arrow that is overlayed on top of the image
  playArrowStyle: {
    fontSize: 25,
    backgroundColor: "red",
    height: 40,
    width: 40,
    textAlign: "center",
    backgroundColor: "grey",
    opacity: 0.8,
    borderRadius: 100,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }]
  }
};

export default VideoCard;
