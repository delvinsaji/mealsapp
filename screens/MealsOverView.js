import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { CATEGORIES, MEALS } from "../data";
import { useState, useEffect } from "react";

export default function Mealsoverview({ route, navigation }) {
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(route.params.id) >= 0;
  });
  const id = route.params.id;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == id
    ).title;

    navigation.setOptions({ title: categoryTitle });
  });

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={(item) => {
        return (
          <TouchableOpacity style={style.x}>
            <Image
              source={{ uri: item.item.imageUrl }}
              style={style.image}
            ></Image>
            <View style={style.te}>
              <Text style={{ textAlign: "center" }}>{item.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
}

const style = StyleSheet.create({
  image: {
    width: "80%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  te: {
    backgroundColor: "white",
    width: "80%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  x: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
