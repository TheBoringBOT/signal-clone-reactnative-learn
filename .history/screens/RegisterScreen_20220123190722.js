import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native-web";

const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text>I am register screen</Text>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
