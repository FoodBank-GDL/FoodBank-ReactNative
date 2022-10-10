import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register, Login, CampaignDetail, Feed } from "./src/screens";

const Stack = createNativeStackNavigator();
export default function App() {
  //Push notifs

  //Global state management

  //Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" options={{ headerShown: false }}>
          {props => <Feed {...props} />}
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
