import { NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "@/screens/MainScreen";
import RouteScreen from "@/screens/RouteScreen";
import SettingScreen from "@/screens/SettingScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Route" component={RouteScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Settings" component={SettingScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationIndependentTree>
  )
}