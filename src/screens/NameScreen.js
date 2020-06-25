import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function NameScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Text</Text>
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        placeholder="Enter Text"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
      />
      <Text style={styles.output}> You Entered : {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Nunito Sans Regular",
  },
  label: {
    fontSize: 35,
    letterSpacing: 2,
  },
  input: {
    height: 90,
    width: "75%",
    fontSize: 24,
    margin: 15,
    paddingHorizontal: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: "#aaa",
    color: "#212121",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 10,
    shadowOpacity: 0.8,
    shadowRadius: 50,
    backgroundColor: "#ddd",
  },
  output: {
    fontSize: 20,
    padding: 25,
    letterSpacing: 1,
  },
});
