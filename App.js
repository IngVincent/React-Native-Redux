import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contsnats from 'expo-constants'
import {Home} from './screens/Home'
import CreateEmployee from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Home /> */}
     <CreateEmployee />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: Contsnats.statusBarHeight,
  },
});
