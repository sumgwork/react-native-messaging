/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  Octicons,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, View } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ChatListScreen from "../screens/ChatListScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatScreen from "../screens/ChatScreen";
import Contacts from "../screens/Contacts";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerShadowVisible: false,
        headerTintColor: Colors[colorScheme].background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          headerShown: true,
          title: "WhatsApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
              }}
            >
              <Octicons name="search" size={20} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={20}
                color="white"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerBackTitle: "Back",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
              }}
            >
              <FontAwesome5 name="video" size={20} color="white" />
              <MaterialIcons name="call" size={20} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={20}
                color="white"
              />
            </View>
          ),
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].tabIconDefault,
          height: 4,
        },
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" size={20} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatListScreen}
        options={{
          title: "Chats",
        }}
      />
      <MainTab.Screen
        name="Status"
        component={ChatListScreen}
        options={{
          title: "Status",
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: "Calls",
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
