import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "./ColorCounter";

export default function SquareScreen() {
  return (
    <View>
      <Text>Square Screen</Text>

      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
}

const styles = StyleSheet.create({});
