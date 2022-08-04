import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

interface ChatScreenProps {}

const ChatScreen = (props: ChatScreenProps) => {
  const { params } = useRoute();

  return (
    <View>
      <Text>ID: {params?.chatroomId}</Text>
      <Text>Name: {params?.name}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
