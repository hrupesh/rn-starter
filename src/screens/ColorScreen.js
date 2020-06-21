import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  TouchableNativeFeedback,
  ScrollView,
  FlatList,
} from "react-native-gesture-handler";

export default function ColorScreen() {
  const [colors, SetColors] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${blue} , ${green})`;
  };

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          SetColors([...colors, randomRGB()]);
        //   alert(colors);
        }}
      />
      <FlatList 
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({color}) => {
           return (<View
          style={{ height: 100, width: 100, backgroundColor: color }}
        ></View>);
        }}
      >
        
      </FlatList>
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
