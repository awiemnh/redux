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

  const handleDelete = (index) => {
    dispatch(deleteNote(index));
  };

  const handleUpdate = (index, updatedNote) => {
    const newNote = prompt("Enter updated note:");
    if (newNote !== null) {
      dispatch(updateNote(index, newNote));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Notes:</Text>

      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.fontlist}>{item}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Delete"
                onPress={() => handleDelete(index)}
                color="#EB455F"
              />
              <Button
                title="Update"
                onPress={() => handleUpdate(index, item)}
                color="#EB455F"
              />
            </View>
          </View>
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
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fontlist: {
    flex: 1,
    color: "#EB455F",
    fontWeight: "700",
    fontSize: 18,
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: "#EB455F",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NoteList;
