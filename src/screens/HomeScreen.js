import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const HomeScreen = ({navigation}) => {
  const goToComponets = () => {
    navigation.navigate("Components");
  };

  const goToList = () => {
    navigation.navigate("List");
  };

  const goToImageScreen = () => {
    navigation.navigate("ImageScreen");
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={goToComponets} style={styles.btn}>
        <Text style={styles.btntext}>Component Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToList} style={styles.btn2}>
        <Text style={styles.btntext}>List Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToImageScreen} style={styles.btn3}>
        <Text style={styles.btntext}>Image Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "90%",
    height: "10%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#448aff",
    textAlign: "center",
    margin: 15,
  },
  btn2: {
    width: "90%",
    height: "10%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2979ff",
    textAlign: "center",
    margin: 15,
  },
  btn3: {
    width: "90%",
    height: "10%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2962ff",
    textAlign: "center",
    margin: 15,
  },
  btntext: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 20,
    color: "white",
    letterSpacing: 5,
  },
});

export default HomeScreen;
