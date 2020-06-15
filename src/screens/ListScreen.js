import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function ListScreen() {
  var things = [
    { thing: "Thing 1", status: "Available" },
    { thing: "Thing 2", status: "Not-Available" },
    { thing: "Thing 3", status: "Available" },
    { thing: "Thing 4", status: "Not-Available" },
    { thing: "Thing 5", status: "Available" },
    { thing: "Thing 6", status: "Not-Available" },
    { thing: "Thing 7", status: "Available" },
    { thing: "Thing 8", status: "Not-Available" },
    { thing: "Thing 9", status: "Available" },
    { thing: "Thing 10", status: "Not-Available" },
    { thing: "Thing 11", status: "Available" },
    { thing: "Thing 12", status: "Available" },
    { thing: "Thing 13", status: "Not-Available" },
    { thing: "Thing 14", status: "Available" },
    { thing: "Thing 15", status: "Not-Available" },
    { thing: "Thing 16", status: "Not-Available" },
    { thing: "Thing 17", status: "Available" },
    { thing: "Thing 18", status: "Not-Available" },
    { thing: "Thing 19", status: "Available" },
    { thing: "Thing 20", status: "Not-Available" },
  ];

  const handlePress = (item) => {
    var statusText = "Default";

    if (item.status === "Available") {
      statusText = item.thing + " is Avaliable  in our nearby Store. 💖";
    } else {
      statusText =
        item.thing + " is currently not Avaliable  in our nearby Store. 😿";
    }
    alert(statusText);
  };

  return (
    <View>
      <Text style={styles.headingtext}>List Screen</Text>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator
        keyExtractor={(thing) => thing.thing}
        data={things}
        renderItem={({ item }) => {
          return (
            <Text onPress={() => handlePress(item)} style={styles.ListText}>
              {item.thing} - {item.status}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
  },
  ListText: {
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: "monospace",
    textAlign: "left",
    color: "white",
    backgroundColor: "tomato",
    padding: 15,
    margin: 5,
  },
});
