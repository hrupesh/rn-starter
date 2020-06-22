import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ColorCounter({ color }) {
  return (
    <View>
      <Text> {color} </Text>
      <Button title={`Add ${color}`} />
      <Button title={`Reduce ${color}`} />
    </View>
  );
}

const styles = StyleSheet.create({});
