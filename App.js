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

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { Store } from "./src/store/store";
// import { Provider } from "react-redux";
// import CounterComponent from "./src/components/CounterComponent";

// const App = () => {
//   return (
//     // <Provider store={store}>
//     // <CounterComponent />
//     // </Provider>
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// export default App;

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
