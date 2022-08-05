import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const NewMessageButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-reply-text"
        size={24}
        color="white"
      />
    </View>
  );
};

export default NewMessageButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
