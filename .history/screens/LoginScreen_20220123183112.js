import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Text>I am the login screen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
