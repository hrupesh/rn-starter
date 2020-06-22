import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ColorCounter({ color, onAdd, onReduce }) {
  return (
    <View >
      <Text style={{ textAlign:'center', fontSize:20 }}> {color} </Text>
      <Button title={`Add ${color}`} onPress={() => onAdd()} />
      <Button title={`Reduce ${color}`} onPress={() => onReduce()} />
    </View>
  );
}

const styles = StyleSheet.create({});
