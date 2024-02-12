import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/notesActions";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";


const NoteForm = () => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      dispatch(addNote(noteText));
      setNoteText(" ");
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type your note here"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
      />
      <View style={styles.bottonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleAddNote}>
          <Text style={styles.buttonText}>Tambah Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 220,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#EB455F",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 24,
    margin: 4,
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
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 12,
    textAlign: "center",
  },
  bottonGroup: {
    padding: 10,
    paddingVertical: 20,
  },
});

export default NoteForm;
