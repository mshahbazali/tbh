import { View, Text } from 'react-native'
import React from 'react'
import { Start, Login, GenderSelector } from './src/Screen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Public } from './src/Config/Navigation';
export default function App() {
  return (
    <NavigationContainer>
      <Public />
    </NavigationContainer>
  )
}