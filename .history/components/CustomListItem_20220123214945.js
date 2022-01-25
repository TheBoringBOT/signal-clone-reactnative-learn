import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import React from "react";

const CustomListItem = () => {
  return (
    <View>
      <Avatar
        rounded
        source={{
          uri: "https://i.pravatar.cc/50",
        }}
      />
    </View>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
