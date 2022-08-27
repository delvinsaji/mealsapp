import CategoryList from "./screens/CategoryList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mealsoverview from "./screens/MealsOverView";
import MealDetail from "./screens/MealDetail";
import Favourite from "./screens/Favourites";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="categories"
          component={CategoryList}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Overview"
          component={Mealsoverview}
          options={({ route }) => {
            const catId = route.params.id;
            return {
              title: catId,
            };
          }}
        />
        <Stack.Screen name="Detail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
