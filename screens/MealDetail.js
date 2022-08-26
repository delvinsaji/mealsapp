import { View, Text, StyleSheet } from "react-native";
import { Image, ScrollView } from "react-native";

export default function MealDetail({ route }) {
  const data = route.params.item.item;

  return (
    <ScrollView style={{ backgroundColor: "brown" }}>
      <Image source={{ uri: data.imageUrl }} style={styles.image}></Image>
      <Text style={styles.head}>{data.title}</Text>
      <View style={styles.header}>
        <Text style={{ padding: 10, color: "white" }}>
          {data.affordability}
        </Text>
        <Text style={{ padding: 10, color: "white" }}>{data.duration}m</Text>
        <Text style={{ padding: 10, color: "white" }}>{data.complexity}</Text>
      </View>
      <Text
        style={[
          styles.block,
          {
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            margin: 10,
          },
        ]}
      >
        Ingredients
      </Text>
      <View>
        {data.ingredients.map((obj) => (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={[styles.block, styles.block2]}>{obj}</Text>
          </View>
        ))}
      </View>
      <Text
        style={[
          styles.block,
          {
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            margin: 10,
          },
        ]}
      >
        Steps
      </Text>
      {data.steps.map((obj) => (
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.block, styles.block2]}>{obj}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  head: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    color: "brown",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    width: "90%",
  },
  block2: {
    fontSize: 15,
  },
});
