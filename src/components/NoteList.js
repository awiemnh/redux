import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, StyleSheet, Button, Modal, TextInput } from "react-native";
import { deleteNote, updateNote } from "../actions/notesActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatedNote, setUpdatedNote] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDelete = (index) => {
    dispatch(deleteNote(index));
  };

  const handleUpdate = (index, updatedNote) => {
    setSelectedIndex(index);
    setUpdatedNote(updatedNote);
    setIsModalVisible(true);
  };

  const updateNoteHandler = () => {
    if (updatedNote.trim() !== "") {
      dispatch(updateNote(selectedIndex, updatedNote));
      setIsModalVisible(false);
    }
  };

  return (
    <View>
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
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setUpdatedNote}
            value={updatedNote}
          />
          <Button title="Update" onPress={updateNoteHandler} />
          <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 5,
  },
});

export default NoteList;
