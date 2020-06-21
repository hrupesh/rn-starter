import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
        Alert('Enough 🛑','Counter has reached minimum limit of 0 ');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increaseCount}>
        <AntDesign name="pluscircle" size={100} color="black" />
      </TouchableOpacity>
      <Text style={styles.count}> {count} </Text>
      <TouchableOpacity onPress={decreaseCount}>
        <AntDesign name="minuscircle" size={100} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  count: {
    fontSize: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
    margin: 50,
  },
});
