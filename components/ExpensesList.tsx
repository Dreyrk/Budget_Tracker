import { ExpensesListProps } from "@/constants/types/props";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses, loading }: ExpensesListProps) {
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={({ id }) => `item_${id}`}
      renderItem={({ item }) => <ExpenseItem expense={item} />}
    />
    // <View style={styles.container}>
    //   {expenses.map((expense) => (
    //     <ExpenseItem key={expense.id} expense={expense} />
    //   ))}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
});
