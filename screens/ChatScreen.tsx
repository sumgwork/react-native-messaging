import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Message } from "../types";
import { chatRoomData } from "../data/chatRoomData";
import ChatMessage from "../components/ChatMessage";

const ChatScreen = () => {
  const { params } = useRoute();

  // generate image url from unsplash
  return (
    <FlatList
      data={chatRoomData.messages}
      keyExtractor={(message) => message.id}
      renderItem={({ item }) => {
        return <ChatMessage message={item} />;
      }}
      contentContainerStyle={styles.chatList}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatList: {
    backgroundColor: "#e5e5e5",
    flexGrow: 1,
  },
});
