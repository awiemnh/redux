import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Store } from './src/store/store';
// import { Provider } from 'react-redux';
// import CounterComponent from './src/components/CounterComponent'

// const App = () => {
//   return (
//     <Provider store={store}>
//     <CounterComponent />
//     </Provider>
//   )
// }

// export default App;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
