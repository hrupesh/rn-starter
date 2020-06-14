import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ComponentsScreens() {
  var name = "Rupesh Chaudhari";

  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.text2}>My Name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    letterSpacing: 2,
    paddingHorizontal: 20,
    padding: 10,
  },
  text2: {
    fontSize: 20,
    color: '#536DFE',
    letterSpacing: 2,
    paddingHorizontal: 20,
    padding: 10,
  },
});
