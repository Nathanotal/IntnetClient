// Mina annonser
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnnonsItem from "../Komponenter/AnnonsItem";

// Hämta från databas här! Select where namn==namn. Behöver inte vara socket, kolla aut !!!
const list = [
  {
    title: "Fin bil",
    body: "Jag har byggt en rosa bil och säljer den eftersom jag har 2",
    price: 1000000,
    date: "10/03/2021",
    username: "Pelle123",
    key: "1",
  },
  {
    title: "Fin skål",
    body: "Jag har byggt en rosa skål och säljer den eftersom jag har 2",
    price: 30,
    date: "04/03/2021",
    username: "Pelle123",
    key: "4",
  },
];

function logOut(funk, set) {
  // Logga ut! Fixa koppling med databas
  set(false);
  fetch("https://127.0.0.1:8001/api/logout").then((response) => {
    if (true) {
      // kontrollera att det funkade
      funk("Login");
    }
  });
}

function remove(key2) {
  // Skicka ny post till servern
  fetch("https://127.0.0.1:8001/api/removeAd", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: { key: key2 },
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error(error);
    });
}

function checkLoggedIn(funk) {
  fetch("https://127.0.0.1:8001/api/getUserAds")
    .then((response) => response.json())
    .then((data) => funk(data.loggedin));
}

async function getData(funk) {
  fetch("https://127.0.0.1:8001/api/getUserAds")
    .then((response) => response.json())
    .then((data) => funk(data));
}

async function getProfile(funkNamn, funkEmail) {
  fetch("https://127.0.0.1:8001/api/getProfile")
    .then((response) => response.json())
    .then((data) => {
      funkNamn(data.username);
      funkEmail(data.email);
    });
}

let ladda = true; // Hackigt

function Profil({ funk }) {
  const [lista, setList] = useState(list);
  const [namn, setNamn] = useState("Laddar Namn");
  const [email, setEmail] = useState("Laddar Email");
  const [isLoggedIn, setLoginStatus] = useState(false);

  useEffect(() => {
    if (ladda) {
      ladda = false;
      checkLoggedIn(setLoginStatus);
      getProfile(setNamn, setEmail);
      getData(setList);
    }
  });

  return (
    <View style={styles.container}>
      {isLoggedIn && (
        <div>
          <View style={styles.rubrikContainer}>
            <Text style={styles.rubrik}>Profil</Text>
          </View>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <AnnonsItem
                info={item}
                funk={remove}
                funktion={true}
              ></AnnonsItem>
            )}
            numColumns={2}
          ></FlatList>
          <View style={styles.logOut}>
            <TouchableOpacity onPress={() => logOut(funk, setLoginStatus)}>
              <Ionicons name="exit" size={80} />
            </TouchableOpacity>
          </View>
        </div>
      )}
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
  rubrik: {
    fontSize: 50,
    fontWeight: "700",
  },
  logOut: {},
});

export default Profil;
