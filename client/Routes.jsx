import { useEffect, useState } from "react";
import { Platform, Vibration } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';

import { IconE, IconOct, IconFA5 } from "./lib/icons";

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
import Donate from "./src/screens/Donate/Donate";

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
  const Stack = createNativeStackNavigator()
  const FeedStack = createNativeStackNavigator();
  const MapStack = createNativeStackNavigator();

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

  const FeedScreens = () => (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" options={{ headerShown: false }}>
        {(props) => <Feed {...props} />}
      </FeedStack.Screen>
      <FeedStack.Screen name="CampaignDetail" options={{ headerShown: false }}>
        {(props) => <CampaignDetail {...props} />}
      </FeedStack.Screen>
      <FeedStack.Screen name="CreateCampaign" options={{
        headerTitle: "Crear campaña",
        headerStyle: {
          textAlign: "center",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
        headerTitleAlign: "center",
      }}>
        {(props) => <CreateCampaign {...props} />}
      </FeedStack.Screen>
      <FeedStack.Screen
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
      </FeedStack.Screen>
      <FeedStack.Screen name="CreateDonation" options={{
        headerTitle: "Donar",
        headerStyle: {
          textAlign: "center",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
        headerTitleAlign: "center",
      }}>
        {(props) => <Donate {...props} />}
      </FeedStack.Screen>
    </FeedStack.Navigator >
  )

  const MapScreens = () => (
    <MapStack.Navigator>
      <MapStack.Screen name="MapScreen" options={{ headerShown: false }}>
        {(props) => <MapScreen {...props} />}
      </MapStack.Screen>
      <MapStack.Screen name="CampaignDetail" options={{ headerShown: false }}>
        {(props) => <CampaignDetail {...props} />}
      </MapStack.Screen>
      <MapStack.Screen
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
      </MapStack.Screen>
      <MapStack.Screen name="CreateDonation" options={{
        headerTitle: "Donar",
        headerStyle: {
          textAlign: "center",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
        headerTitleAlign: "center",
      }}>
        {(props) => <Donate {...props} />}
      </MapStack.Screen>
    </MapStack.Navigator>
  )

  const PrivateTab = () => (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => (Platform.OS === 'ios' ? {
          tabBarStyle: {
            height: 80,
            backgroundColor: 'orange',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'FeedScreens') {
              return <IconOct name={"home"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
            } else if (route.name === 'MapScreens') {
              return <IconE name={"map"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
            }
            else if (route.name === 'Profile') {
              return <IconFA5 name={"user"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
            }
          },
          tabBarShowLabel: false
        } :
          {
            tabBarStyle: {
              height: 60,
              backgroundColor: 'orange',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'FeedScreens') {
                return <IconOct name={"home"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
              } else if (route.name === 'MapScreens') {
                return <IconE name={"map"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
              }
              else if (route.name === 'Profile') {
                
                return <IconFA5 name={"user"} size={focused ? 25 : 20} color={focused ? "white" : "#B17010"} />;
              }              
            },
            tabBarShowLabel: false
          }
        )}

      >
        <Tab.Screen name="FeedScreens" options={{ headerShown: false }} component={FeedScreens} listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          },
        })} />
        <Tab.Screen name="MapScreens" options={{ headerShown: false }} component={MapScreens} listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          },
        })} />
        <Tab.Screen name="Profile" options={{ headerShown: false }} listeners={() => ({
          tabPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          },
        })}>
          {(props) => <Profile {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )

  return isLoggedIn === true ? <PrivateTab /> : < PublicStack />;
};

export default Routes;
