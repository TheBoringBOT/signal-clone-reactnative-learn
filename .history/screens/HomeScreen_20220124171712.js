import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { auth, db } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { ListItem, Avatar } from "react-native-elements";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  // Sign Out User
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  //Get chats from DB firestore
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  useLayoutEffect(
    (userEmail) => {
      navigation.setOptions({
        title: "Signal",
        headerStyle: { backgroundColor: "#fff" },
        headerTitleStyle: { color: "black" },
        headerTintColor: "black",
        headerLeft: () => (
          <View style={{ margin: 16 }}>
            <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
              <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
              marginRight: 20,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camerao" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddChat")}
              activeOpacity={0.5}
            >
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
      });
    },
    [navigation]
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
