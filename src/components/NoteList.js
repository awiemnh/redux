import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setUpdatedNote}
            value={updatedNote}
          />
          <View style={styles.bottonGroup}>
            <TouchableOpacity style={styles.button} onPress={updateNoteHandler}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.buttonText}>Gajadi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    color: "#fff",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fontlist: {
    flex: 1,
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#EB455F",
    textAlign: "center",
    width: 300,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "bottom",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B3467",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 120,
    color: "white",
    fontWeight: 800,
    fontSize: 24,
    borderColor: "#EB455F",
  },
  button: {
    backgroundColor: "#EB455F",
    padding: 10,
    margin: 10,
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
    paddingHorizontal: 12,
    textAlign: "center",
  },
  bottonGroup: {
    padding: 10,
    paddingVertical: 20,
  },
});

export default NoteList;
