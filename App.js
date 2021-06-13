import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "./Home";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Globomantics'>
          <Stack.Screen name='Globomantics' component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}