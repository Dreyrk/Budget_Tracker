import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FormField from "../ui/FormField";
import { useState } from "react";
import { NewExpense } from "@/constants/types/items";
import CustomButton from "../ui/CustomButton";
import create from "@/actions/expenses/create";
import { CreateExpenseModalProps } from "@/constants/types/props";
import DropdownComponent from "../ui/DropdownComponent";

const defaultExpense = {
  title: "",
  amount: 0,
};
export default function CreateModal({ open, setOpen }: CreateExpenseModalProps) {
  const [newExpense, setNewExpense] = useState<NewExpense>(defaultExpense);

  const handleSubmit = async () => {
    const created = await create(newExpense);
    console.log(created);
    if (created) {
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
            <FormField label="Amount" id="amount" value={newExpense} setValue={setNewExpense} />
            <DropdownComponent
              value={newExpense}
              setValue={setNewExpense}
              id="period"
              data={[
                { label: "Daily", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Yearly", value: 3 },
              ]}
              placeholder="Period"
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
});
