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

interface ContactListItemProps {
  user: User;
}

const ContactListItem = ({ user }: ContactListItemProps) => {
  const { navigate } = useNavigation();
  const handleClick = () => {
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
