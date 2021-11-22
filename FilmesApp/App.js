import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Filmes from './src/Filmes';
import Detalhe from './src/Detalhe';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
       <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Filmes" options={{headerShown: false}}  component={Filmes} />
        <Stack.Screen name="Detalhe" options={{headerShown: false}}  component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}