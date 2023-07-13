import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
// import { Text } from 'react-native';
// import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/WelcomeScreen";        
import Login from "./screens/Login";          
import SignUp from "./screens/SignUp";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";
import Home from './screens/Home';

const Stack = createNativeStackNavigator();



export default function App() {

  return (
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dash Board" component={DashBoard} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

