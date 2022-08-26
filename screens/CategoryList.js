import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data";

export default function CategoryList({ navigation }) {
  function List(item) {
    return (
      <TouchableOpacity
        style={[styles.box, { backgroundColor: item.item.color }]}
        onPress={() => {
          navigation.navigate("Overview", {
            id: item.item.id,
            sdad: "sd",
          });
        }}
      >
        <Text style={styles.content}>{item.item.title}</Text>
      </TouchableOpacity>
    );
  }

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
    backgroundColor: "black",
    paddingTop: 20,
  },
  box: {
    flex: 1,
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
