import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "./ColorCounter";

const THRESHOLD = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "change_green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "change_blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  //   const validateColors = () => {
  //     if (red > 255) {
  //       setRed(255);
  //     } else if (red < 0) {
  //       setRed(0);
  //     }

  //     if (green > 255) {
  //       setgreen(255);
  //     } else if (green < 0) {
  //       setgreen(0);
  //     }

  //     if (blue > 255) {
  //       setblue(255);
  //     } else if (blue < 0) {
  //       setblue(0);
  //     }
  //   };

  //   validateColors();

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
      <Text style={styles.curVal}>
        RGB({red}, {green}, {blue})
      </Text>

      <ColorCounter
        onAdd={() => dispatch({ type: "change_red", payload: THRESHOLD })}
        onReduce={() => dispatch({ type: "change_red", payload: -THRESHOLD })}
        color="Red"
      />
      <ColorCounter
        onAdd={() => dispatch({ type: "change_green", payload: THRESHOLD })}
        onReduce={() => dispatch({ type: "change_green", payload: -THRESHOLD })}
        color="Green"
      />
      <ColorCounter
        onAdd={() => dispatch({ type: "change_blue", payload: THRESHOLD })}
        onReduce={() => dispatch({ type: "change_blue", payload: -THRESHOLD })}
        color="Blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  curVal: {
    fontSize: 28,
    letterSpacing: 4,
    textAlign: "center",
    backgroundColor: "#212121",
    color: "white",
  },
});
