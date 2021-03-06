import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
import AnnonsItem from "../Komponenter/AnnonsItem";
import { io, Socket } from "socket.io-client";

// Hämta från databas här koppla även till socket!
const lista = [
  {
    title: "Fin bil",
    body: "Jag har byggt en rosa bil och säljer den eftersom jag har 2",
    price: 1000000,
    date: "10/03/2021",
    username: "Pelle123",
    key: "1",
  },
  {
    title: "Fin båt",
    body: "Jag har byggt en rosa båt och säljer den eftersom jag har 2",
    price: 3000000,
    date: "04/03/2021",
    username: "Ella321",
    key: "2",
  },
  {
    title: "Fint skåp",
    body: "Jag har byggt ett rosa skåp och säljer det eftersom jag har 2",
    price: 1000,
    date: "01/03/2021",
    username: "Philip222",
    key: "3",
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

// Etablera socket-koppling
const link = "https://127.0.0.1:8001"; // API-server
const s = io(link);

function addData(funk, oldDataList, newData) {
  oldDataList.push(newData);
  funk(oldDataList);
}

function removeData(funk, oldDataList, id) {
  const newDataList = oldDataList.filter((item) => item.key !== id);
  funk(newDataList);
}

async function getData(funk) {
  fetch("https://127.0.0.1:8001/api/getAds")
    .then((response) => response.json())
    .then((data) => funk(data));
}

let ladda = true;

function Hem(props) {
  const [annonser, setAnnonser] = useState(lista);
  useEffect(() => {
    if (ladda) {
      ladda = false;
      getData(setAnnonser);
    }
  });
  // Socket, new item!
  s.on("post", (info) => {
    try {
      const newData = JSON.parse(info);
      console.log(newData);

      addData(setAnnonser, annonser, newData);
    } catch (e) {
      console.log("Fel när JSON skulle tolkas Nytt item: ", e);
    }
    console.log(info);
  });

  s.on("remove", (info) => {
    try {
      const removeId = JSON.parse(info);
      console.log(removeId);

      removeData(setAnnonser, annonser, removeId);
    } catch (e) {
      console.log("Fel när JSON skulle tolkas ID: ", e);
    }
    console.log(info);
  });

  return (
    <View style={styles.container}>
      <View style={styles.rubrikContainer}>
        <Text style={styles.rubrik}>Välkommen till Annonssidan!</Text>
      </View>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <AnnonsItem info={item} funktion={false}></AnnonsItem>
        )}
        numColumns={2}
      ></FlatList>
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
  rubrikContainer: {},
});

export default Hem;
