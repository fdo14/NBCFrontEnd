import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

import CardHeader from "./CardHeader";
import IndividualPhoto from "./IndividualPhoto";

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = { picId: 0 }; //Create our component level state to decide which picture from the array will be shown
  }

  //Handle the left swipe gesture to move on to the next picture
  onSwipeLeft(gestureState) {
    if (this.state.picId < this.props.data.images.length) {
      //We don't want users to swipe left when we are at the end of the array
      this.setState({ picId: this.state.picId + 1 }); //Increment the state by 1
    }
  }

  //Handle the right swipe gesture to move back to the previous picture
  onSwipeRight(gestureState) {
    if (this.state.picId > 0) {
      //We don't want users to swipe right when we are at the beginning of the array
      this.setState({ picId: this.state.picId - 1 }); //Decrement the state by 1
    }
  }

  render() {
    const {
      headline,
      summary,
      images,
      label,
      type,
      published
    } = this.props.data; //Destructure the necessary elements from the news data

    const {
      headLineStyle,
      typeStyle,
      summaryStyle,
      arrowContainerStyle,
      arrowStyle,
      descriptionStyle,
      textStyle
    } = styles; //Destructure the style from the styles const below

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }; //Configuration for the swipe handler

    const win = Dimensions.get("window"); //Find the dimension of the screen

    return (
      <GestureRecognizer
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
      >
        {/* Create the wrapper component that handles and recognizes the gestures with the functions we created for props */}
        <ScrollView>
          <CardHeader label={label} published={published} />
          {/* Call the header component */}
          <Text style={headLineStyle}>{headline}</Text>
          {/* Create the headline */}
          <Text style={summaryStyle}>{summary}</Text>
          <Text style={typeStyle}>{type.toUpperCase()}</Text>
          <View style={arrowContainerStyle}>
            {/* Create the left and right arrow to show users to swipe */}
            <Text style={arrowStyle}>&#8592;</Text>
            <Text style={{ fontSize: 15 }}>Swipe!</Text>
            <Text style={arrowStyle}>&#8594;</Text>
          </View>
          <AutoHeightImage
            width={win.width}
            source={{ uri: images[this.state.picId].url }}
          />
          <View style={descriptionStyle}>
            <Text style={textStyle}>{images[this.state.picId].caption}</Text>
            {/* A caption for the image */}
          </View>
          {/* Call the IndividualPhoto Component to show one picture at a time */}
        </ScrollView>
      </GestureRecognizer>
    );
  }
}

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

  //Styling for the flex box containing the arrows
  arrowContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center"
  },

  //Styling for the arrows themselves
  arrowStyle: {
    fontSize: 25
  },

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

export default Pictures;
