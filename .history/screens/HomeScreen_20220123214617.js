import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
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
    <SafeAreaView>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
