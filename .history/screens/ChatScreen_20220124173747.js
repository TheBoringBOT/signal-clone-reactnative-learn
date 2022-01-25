import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Avatar } from "react-native-elements";

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }}
          />
          <Text>{chatName}</Text>
        </View>
      ),
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
