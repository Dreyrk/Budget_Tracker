import { ExpensesListProps } from "@/constants/types/props";
import { ActivityIndicator, FlatList } from "react-native";
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
  );
}
