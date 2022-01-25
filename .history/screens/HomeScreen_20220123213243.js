import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { auth } from "../firebase";

const HomeScreen = () => {
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      console.table(user);
      //navigation.replace("Home");
    }
  });
  return (
    <View>
      <Text>This is the home page</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
