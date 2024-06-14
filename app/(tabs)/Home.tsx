import ExpensesList from "@/components/ExpensesList";
import TabsHeader from "@/components/tabs/Header";
import { Expense, Tab } from "@/constants/types/items";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import DropdownComponent from "@/components/ui/DropdownComponent";
import SectionHeader from "@/components/section/SectionHeader";

const expenses: Expense[] = Array.from({ length: 20 }, (v, i) => {
  return {
    id: i,
    title: "Burger",
    amount: 12,
    description: "Miam miam",
    categories: ["Food", "Other", "Fun", "Test", "Category"],
  };
});

const periodsOptions = [
  { label: "Daily", value: "daily" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export default function HomeScreen() {
  const tabs: Tab[] = [
    { title: "Tab 1", href: "/" },
    { title: "Tab 2", href: "/" },
    { title: "Tab 3", href: "/" },
  ];
  return (
    <View style={styles.page}>
      <TabsHeader tabs={tabs} />
      <ScrollView style={styles.container}>
        <SectionHeader title="Expenses" options={periodsOptions} />
        <ExpensesList expenses={expenses} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
  container: {
    height: "90%",
    padding: 20,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  pickerContainer: {
    width: 180,
  },
});
