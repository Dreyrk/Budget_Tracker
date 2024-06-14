import { ExpensesListProps } from "@/constants/types/props";
import { StyleSheet, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <View style={styles.container}>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
});
