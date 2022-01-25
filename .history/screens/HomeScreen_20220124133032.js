import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { ListItem, Avatar } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const userEmail = auth.currentUser;
const HomeScreen = ({ navigation }) => {
  useLayoutEffect((userEmail) => {
    console.log(auth.currentUser.email);
    navigation.setOptions({
      title: userEmail,
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ margin: 16 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
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
