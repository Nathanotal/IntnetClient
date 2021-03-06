import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Knapp({ namn, onPress }) {
  return (
    <TouchableOpacity style={styles.knapp} onPress={onPress}>
      <Text style={styles.kategoriText}>{namn}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  knapp: {
    backgroundColor: "lightskyblue",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  kategoriText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Knapp;
