import CategoriesBudget from "@/components/budget/CategoriesBudget";
import GlobalBudget from "@/components/budget/GlobalBudget";
import { StyleSheet, ScrollView } from "react-native";

export default function BudgetScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GlobalBudget />
      <CategoriesBudget />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: "700",
  },
});
