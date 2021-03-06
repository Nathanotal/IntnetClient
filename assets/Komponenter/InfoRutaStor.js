import React from "react";
import { View, StyleSheet, Text } from "react-native";

function InfoRutaStor(props) {
  return (
    <View style={styles.ruta}>
      <Text style={styles.placeholderText}>Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ruta: {
    backgroundColor: "lightgray",
    width: 404,
    height: 404,
    borderRadius: 40,
    margin: 2,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 30,
    fontWeight: "600",
  },
});

export default InfoRutaStor;
