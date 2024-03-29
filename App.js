import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import notesReducer from "./src/reducers/notesReducer";
import NoteForm from "./src/components/NoteForm";
import NoteList from "./src/components/NoteList";
import { View, StyleSheet, Text } from "react-native";

const store = createStore(notesReducer);

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Test </Text>
      <Provider store={store}>
        <View>
          <NoteForm />
          <NoteList />
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 220,
    backgroundColor: "#2B3467",
  },
  judul: {
    fontWeight: "800",
    color: "white",
    fontSize: 32,
    padding: 24,
  },
});

export default App;
