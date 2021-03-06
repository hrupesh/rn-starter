import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state.count + 1 > 100
        ? state
        : { ...state, count: state.count + 1 };
    case "subtract":
      return state.count - 1 < 0 ? state : { ...state, count: state.count - 1 };
    case "got_to_max":
      return { ...state, count: 100 };
    case "go_to_min":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const { count } = state;

  // const increaseCount = () => {
  //   if (count > 9) {
  //     Alert.alert("Enough 🛑", "Counter has reached maximum limit.");
  //   } else {
  //     setCount(count + 1);
  //   }
  // };

  // const decreaseCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     Alert.alert("Enough 🛑", "Counter has reached minimum limit.");
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onLongPress={() => dispatch({ type: "go_to_max" })}
        onPress={() => dispatch({ type: "add" })}
      >
        <AntDesign name="pluscircle" size={100} color="#333" />
      </TouchableOpacity>
      <Text style={styles.count}> {count} </Text>
      <TouchableOpacity
        onLongPress={() => dispatch({ type: "go_to_min" })}
        activeOpacity={0.8}
        onPress={() => dispatch({ type: "subtract" })}
      >
        <AntDesign name="minuscircle" size={100} color="#333" />
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
    fontSize: 150,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
    margin: 50,
    textShadowColor: "#222",
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowRadius: 10,
  },
});
