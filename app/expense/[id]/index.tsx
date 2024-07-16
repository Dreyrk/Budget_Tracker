import getExpenseById from "@/actions/expenses/getById";
import getExpenseCategories from "@/actions/expenses/getExpenseCategories";
import { Colors } from "@/constants/Colors";
import { Category, Expense } from "@/constants/types/items";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [expense, setExpense] = useState<Expense | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getData = async () => {
      setExpense(await getExpenseById(Number(id)));
      setCategories(await getExpenseCategories(Number(id)));
    };
    getData();
    navigation.setOptions({
      title: `Détails: ${expense?.title}`,
      headerStyle: {
        backgroundColor: Colors.global.button.primary,
      },
      headerTintColor: Colors.dark.text,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
    return () => {};
  }, [id, expense]);

  return (
    <View>
      <View>
        <Text>Categories</Text>
        <Text>
          {categories?.length
            ? categories.length < 2
              ? categories.map((cat) => cat.title).join(", ")
              : categories.map((cat) => cat.title)[0]
            : "No Category"}
        </Text>
      </View>
    </View>
  );
}
