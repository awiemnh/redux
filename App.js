import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import notesReducer from "./src/reducers/notesReducer";
import NoteForm from "./src/components/NoteForm";
import NoteList from "./src/components/NoteList";
import { View, StyleSheet } from "react-native";

const store = createStore(notesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NoteForm />
        <NoteList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 220,
  },
});

export default App;
