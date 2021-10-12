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
const myOptions ={ title:"My Sweet Home",
headerTintColor:"white",
headerStyle: {
  backgroundColor:"#006aff"
  }
}

function App() {
  return (
    <View style={styles.container}>
        <stack.Navigator>
          <stack.Screen 
          name="Home" 
          component={Home} 
          options={myOptions}
           />
          <stack.Screen 
            name="Create" 
            component={CreateEmployee} 
            options={{...myOptions, title:"Create Employee"}}
            />
          <stack.Screen 
            name="Profile" 
            component={Profile}
            options={{...myOptions, title:"Profile"}}

            />
        </stack.Navigator>
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
