import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const goToComponets = () => {
    navigation.navigate("Components");
  };

  const goToList = () => {
    navigation.navigate("List");
  };

  const goToImageScreen = () => {
    navigation.navigate("ImageScreen");
  };

  const goToCounterScreen = () => {
    navigation.navigate("CounterScreen");
  };

  const goToColorsScreen = () => {
    navigation.navigate("Color");
  };

  const goToSquareScreen = () => {
    navigation.navigate("Square");
  };

  const goToNameScreen = () => {
    navigation.navigate("Name");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>Hey!</Text>
        <Text style={styles.h2}>Welcome to the Hybrid App</Text>
        <Text style={styles.h3}>
          Navigate through different screen using the navingation bar at the
          bottom 😊{" "}
        </Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.icons} onPress={goToComponets}>
          <MaterialIcons
            name="settings-input-component"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToList}>
          <FontAwesome5 name="clipboard-list" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToImageScreen}>
          <Ionicons name="ios-images" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToCounterScreen}>
          <MaterialCommunityIcons name="counter" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToColorsScreen}>
          <Ionicons name="ios-color-palette" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToSquareScreen}>
          <Feather name="airplay" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={goToNameScreen}>
          <MaterialCommunityIcons name="rename-box" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7C4DFF",
  },
  text: {
    fontSize: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
  view: {
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#512DA8",
    justifyContent: "center",
    flexDirection: "row",
  },
  icons: {
    // margin: 10,
    padding: 15,
    height: 75,
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
  btn4: {
    width: "90%",
    height: "10%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1565c0",
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
  h1: {
    fontSize: 100,
    color: "white",
    fontFamily: "monospace",
    letterSpacing: 4,
    padding: 15,
    paddingTop: 200,
    textShadowColor: "#000",
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    textShadowRadius: 1,
    elevation: 10,
  },
  h2: {
    fontSize: 32,
    color: "white",
    fontFamily: "monospace",
    letterSpacing: 2,
    padding: 20,
    paddingTop: 10,
    textShadowColor: "#512DA8",
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    textShadowRadius: 1,
    elevation: 10,
  },
  h3: {
    fontSize: 22,
    color: "white",
    fontFamily: "monospace",
    letterSpacing: 1,
    padding: 20,
    paddingTop: 10,
    textShadowColor: "#512DA8",
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    textShadowRadius: 25,
    elevation: 10,
  },
});

export default HomeScreen;
