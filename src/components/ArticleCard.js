import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";
import { Actions } from "react-native-router-flux";

import CardHeader from "./CardHeader";

const ArticleCard = props => {
  const { thumbnailStyle, contentStyle, headlineStyle, wrapperStyle } = styles;
  let { label, url, headline, tease, published } = props.data;

  return (
    <View style={[wrapperStyle, colorStyle()]}>
      <CardHeader label={label} published={published} />
      <View style={contentStyle}>
        <Image
          source={{
            uri: tease
          }}
          style={thumbnailStyle}
        />
        <Text
          style={headlineStyle}
          onPress={() => Actions.article({ data: props.data })}
        >
          {headline}
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
    height: 75,
    width: 75,
    marginLeft: 10,
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
    flexDirection: "row",
    alignItems: "center"
  }
};

export default ArticleCard;
