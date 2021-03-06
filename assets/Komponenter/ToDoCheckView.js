import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "../../colors";
import SmallListItem from "./SmallListItem";

function ToDoCheckView({ list, closeModal }) {
  const { name, color, todos } = list;
  //const item = list;
  const count = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={closeModal}>
        <Ionicons name="arrow-back" size={50} />
      </TouchableOpacity>

      <View
        style={[styles.section, styles.header, { borderBottomColor: color }]}
      >
        <Text style={styles.title}>{name}</Text>
        <Text styyle={styles.count}>
          {completed} of {count} tasks
        </Text>
      </View>

      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <SmallListItem item={item}></SmallListItem>;
          }}
          keyExtractor={(list) => {
            return list.title;
          }}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
        />
      </View>

      <KeyboardAvoidingView
        style={styles.bottom}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput
          style={[styles.newEntry, { borderColor: color }]}
        ></TextInput>
        <TouchableOpacity style={[styles.add, { backgroundColor: color }]}>
          <Feather name="plus" size={45} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 32,
    left: 10,
    //backgroundColor: "lightgray",
    borderRadius: 20,
    width: 60,
    height: 60,
    margin: 2,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "800",
    color: colors.black,
  },
  count: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.primary,
    fontWeight: "800",
  },
  bottom: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "flex-end",
    paddingHorizontal: 20,
  },
  add: {
    borderRadius: 10,
  },
  newEntry: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default ToDoCheckView;
