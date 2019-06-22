import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

import CardHeader from "./CardHeader";

const Article = props => {
  const { headline, tease, summary, url, label, type, published } = props.data;
  const {
    headLineStyle,
    imageStyle,
    typeStyle,
    summaryStyle,
    urlStyle,
    imageContainerStyle
  } = styles;
  return (
    <View>
      <CardHeader label={label} published={published} />
      <Text style={headLineStyle}>{headline}</Text>
      <Text style={typeStyle}>{type.toUpperCase()}</Text>
      <View style={imageContainerStyle}>
        <Image
          source={{
            uri: tease
          }}
          style={imageStyle}
        />
        <View style={urlStyle}>
          <Text style={styles.textStyle} onPress={() => Linking.openURL(url)}>
            nbcnews.com
          </Text>
        </View>
      </View>
      <Text style={summaryStyle}>{summary}</Text>
    </View>
  );
};

const styles = {
  headLineStyle: {
    fontSize: 20,
    marginLeft: 5
  },
  typeStyle: {
    color: "#6460AA",
    fontSize: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  imageStyle: {
    width: "100%",
    height: 200,
    marginBottom: 5
  },
  summaryStyle: {
    marginLeft: 5,
    fontSize: 15
  },
  urlStyle: {
    backgroundColor: "rgba(0,0,0,0.99)",
    width: "100%",
    height: 35,
    opacity: 0.7,
    positon: "absolute",
    top: -45,
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    paddingLeft: 20
  },
  imageContainerStyle: {
    position: "relative"
  }
};

export default Article;