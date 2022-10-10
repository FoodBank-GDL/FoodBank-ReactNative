import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Feed from "./src/screens/Feed"
import Donations from "./src/screens/Donations";

const Stack = createNativeStackNavigator();
export default function App() {
  //Push notifs

  //Global state management

  //Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Feed" options={{ headerShown: false }}>
          {props => <Feed {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Donations"
          options={{
            headerTitle: "Donaciones",
            headerStyle: {
              textAlign: "center"
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
            headerTitleAlign: 'center'
          }}>
          {props => <Donations {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MapScreen" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => <Register {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
