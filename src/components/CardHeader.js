import React from "react";
import { Text, View } from "react-native";

renderDate = date => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

const CardHeader = props => {
  const { headerStyle } = styles;
  let published = new Date(props.published).getTime() / 1000;
  return (
    <View style={headerStyle}>
      <Text style={{ marginRight: 5, fontSize: 10 }}>{props.label}</Text>
      <Text>&#183;</Text>
      <Text style={{ marginLeft: 5, fontSize: 10 }}>
        {renderDate(new Date(Date.now() - published))}
      </Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    flexDirection: "row",
    marginLeft: 10,
    color: "white",
    alignItems: "center"
  }
};

export default CardHeader;
