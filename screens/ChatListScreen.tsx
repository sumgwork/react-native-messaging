import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/NewMessageButton";
import { Text, View } from "../components/Themed";
import { chatRooms } from "../data/chats";
import { RootTabScreenProps } from "../types";

export default function ChatListScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.chatRoomId}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
