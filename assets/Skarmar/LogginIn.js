import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Knapp from "../Komponenter/Knapp";
import * as firebase from "firebase";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

async function logga(navigation, cred) {
  const auth = firebase.auth();
  const loginPromise = auth
    .signInWithEmailAndPassword(cred.email, cred.pass)
    .then(() => {
      console.log("Inloggad");
      navigation.navigate("Hem");
    });
  loginPromise.catch((e) => {
    console.log(e.message);
  });
}

function LogginIn({ route, navigation }) {
  const { cred } = route.params;
  logga(navigation, cred);
  return (
    <SafeAreaView>
      <Text style={styles.rubrik}>Loggar in...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rubrik: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 10,
  },
});

export default LogginIn;
