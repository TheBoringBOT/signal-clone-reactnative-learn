import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const HomeScreen = () => {
  const currentUser = auth.currentUser || "";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        alert("dude");
        //navigation.replace("Home");
      }
    });

    return unsubscribe;
  });
  return (
    <View>
      <Text>This is the home page</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
