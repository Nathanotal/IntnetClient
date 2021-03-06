import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

function doSomething(key, funk, funktion) {
  if (funktion) {
    funk(key);
  }
}

function AnnonsItem({ info, funk, funktion }) {
  return (
    <TouchableOpacity
      style={styles.ruta}
      onPress={() => doSomething(info.key, funk)}
    >
      <View style={styles.iRuta}>
        <Text style={styles.title}>{info.title}</Text>

        <View style={styles.merInfo}>
          <Text style={styles.datum}>{info.date}</Text>
          <Text style={styles.namn}>{info.username}</Text>
        </View>
        <View style={styles.beskrivningsRuta}>
          <Text style={styles.beskrivning}>Information: "{info.body}"</Text>
        </View>
        <View style={styles.prisRuta}>
          <Text style={styles.pris}>{info.price} kr</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ruta: {
    height: 400,
    width: 400,
    backgroundColor: "skyblue",
    margin: 10,
    borderRadius: 50,
    shadowRadius: 5,
  },
  title: {
    fontSize: 50,
    margin: 10,
    marginTop: 0,
    fontWeight: "700",
  },
  iRuta: {
    margin: 10,
  },
  pris: {
    fontSize: 40,
    fontWeight: "700",
    color: "green",
  },
  prisRuta: {
    marginRight: 10,
    alignSelf: "flex-end",
  },
  datum: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    alignSelf: "flex-end",
  },
  namn: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    alignSelf: "flex-end",
  },
  merInfo: {
    marginTop: -25,
    marginRight: 10,
    marginBottom: 10,
  },
  beskrivning: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    margin: 20,
  },
  beskrivningsRuta: {
    margin: 20,
    marginBottom: 0,
    height: "70%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowRadius: 5,
  },
});

export default AnnonsItem;
