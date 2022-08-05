import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const handleMicrophonePress = () => {
    console.warn("Microphone pressed");
  };

  const handleSendPress = () => {
    console.warn("Send pressed", message);
    setMessage("");
  };

  const handleSend = () => {
    if (!message) {
      handleMicrophonePress();
    } else {
      handleSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome5
          name="laugh-beam"
          size={24}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.inputBox}
          multiline
          numberOfLines={3}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
        />
        <Entypo name="attachment" size={24} color="gray" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="gray" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={handleSend}>
        <View style={styles.microphoneIcon}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          ) : (
            <MaterialIcons name="send" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 32,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    marginRight: 8,
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    marginHorizontal: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  microphoneIcon: {
    backgroundColor: Colors.light.tint,
    borderRadius: 32,
    height: 32,
    width: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
