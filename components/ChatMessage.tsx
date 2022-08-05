import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Message } from "../types";
import moment from "moment";
import Colors from "../constants/Colors";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isMyMessage = message.user.id === "1";

  return (
    <View
      style={{
        ...styles.container,
        alignSelf: isMyMessage ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={{
          ...styles.message,
          backgroundColor: isMyMessage ? "#dcf8c5" : "#eee",
        }}
      >
        {!isMyMessage && (
          <Text style={styles.username}>{message.user.name}</Text>
        )}
        <Text>{message.content}</Text>
        <Text style={styles.timestamp}>
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 8,
    borderRadius: 8,
    minWidth: "25%",
    maxWidth: "75%",
    marginHorizontal: 8,
  },
  message: {
    borderRadius: 8,
    padding: 8,
  },
  username: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 4,
  },
  timestamp: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "darkgray",
  },
});
