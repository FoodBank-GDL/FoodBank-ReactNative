import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Register,
  Login,
  CampaignDetail,
  Feed,
  Donations,
  CreateCampaign,
  MapScreen,
  Profile,
} from "./src/screens";

import { useAuth } from "./src/contexts/AuthContext";

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { idToken, userId } = useAuth();

  useEffect(() => {
    if (idToken !== "" && userId !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [idToken, userId]);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const PublicStack = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <Register {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

  const PrivateStack = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" options={{ headerShown: false }}>
          {(props) => <Feed {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CreateCampaign" options={{ headerShown: false }}>
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
        <Stack.Screen name="MapScreen" options={{ headerShown: false }}>
          {(props) => <MapScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => <Profile {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CampaignDetail" options={{ headerShown: false }}>
          {(props) => <CampaignDetail {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

  const PublicTab = () => (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" options={{ headerShown: false }} >
          {(props) => <Feed {...props} />}
        </Tab.Screen>
        <Tab.Screen name="MapScreen" options={{ headerShown: false }} >
          {(props) => <MapScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Profile" options={{ headerShown: false }} >
          {(props) => <Profile {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )

  return isLoggedIn === true ? <PrivateStack /> : <PublicTab />;
};

export default Routes;
