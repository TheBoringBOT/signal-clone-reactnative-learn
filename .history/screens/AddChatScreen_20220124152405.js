import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Button, Input } from "react-native-elements";

const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input placeholder="Enter chat name" />
      <Button />
      <Text></Text>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
