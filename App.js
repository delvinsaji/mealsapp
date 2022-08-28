import CategoryList from "./screens/CategoryList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mealsoverview from "./screens/MealsOverView";
import MealDetail from "./screens/MealDetail";
import Favourite from "./screens/Favourites";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawerfunction() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="categories" component={CategoryList}></Drawer.Screen>
      <Drawer.Screen name="Favourites" component={Favourite}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="categories"
          component={Drawerfunction}
          options={{ headerShown: false }}
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
