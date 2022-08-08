import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { User } from "../types";
import { useNavigation } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {
  createChatRoom,
  createChatRoomUserRelation,
} from "../src/graphql/mutations";
import { ChatRoom } from "../src/API";

interface ContactListItemProps {
  user: User;
}

const ContactListItem = ({ user }: ContactListItemProps) => {
  const { navigate } = useNavigation();

  async function createChatRoomForUser() {
    const chatRoom = await API.graphql(
      graphqlOperation(createChatRoom, {
        input: {
          name: user.name,
        },
      })
    );

    // @ts-ignore
    const newChatRoomId = chatRoom?.data?.createChatRoom?.id;

    // add id of user in that relation
    await API.graphql(
      graphqlOperation(createChatRoomUserRelation, {
        input: {
          chatRoomID: newChatRoomId,
          userID: user.id,
        },
      })
    );

    // add id of logged in user to that relation
    const currentUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createChatRoomUserRelation, {
        input: {
          chatRoomID: newChatRoomId,
          userID: currentUser.attributes.sub,
        },
      })
    );
  }

  const handleClick = async () => {
    await createChatRoomForUser();
    navigate("ChatScreen", {
      chatroomId: user.id,
      name: user.name,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        <View style={styles.message}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.status}>
            {user.status}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;

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
  username: {
    fontWeight: "bold",
  },
  status: {
    color: "darkgray",
  },
});
