import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "./ColorCounter";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);

  return (
    <View>
      <Text>Square Screen</Text>

      <ColorCounter
        onAdd={() => setRed(red + 1)}
        onReduce={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        onAdd={() => setgreen(green + 1)}
        onReduce={() => setgreen(green - 1)}
        color="Green"
      />
      <ColorCounter
        onAdd={() => setblue(blue + 1)}
        onReduce={() => setblue(blue - 1)}
        color="Blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
