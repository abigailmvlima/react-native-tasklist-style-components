import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "@/src/views/welcomeScreen";
import { LoginScreen } from "@/src/views/loginScreen";
import { RegisterScreen } from "@/src/views/registerScreen";
import { TaskListScreen } from "@/src/views/taskListScreen";
import { AddTaskScreen } from "@/src/views/addTaskScreen";

const StackNavigator = createStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E6CCFF",
      }}
    >
      <StatusBar
        backgroundColor="#E6CCFF"
        barStyle="dark-content"
        translucent={false}
      />
      <StackNavigator.Navigator initialRouteName="Welcome">
        <StackNavigator.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <StackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <StackNavigator.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <StackNavigator.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ headerShown: false }}
        />
        <StackNavigator.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ headerShown: false }}
        />
      </StackNavigator.Navigator>
    </View>
  );
}
