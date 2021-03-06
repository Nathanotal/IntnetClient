import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

function RensadSkarm({ children, style }) {
  return (
    <SafeAreaView style={[styles.huvud, style]}>
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  huvud: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RensadSkarm;
