import { View, Text, StyleSheet } from "react-native";
import { Image, ScrollView } from "react-native";

export default function MealDetail({ route }) {
  const data = route.params.item.item;
  console.log(data);
  return (
    <ScrollView style={{ backgroundColor: "brown" }}>
      <Image source={{ uri: data.imageUrl }} style={styles.image}></Image>
      <Text style={{ textAlign: "center", color: "white" }}>{data.title}</Text>
      <View style={styles.header}>
        <Text style={{ padding: 10, color: "white" }}>
          {data.affordability}
        </Text>
        <Text style={{ padding: 10, color: "white" }}>{data.duration}m</Text>
        <Text style={{ padding: 10, color: "white" }}>{data.complexity}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  head: {
    fontWeight: "bold",
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
