import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
          <Stack.Screen
            name="Form"
            component={FormScreen}
            options={{ title: "Formulario" }}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={({ navigation }) => ({
              title: 'Lista',
              headerStyle: { backgroundColor: "#ffffff", elevation: null, shadowColor: "transparent" },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: "20%", width: "150%" }}
                  onPress={() => navigation.navigate("Home")} >
                  <Text style={{ fontSize: 15 }}>Home</Text>
                </TouchableOpacity>
              ),
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListStore>
  );
}
