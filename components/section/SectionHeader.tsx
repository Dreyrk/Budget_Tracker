import { View, Text, StyleSheet } from "react-native";
import DropdownComponent from "../ui/DropdownComponent";
import { SectionHeaderProps } from "@/constants/types/props";

export default function SectionHeader({ title, options }: SectionHeaderProps) {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.title}>{title}</Text>
      {options?.length && (
        <View style={styles.pickerContainer}>
          <DropdownComponent data={options} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
