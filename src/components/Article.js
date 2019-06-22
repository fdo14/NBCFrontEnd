import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

import CardHeader from "./CardHeader";

const Article = props => {
  const { headline, tease, summary, url, label, type, published } = props.data; //Destructure our news data from props

  const {
    headLineStyle,
    imageStyle,
    typeStyle,
    summaryStyle,
    urlStyle,
    imageContainerStyle
  } = styles; //Destructure our styles from the styles const below

  return (
    <View>
      <CardHeader label={label} published={published} />
      {/* This is our reusable header Component with label and time published */}
      <Text style={headLineStyle}>{headline}</Text>
      {/* Create our headline */}
      <Text style={typeStyle}>{type.toUpperCase()}</Text>
      {/* What type of news source am I looking at, article, video, or slideshow */}
      <View style={imageContainerStyle}>
        {/* This will be our image and the link to the actual article */}
        <Image
          source={{
            uri: tease
          }}
          style={imageStyle}
        />
        <View style={urlStyle}>
          {/* This view will be overlayed on top of the image */}
          <Text style={styles.textStyle} onPress={() => Linking.openURL(url)}>
            nbcnews.com
          </Text>
        </View>
      </View>
      <Text style={summaryStyle}>{summary}</Text>
      {/* A summary of the article */}
    </View>
  );
};

//All of our styles for this page
const styles = {
  //Styling for the header
  headLineStyle: {
    fontSize: 20,
    marginLeft: 5
  },

  //Styling for what type of news source we are working with
  typeStyle: {
    color: "#6460AA",
    fontSize: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },

  //Styling for the container holding both the image and the url
  imageContainerStyle: {
    position: "relative"
  },

  //Styling for the image
  imageStyle: {
    width: "100%",
    height: 200,
    marginBottom: 5
  },

  //Styling for the container of the url, to overlay it on top of the image
  urlStyle: {
    backgroundColor: "rgba(0,0,0,0.99)",
    width: "100%",
    height: 35,
    opacity: 0.7,
    positon: "absolute",
    top: -45,
    justifyContent: "center"
  },

  //Styling for the url text itself within the urlStyle container
  textStyle: {
    color: "white",
    fontSize: 15,
    paddingLeft: 20
  },

  //Styling for the summary of the article
  summaryStyle: {
    marginLeft: 5,
    fontSize: 15
  }
};

export default Article;
