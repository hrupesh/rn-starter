import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "./ColorCounter";

const THRESHOLD = 5;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);

  const validateColors = () => {
      if(red > 255){
          setRed(255)
      }else if(red < 0){
          setRed(0)
      }

      if(green > 255){
          setgreen(255)
      }else if(green < 0){
          setgreen(0)
      }
      
  }

  validateColors()

  return (
    <View>
      <Text>Square Screen</Text>

      <ColorCounter
        onAdd={() => setRed(red + THRESHOLD)}
        onReduce={() => setRed(red - THRESHOLD)}
        color="Red"
      />
      <ColorCounter
        onAdd={() => setgreen(green + THRESHOLD)}
        onReduce={() => setgreen(green - THRESHOLD)}
        color="Green"
      />
      <ColorCounter
        onAdd={() => setblue(blue + THRESHOLD)}
        onReduce={() => setblue(blue - THRESHOLD)}
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
