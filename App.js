import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home';
import ScannerScreen from './src/Scanner';
import FormScreen from './src/Form';
import ListScreen from './src/List';
import { ListStore } from './src/components/context/Context';

const Stack = createStackNavigator();

export default function App() {

  return (
    <ListStore>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Escanear" component={ScannerScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListStore>
  );
}
