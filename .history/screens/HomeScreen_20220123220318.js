import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = (navigation) => {
  const user = auth.currentUser;

  useLayoutEffect(({ navigation }) => {
    navigation.setOptions({ title: "signal" });
  }, []);

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
