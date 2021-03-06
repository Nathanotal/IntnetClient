import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function InfoRutaBred(props) {
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
    height: 200,
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

export default InfoRutaBred;
