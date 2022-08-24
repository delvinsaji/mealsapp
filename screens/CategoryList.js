import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data";

function List(item) {
  return (
    <View style={styles.box}>
      <Text style={styles.content}>{item.item.title}</Text>
    </View>
  );
}

export default function CategoryList() {
  return (
    <FlatList
      style={styles.boxmain}
      data={CATEGORIES}
      renderItem={List}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  boxmain: {
    width: "100%",
  },
  box: {
    flex: 1,
    borderWidth: 1,
    height: 160,
    margin: 16,
    elevation: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
  },
});
