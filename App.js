import { StyleSheet, View, Text } from "react-native";
import CategoryList from "./screens/CategoryList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mealsoverview from "./screens/MealsOverView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" component={CategoryList} />
        <Stack.Screen name="Overview" component={Mealsoverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
