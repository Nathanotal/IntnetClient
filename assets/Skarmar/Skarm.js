import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

// Bastemplate för skärm

function navAnsvar() {
  console.log("Ansvar");
}
function navProfil() {
  console.log("Profil");
}

function Skarm({ children, style, navigation }) {
  return (
    <SafeAreaView style={[styles.huvud, style]}>
      <View style={{ flex: 1 }}>{children}</View>
      <View style={styles.bottenRad}>
        <TouchableOpacity
          style={styles.knapp1}
          onPress={() => navigation.navigate("Hem")}
        >
          <Ionicons name="home-sharp" size={50} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.knapp2}
          onPress={() => navigation.navigate("Ansvar")}
        >
          <Feather name="check-square" size={50} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.knapp3}
          onPress={() => navigation.navigate("Profil")}
        >
          <Ionicons name="person-circle" size={50} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottenRad: {
    height: 70,
    backgroundColor: "gainsboro",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  huvud: {
    flex: 1,
  },
  knapp1: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "blue",
    width: 70,
    height: 70,
    flexGrow: 1,
  },
  knapp2: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
    width: 70,
    height: 70,
    flexGrow: 1,
  },
  knapp3: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
    width: 70,
    height: 70,
    flexGrow: 1,
  },
});

export default Skarm;
