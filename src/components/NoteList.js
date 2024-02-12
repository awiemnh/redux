// components/NoteList.js
import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  slice,
  Button,
} from "react-native";
import { deleteNote } from "../actions/notesActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Notes:</Text>

      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.fontlist}>
            {item}
            <View style={styles.bottonGroup}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDeleteNote(index)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
  },
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
    width: "100%",
  },
  button: {
    backgroundColor: "#EB455F",
    padding: 10,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",

    textAlign: "center",
  },
  bottonGroup: {
    padding: 10,
  },
});

export default NoteList;
