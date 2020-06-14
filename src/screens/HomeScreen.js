import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}> Home </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding:10,
    paddingHorizontal:20
  },
});

export default HomeScreen;
