import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contsnats from 'expo-constants'
import {Home} from './screens/Home'
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="create" component={CreateEmployee} />
          <stack.Screen name="Profile" component={Profile} />
        </stack.Navigator>
     {/* <Home /> */}
     {/* <CreateEmployee />*/} 
     
      <StatusBar style="auto" />
    </View>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
