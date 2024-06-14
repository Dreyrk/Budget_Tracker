import { ExpenseItemProps } from "@/constants/types/props";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Amount from "./ui/Amount";

export default function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.categoriesContainer}>
        {expense.categories.map((category) => (
          <Pressable onPress={() => console.log("pressed ", category)} key={category}>
            <Text style={styles.text}>{category}, </Text>
          </Pressable>
        ))}
      </Text>
      <Amount amount={expense.amount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "italic",
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: "row",
    maxWidth: "30%",
  },
});
