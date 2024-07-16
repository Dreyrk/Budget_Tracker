import { ExpenseItemProps } from "@/constants/types/props";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Amount from "./ui/Amount";
import { router } from "expo-router";

export default function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <TouchableOpacity onPress={() => router.push(`/expense/${expense.id}`)} style={styles.container}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.categoriesContainer}>
        {expense.categories &&
          expense.categories.map((category) => (
            <View key={category}>
              <Text style={styles.text}>{category}, </Text>
            </View>
          ))}
      </Text>
      <Amount amount={expense.amount} />
    </TouchableOpacity>
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
    borderWidth: 1,
    borderRadius: 8,
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
