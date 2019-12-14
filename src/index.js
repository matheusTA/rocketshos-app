import React from 'react';
import '~/config/ReactotronConfig';
import 'react-native-gesture-handler';
import { ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from '~/routes';
import background from './assets/images/background.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <ImageBackground
    source={background}
    resizeMode="cover"
    style={styles.container}
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </ImageBackground>
);

export default App;
