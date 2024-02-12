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
      <Text>Test </Text>
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
});

export default App;
