import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { ListItem, Avatar } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  let userImage, userName, userEmail;

  const aB = getAuth();

  onAuthStateChanged(aB, (user) => {
    userImage = user.photoURL;
  });

  useLayoutEffect(() => {
    console.log(userImage);
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginleft: 20 }}>
          <Avatar rounded source={{ uri: userImage }} />
        </View>
      ),
    });
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
