import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          width: 150,
          height: 50,
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Signal-logo.png",
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
