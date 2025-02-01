import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appdrawer from './src/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
            <Appdrawer/>
    </NavigationContainer>
    </Provider>
    
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
