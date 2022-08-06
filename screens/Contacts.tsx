import { FlatList, StyleSheet, Text, View } from "react-native";
import ContactListItem from "../components/ContactListItem";
import useListOtherUsers from "../hooks/useListOtherUsers";

const Contacts = () => {
  const contacts = useListOtherUsers();

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Contacts;

const styles = StyleSheet.create({});
