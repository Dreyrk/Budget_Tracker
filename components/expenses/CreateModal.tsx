import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
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
import { useForm } from "react-hook-form";

const defaultExpense = {
  title: "",
  amount: 0,
  categories: [],
};
export default function CreateModal({ open, setOpen }: CreateExpenseModalProps) {
  const [newExpense, setNewExpense] = useState<NewExpense>(defaultExpense);
  const [categories, setCategories] = useState<Category[]>([]);

  const { control, handleSubmit } = useForm();

  useEffect(() => {
    const getData = async () => {
      setCategories(await getAllCategories());
    };
    getData();
  }, []);

  const createNewExpense = async () => {
    const created = await create(newExpense);
    if (created) {
      setNewExpense(defaultExpense);
      setOpen(false);
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
          <View style={styles.modalBody}>
            <FormField label="Title" id="title" value={newExpense} setValue={setNewExpense} />
            <FormField label="Amount" id="amount" type="decimal-pad" value={newExpense} setValue={setNewExpense} />
            <DropdownComponent
              value={newExpense}
              setValue={setNewExpense}
              id="period"
              data={periods}
              placeholder="Period"
              customStyles={{ marginLeft: 0 }}
              control={control}
            />
            <View style={{ paddingVertical: 20 }}>
              <CategoriesDropdown categories={categories} control={control} />
            </View>
            <FormField
              multiline={true}
              lines={10}
              label="Description"
              id="description"
              value={newExpense}
              setValue={setNewExpense}
            />
          </View>
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
