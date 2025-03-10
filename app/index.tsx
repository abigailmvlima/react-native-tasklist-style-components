import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

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
    <StackNavigator.Navigator initialRouteName="Welcome">
      <StackNavigator.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen name="Login" component={LoginScreen} />
      <StackNavigator.Screen name="Register" component={RegisterScreen} />
      <StackNavigator.Screen name="TaskList" component={TaskListScreen} />
      <StackNavigator.Screen name="AddTask" component={AddTaskScreen} />
    </StackNavigator.Navigator>
  );
}
