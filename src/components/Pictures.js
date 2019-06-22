import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

import CardHeader from "./CardHeader";

const Pictures = props => {
  console.log(props.data);
  const { headline, summary, images, label, type } = props.data;
  const { headLineStyle, typeStyle, summaryStyle } = styles;
  return (
    <ScrollView>
      <CardHeader label={label} published={published} />
      <Text style={headLineStyle}>{headline}</Text>
      <Text style={summaryStyle}>{summary}</Text>
      <Text style={typeStyle}>{type.toUpperCase()}</Text>
      {renderPics(images)}
    </ScrollView>
  );
};

const renderPics = arr => {
  let returnArray = [];

  const {
    imageStyle,
    textStyle,
    imageContainerStyle,
    descriptionStyle
  } = styles;

  for (let pic of arr) {
    console.log(pic.url);
    returnArray.push(
      <View style={imageContainerStyle} key={pic.id}>
        <Image
          source={{
            uri: pic.url
          }}
          style={imageStyle}
        />
        <View style={descriptionStyle}>
          <Text style={textStyle}>{pic.caption}</Text>
        </View>
      </View>
    );
  }

  return returnArray;
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
    height: 200
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
    padding: 10,
    paddingBottom: 15,
    alignItems: "center"
  },
  imageContainerStyle: {
    position: "relative"
  },
  descriptionStyle: {
    backgroundColor: "#CC004C"
  }
};

export default Pictures;
