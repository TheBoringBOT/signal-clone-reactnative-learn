import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "chat",
      headerTitleAlign: "left",
    });
  });
  const { id, chatName } = route.params;
  return (
    <View>
      <Text>{chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
