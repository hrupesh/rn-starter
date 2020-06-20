import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
      setCount(count +1);
  }

  const decreaseCount = () => {
      setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text>Counter Screen</Text>
      <TouchableOpacity onPress={increaseCount}>
        <AntDesign name="pluscircle" size={40} color="white" />
      </TouchableOpacity>
      <Text> {count} </Text>
      <TouchableOpacity onPress={decreaseCount}>
        <AntDesign name="minuscircle" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
});
