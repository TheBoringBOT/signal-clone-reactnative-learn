import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import React from "react";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://i.pravatar.cc/50",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}></ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
