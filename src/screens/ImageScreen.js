import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ImgCard from "../components/ImgCard";

export default function ImageScreen() {


  return (
    <View justify-content="center" style={styles.container}>
      <ImgCard imgurl="https://picsum.photos/400/400" item="Item 1" rating={Math.round(Math.random() * 5)}></ImgCard>
      <ImgCard imgurl="https://picsum.photos/450/450" item="Item 2" rating={Math.round(Math.random() * 5)}></ImgCard>
      <ImgCard imgurl="https://picsum.photos/400" item="Item 3" ></ImgCard>
      <ImgCard imgurl="https://picsum.photos/450" item="Item 4"></ImgCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
  },
});
