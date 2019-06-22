import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

import CardHeader from "./CardHeader";

const Pictures = props => {
  const { headline, summary, images, label, type, published } = props.data; //Destructure the necessary elements from the news data
  const { headLineStyle, typeStyle, summaryStyle } = styles; //Destructure the style from the styles const below
  return (
    <ScrollView>
      <CardHeader label={label} published={published} />
      {/* Call the header component */}
      <Text style={headLineStyle}>{headline}</Text>
      <Text style={summaryStyle}>{summary}</Text>
      <Text style={typeStyle}>{type.toUpperCase()}</Text>
      {renderPics(images)}
      {/* Call the renderPics function from below that will display all of the slideshow pics and captions */}
    </ScrollView>
  );
};

//This helper function loops through all of the pictures in a slideshow and creates their components
const renderPics = arr => {
  let returnArray = []; //Create our empty array that we will push JSX into and then return

  const { imageStyle, textStyle, descriptionStyle } = styles; //Destructure the styles necessary for this component

  for (let pic of arr) {
    //Loop through the array of pictures
    returnArray.push(
      //For every picture push into the array...
      <View key={pic.id}>
        <Image
          source={{
            uri: pic.url
          }}
          style={imageStyle}
        />
        {/* The image itself */}
        <View style={descriptionStyle}>
          <Text style={textStyle}>{pic.caption}</Text>
          {/* A caption for the image */}
        </View>
      </View>
    );
  }

  return returnArray; //Return the array of JSX
};

const styles = {
  //The styling for the headline of the slideshow
  headLineStyle: {
    fontSize: 20,
    marginLeft: 5
  },

  //The styling for the summary of the slideshow
  summaryStyle: {
    marginLeft: 5,
    fontSize: 15
  },

  //The styling for the type of the slideshow
  typeStyle: {
    color: "#6460AA",
    fontSize: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },

  //Styling for each specific image
  imageStyle: {
    width: "100%",
    height: 200
  },

  //Description for the container that holds each caption
  descriptionStyle: {
    backgroundColor: "#CC004C"
  },

  //Description the caption itself
  textStyle: {
    color: "white",
    fontSize: 15,
    padding: 10,
    paddingBottom: 15,
    alignItems: "center"
  }
};

export default Pictures;
