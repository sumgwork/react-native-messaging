import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
  const { navigate } = useNavigation();

  const handleNewMessagePress = () => {
    navigate("Contacts");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNewMessagePress}>
      <MaterialCommunityIcons
        name="message-reply-text"
        size={24}
        color="white"
      />
    </TouchableOpacity>
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
