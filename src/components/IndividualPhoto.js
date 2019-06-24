import React from "react";
import { Text, View, Image } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const IndividualPhoto = props => {
  const { descriptionStyle, textStyle } = styles; //Destructure the necessary style
  let { url, caption } = props.data; //Destructure the necessary data from our news object

  return (
    <View>
      <AutoHeightImage width={props.width} source={{ uri: url }} />
      {/* The image itself */}
      <View style={descriptionStyle}>
        <Text style={textStyle}>{caption}</Text>
        {/* A caption for the image */}
      </View>
    </View>
  );
};

const styles = {
  //Description for the container that holds each caption
  descriptionStyle: {
    backgroundColor: "#CC004C"
  },

  //Description for the caption itself
  textStyle: {
    color: "white",
    fontSize: 15,
    padding: 10,
    paddingBottom: 15,
    alignItems: "center"
  }
};

export default IndividualPhoto;
