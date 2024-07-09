import { Option } from "@/constants/types/items";
import { View, Text, StyleSheet } from "react-native";

export default function ColorItem({ item }: { item: Option }) {
  return (
    <View style={styles.item}>
      <View style={{ backgroundColor: item.value, height: 18, width: 18, borderRadius: 4, marginRight: 14 }}></View>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
