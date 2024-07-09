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

const defaultExpense = {
  title: "",
  amount: 0,
  categories: [],
};
export default function CreateModal({ open, setOpen }: CreateExpenseModalProps) {
  const [newExpense, setNewExpense] = useState<NewExpense>(defaultExpense);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getData = async () => {
      setCategories(await getAllCategories());
    };
    getData();
  }, []);

  const handleSubmit = async () => {
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
            />
            <DropdownComponent
              value={newExpense}
              setValue={setNewExpense}
              id="categories"
              data={categories.map(({ title, id }) => ({ label: title, value: id }))}
              placeholder="Categories"
            />
            <FormField label="Description" id="description" value={newExpense} setValue={setNewExpense} />
          </View>
          <View style={styles.modalFooter}>
            <CustomButton text="Create" variant="success" onPress={handleSubmit} />
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
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  // color picker
  sliderTitle: {
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 4,
  },
  sliderStyle: {
    height: 300,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  previewTxtContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
  },
  swatchesContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 10,
  },
  swatchStyle: {
    borderRadius: 20,
    height: 30,
    width: 30,
    margin: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});
