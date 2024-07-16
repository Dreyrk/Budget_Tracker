import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FormField from "../ui/FormField";
import { useEffect, useState } from "react";
import { NewExpense, Category } from "@/constants/types/items";
import CustomButton from "../ui/CustomButton";
import create from "@/actions/expenses/create";
import { CreateExpenseModalProps } from "@/constants/types/props";
import DropdownComponent from "../ui/DropdownComponent";
import { periods } from "@/constants";
import getAllCategories from "@/actions/users/getAllCategories";
import CategoriesDropdown from "./CategoriesDropdown";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseSchema, expenseSchema } from "@/actions/schemas/expenseSchema";

const defaultExpense = {
  title: "",
  amount: 0,
  categories: [],
};
export default function CreateModal({ open, setOpen }: CreateExpenseModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const methods = useForm<ExpenseSchema>({
    defaultValues: defaultExpense,
    resolver: zodResolver(expenseSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const getData = async () => {
      setCategories(await getAllCategories());
    };
    getData();
  }, []);

  const createNewExpense = async (newExpense: ExpenseSchema) => {
    const created = await create(newExpense);
    if (created) {
      setOpen(false);
    } else {
      Alert.alert("Something wrong... Try again later");
    }
  };
  return (
    <Modal animationType="slide" visible={open} transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>New Expense</Text>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <AntDesign name="close" size={24} color="#d00000" />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalBody}>
            <FormProvider {...methods}>
              <FormField control={control as any} label="Title" id="title" />
              <FormField control={control as any} label="Amount" id="amount" type="decimal-pad" />
              <DropdownComponent
                id="period"
                data={periods}
                placeholder="Period"
                customStyles={{ marginLeft: 0 }}
                control={control as any}
              />
              <View style={{ paddingVertical: 20 }}>
                <CategoriesDropdown categories={categories} control={control as any} />
              </View>
              <FormField control={control as any} multiline={true} lines={10} label="Description" id="description" />
            </FormProvider>
          </ScrollView>
          <View style={styles.modalFooter}>
            <CustomButton text="Create" variant="success" onPress={handleSubmit(createNewExpense)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBody: {
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalFooter: {
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
