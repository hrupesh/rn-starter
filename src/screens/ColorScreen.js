import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  TouchableNativeFeedback,
  ScrollView,
} from "react-native-gesture-handler";

export default function ColorScreen() {
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${blue} , ${green})`;
  };

  return (
    <View>
      <Button title="Add Color" />
      <ScrollView style={styles.container}>
        <View
          style={{ height: 100, width: 100, backgroundColor: randomRGB() }}
        ></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    overflow: "scroll",
  },
});
