import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function ListScreen() {
  const things = [
    { thing: "Thing 1" },
    { thing: "Thing 2" },
    { thing: "Thing 3" },
    { thing: "Thing 4" },
    { thing: "Thing 5" },
    { thing: "Thing 6" },
    { thing: "Thing 7" },
    { thing: "Thing 8" },
    { thing: "Thing 9" },
    { thing: "Thing 10" },
    { thing: "Thing 11" },
  ];

  return (
    <View>
      <Text style={styles.headingtext}>List Screen</Text>
      <FlatList
        keyExtractor={thing => thing.thing}
        data={things}
        renderItem={({item}) => {
          return <Text style={styles.ListText} > {item.thing} </Text>;
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
  ListText:{
      fontSize:24,
      letterSpacing:2,
      fontFamily:'monospace',
      textAlign:'center',
      backgroundColor:'#fff',
      padding:10,
      margin:5
  }
});
