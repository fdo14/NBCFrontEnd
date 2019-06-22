import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

import CardHeader from "./CardHeader";

const PhotoCard = props => {
  const { contentStyle, headlineStyle, wrapperStyle, thumbnailStyle } = styles;
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
  }
};

export default PhotoCard;
