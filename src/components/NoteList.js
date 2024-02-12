// components/NoteList.js
import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  slice,
} from "react-native";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  // const handleDeleteNote = () => {
  //   {
  //     temp = state.notes.pop();
  //   }
  // };

  return (
    <View>
      <Text style={styles.judul}>Notes:</Text>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.fontlist}>{item}</Text>}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  judul: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    padding: 6,
    color: "white",
  },
  list: {
    borderWidth: 3,
  },
  fontlist: {
    flex: 1,
    flexDirection: "row",
    color: "#EB455F",
    fontWeight: "700",
    fontSize: 18,
    borderWidth: 2,
    padding: 10,
    margin: 4,
    borderRadius: 8,
    borderColor: "#EB455F",

    textAlign: "center",
  },
});

export default NoteList;
