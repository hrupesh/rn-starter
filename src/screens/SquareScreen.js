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
        onAdd={() => setRed(red + 100)}
        onReduce={() => setRed(red - 100)}
        color="Red"
      />
      <ColorCounter
        onAdd={() => setgreen(green + 100)}
        onReduce={() => setgreen(green - 100)}
        color="Green"
      />
      <ColorCounter
        onAdd={() => setblue(blue + 100)}
        onReduce={() => setblue(blue - 100)}
        color="Blue"
      />

      <Text>
        {" "}
        Current Value : RGB({red}, {green}, {blue}){" "}
      </Text>
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
