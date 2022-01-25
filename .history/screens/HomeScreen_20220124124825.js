import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { ListItem, Avatar } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    if (auth === null) {
      navigation.replace("Register");
      navigation.setOptions({
        title: "Signal",
        headerStyle: { backgroundColor: "#fff" },
        headerTitleStyle: { color: "black" },
        headerTintColor: "black",
        headerLeft: () => (
          <View style={{ marginleft: 20 }}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </View>
        ),
      });
    } else {
    }
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
