import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Message } from "../types";
import { chatRoomData } from "../data/chatRoomData";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
  const { params } = useRoute();

  // generate image url from unsplash
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <FlatList
        data={chatRoomData.messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => {
          return <ChatMessage message={item} />;
        }}
        contentContainerStyle={styles.chatList}
        inverted
      />
      <InputBox />
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  chatList: {
    flexGrow: 1,
  },
});
