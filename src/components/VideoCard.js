import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

import CardHeader from "./CardHeader";

const VideoCard = props => {
  const {
    contentStyle,
    headlineStyle,
    wrapperStyle,
    thumbnailStyle,
    playArrowStyle
  } = styles;
  let { label, url, headline, tease, published, preview } = props.data;

  return (
    <View style={[wrapperStyle, colorStyle()]}>
      <CardHeader label={label} published={published} />
      <View style={contentStyle}>
        <Text style={headlineStyle}>{headline}</Text>
        <Image
          source={{
            uri: tease
          }}
          style={thumbnailStyle}
          resizeMode={"contain"}
        />

        <Text style={playArrowStyle} onPress={() => Linking.openURL(url)}>
          &#10095;
        </Text>
      </View>
    </View>
  );
};

colorStyle = function() {
  let colors = [
    "#FCB711",
    "#F37021",
    "#CC004C",
    "#6460AA",
    "#0089D0",
    "#0DB14B"
  ];
  let color = colors[Math.floor(Math.random() * 6)];
  return {
    borderTopColor: color,
    borderTopWidth: 10
  };
};

const styles = {
  thumbnailStyle: {
    height: 250,
    width: "100%",
    borderRadius: 10
  },
  wrapperStyle: {
    backgroundColor: "white",
    marginLeft: 2,
    marginRight: 2,
    paddingBottom: 10
  },
  headlineStyle: {
    paddingLeft: 5,
    flexWrap: "wrap",
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto"
  },
  contentStyle: {
    flexDirection: "column"
  },
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
