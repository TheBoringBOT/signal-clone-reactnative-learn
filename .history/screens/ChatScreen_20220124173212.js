import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatScreen = ({ navigation, route }) => {
  const { id, chatname } = route.params;
  return (
    <View>
      <Text>chat screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
