import React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import colors from "../../colors";
import ToDoCheckView from "./ToDoCheckView";

function ListEntry({ item }) {
  const [showList, toggleList] = useState(false);
  const countDone = item.todos.filter((todo) => todo.completed).length;
  const remaining = item.todos.length - countDone;
  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <Modal
        animationType="slide"
        visible={showList}
        onRequestClose={() => toggleList(!showList)}
      >
        <ToDoCheckView list={item} closeModal={() => toggleList(!showList)} />
      </Modal>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => toggleList(!showList)}
      >
        <View style={[styles.container, { backgroundColor: item.color }]}>
          <Text style={styles.text}>{item.name}</Text>

          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: colors.black }}>{remaining}</Text>
              <Text style={{ color: colors.red }}>Remaining</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: colors.black }}>{countDone}</Text>
              <Text style={{ color: colors.green }}>Completed</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    aspectRatio: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.white,
    marginBottom: 20,
  },
});

export default ListEntry;
