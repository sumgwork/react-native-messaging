import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import type { ChatRoom } from "../types";
import moment from "moment";

interface ChatListItemProps {
  chatRoom: ChatRoom;
}

const ChatListItem = ({ chatRoom }: ChatListItemProps) => {
  // take last user from chatroom
  const user = chatRoom.users[chatRoom.users.length - 1];
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      <View style={styles.message}>
        <Text style={styles.username}>{user.name}</Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={"tail"}
          style={styles.messageContent}
        >
          {chatRoom.lastMessage.content}
        </Text>
      </View>
      <Text style={styles.timestamp}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 16,
  },
  message: {
    flex: 1,
  },
  messageContent: {
    color: "darkgray",
  },
  timestamp: {
    color: "darkgray",
    alignSelf: "flex-start",
    marginTop: 8,
  },
  username: {
    fontWeight: "bold",
  },
});
