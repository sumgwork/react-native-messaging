import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactListItem from "../components/ContactListItem";
import { contactsData } from "../data/contactsData";

const Contacts = () => {
  return (
    <View>
      <FlatList
        data={contactsData}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({});
