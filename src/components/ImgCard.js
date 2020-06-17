import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ImgCard(props) {
  // console.log(props);
  var rating = props.rating;
  var star = <AntDesign name="star" size={20} color="#212121" />;

  const calculateRating = () => {
    if (rating === 5) {
      star += <AntDesign name="star" size={20} color="#212121" />;
      star += <AntDesign name="star" size={20} color="#212121" />;
      star += <AntDesign name="star" size={20} color="#212121" />;
      star += <AntDesign name="star" size={20} color="#212121" />;
    } else if (rating === 4) {
      star += <AntDesign name="star" size={20} color="#212121" />;
      star += <AntDesign name="star" size={20} color="#212121" />;
      star += <AntDesign name="star" size={20} color="#212121" />;
    }
  };

  calculateRating;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      {/* <Feather name="image" size={75} color="white" /> */}
      <Image
        fadeDuration={100}
        style={styles.img}
        source={{ uri: props.imgurl }}
      />
      <View>
        <Text numberOfLines={1} style={styles.cardText}>
          {props.item}
        </Text>
        <Text style={styles.cardRating}>
          {rating} {star}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: 150,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
  img: {
    height: "100%",
    width: "35%",
    borderRadius: 5,
  },
  cardText: {
    width: "100%",
    fontSize: 22,
    fontFamily: "monospace",
    paddingHorizontal: 25,
    color: "white",
    fontWeight: "100",
    letterSpacing: 2,
    overflow: "hidden",
  },
  cardRating: {
    fontSize: 20,
    color: "white",
    padding: 15,
    paddingHorizontal: 30,
  },
});
