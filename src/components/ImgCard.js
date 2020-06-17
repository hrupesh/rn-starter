import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ImgCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      {/* <Feather name="image" size={75} color="white" /> */}
      <Image
        fadeDuration={100}
        style={styles.img}
        source={{ uri: props.imgurl }}
      />
      <Text numberOfLines={1} style={styles.cardText}>
        {props.item}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: 200,
    backgroundColor: "#2196f3",
    alignSelf: "flex-start",
    borderRadius: 50,
    marginVertical: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#0d47a1",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
  },
  img: {
    height: "100%",
    width: "35%",
    borderRadius: 5,
  },
  cardText: {
    width: "65%",
    fontSize: 22,
    fontFamily: "monospace",
    paddingHorizontal: 25,
    color: "white",
    fontWeight: "100",
    letterSpacing: 2,
    overflow: "hidden",
  },
});
