import ExpensesList from "@/components/ExpensesList";
import TabsHeader from "@/components/tabs/Header";
import { Expense, Tab } from "@/constants/types/items";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SectionHeader from "@/components/section/SectionHeader";
import getAllExpenses from "@/actions/expenses/getAll";
import { useEffect, useState } from "react";

// const expenses: Expense[] = Array.from({ length: 20 }, (v, i) => {
//   return {
//     id: i,
//     title: "Burger",
//     amount: 12,
//     description: "Miam miam",
//     categories: ["Food", "Other", "Fun", "Test", "Category"],
//     date: "01/01/2000",
//     user_id: "1",
//   };
// });

const periodsOptions = [
  { label: "Daily", value: "daily" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const getData = async () => {
    try {
      setLoading(true);
      setExpenses(await getAllExpenses());
    } catch (e) {
      console.error(`failed to fetch data: ${(e as Error).message}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const tabs: Tab[] = [
    { title: "Tab 1", href: "/" },
    { title: "Tab 2", href: "/" },
    { title: "Tab 3", href: "/" },
  ];
  return (
    <View style={styles.page}>
      <TabsHeader tabs={tabs} />
      <View style={styles.container}>
        <SectionHeader title="Expenses" options={periodsOptions} />
        <ExpensesList loading={loading} expenses={expenses} />
      </View>
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
