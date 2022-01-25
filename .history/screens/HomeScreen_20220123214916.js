import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";

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
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
