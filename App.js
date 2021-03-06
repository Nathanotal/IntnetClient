import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginSkarm from "./assets/Skarmar/LoginSkarm";
import Register from "./assets/Skarmar/RegistreringsSkarm";
import Hem from "./assets/Skarmar/Hem";
import Add from "./assets/Skarmar/Add";
import Profil from "./assets/Skarmar/Profil";

function logIn(funk) {
  // Kontrollera autentisering !!!
  funk("Login");
}

export default function App() {
  const [screen, setScreen] = useState("Hem");
  // Följande kanske funkar:

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topButton}>
          <TouchableOpacity onPress={() => setScreen("Hem")}>
            <Ionicons name="home" size={80} />
          </TouchableOpacity>
        </View>
        <View style={styles.topButton}>
          <TouchableOpacity onPress={() => setScreen("Add")}>
            <Ionicons name="add" size={80} />
          </TouchableOpacity>
        </View>

        <View style={styles.topButton}>
          <TouchableOpacity onPress={() => logIn(setScreen)}>
            <Ionicons name="person-circle-outline" size={80} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.differentScreens}>
        {screen == "Hem" && <Hem funk={setScreen}></Hem>}
        {screen == "Add" && <Add funk={setScreen}></Add>}
        {screen == "Login" && <LoginSkarm funk={setScreen}></LoginSkarm>}
        {screen == "Register" && <Register funk={setScreen}></Register>}
        {screen == "Profil" && <Profil funk={setScreen}></Profil>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  block: {
    height: 300,
    width: 300,
    backgroundColor: "blue",
  },
  topBar: {
    alignSelf: "flex-start",
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: "lightgray",
    flexShrink: "true",
    justifyContent: "space-around",
  },
  topButton: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    borderWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "gray",
  },
  differentScreens: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
