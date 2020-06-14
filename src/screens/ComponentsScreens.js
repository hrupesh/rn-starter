import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ComponentsScreens() {
  return (
    <View>
      <Text style={styles.text}>This a Component.</Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    letterSpacing: 2,
    paddingHorizontal: 20,
    padding: 10,
  },
});
