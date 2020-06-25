import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function NameScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Password</Text>
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        placeholder="Enter Text"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        secureTextEntry={true}
      />
      {text.length > 6 ? (
        <Text style={styles.success}> Good! 👍🏽 </Text>
      ) : (
        <Text style={styles.error}>Password must be longer than 6 characters </Text>
      )}
      <Text style={styles.output}> Your Password : {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "Nunito Sans Regular",
    backgroundColor:'#512DA8'
  },
  label: {
    fontSize: 32,
    letterSpacing: 2,
    paddingHorizontal:25,
    color:'white'
  },
  input: {
    height: 70,
    width: "75%",
    fontSize: 24,
    margin: 25,
    paddingHorizontal: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: "#aaa",
    color: "#512DA8",
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
    color:'white'
  },
  error:{
    fontSize:12,
    letterSpacing:1,
    padding:10,
    marginHorizontal:25,
    color:'#D32F2F',
    backgroundColor:'#FFCDD2',
    borderColor:'#F44336',
    borderWidth:1,
    borderRadius:5,
  },
  success:{
    fontSize:12,
    letterSpacing:1,
    padding:10,
    marginHorizontal:45,
    color:'#689F38',
    backgroundColor:'#DCEDC8',
    borderColor:'#8BC34A',
    borderWidth:1,
    borderRadius:5,
  },
});
