import React from "react";
import { Provider } from "react-redux";
import { createStore } from "react-redux";
import noteReducer from "./reducer/notesReducer";
import NoteForm from "./src/components/NoteForm";
import NoteList from "./src/components/NoteList";
import { View } from "react-native";

const store = createStore(notesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <NoteForm />
        <NoteList />
      </View>
    </Provider>
  );
};

export default App;