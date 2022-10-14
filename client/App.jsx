import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register, Login, CampaignDetail, Feed } from "./src/screens";
import Donations from "./src/screens/Donations";
import CreateCampaign from "./src/screens/CreateCampaign/CreateCampaign";
import MapScreen from "./src/screens/MapScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  //Push notifs

  //Global state management

  //Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" options={{ headerShown: false }}>
          {(props) => <Feed {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MapScreen" options={{ headerShown: false }}>
          {(props) => <MapScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="CreateCampaign"
          options={{
            headerTitle: "Crea una campaña",
            headerStyle: {
              textAlign: "center",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
            headerTitleAlign: "center",
          }}
        >
          {(props) => <CreateCampaign {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Donations"
          options={{
            headerTitle: "Donaciones",
            headerStyle: {
              textAlign: "center",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
            headerTitleAlign: "center",
          }}
        >
          {(props) => <Donations {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => <Register {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CampaignDetail" options={{ headerShown: false }}>
          {(props) => <CampaignDetail {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
