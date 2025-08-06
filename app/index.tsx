import { NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "@/screens/MainScreen";
import RouteScreen from "@/screens/RouteScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Route" component={RouteScreen}/>
      </Stack.Navigator>
    </NavigationIndependentTree>
  )
}