import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../colors";

function SmallListItem({ item }) {
  return (
    <View style={styles.checkContainer}>
      <TouchableOpacity>
        <Feather
          name={item.completed ? "square" : "check-square"}
          size={45}
          color={colors.black}
          style={{ width: 45 }}
        />
      </TouchableOpacity>
      <Text style={styles.checkText}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkContainer: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default SmallListItem;
