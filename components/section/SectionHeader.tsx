import { View, Text, StyleSheet } from "react-native";
import DropdownComponent from "../ui/DropdownComponent";
import { SectionHeaderProps } from "@/constants/types/props";
import { useState } from "react";

export default function SectionHeader({ title, options }: SectionHeaderProps) {
  const [period, setPeriod] = useState<number>(0);
  return (
    <View style={styles.listHeader}>
      <Text style={styles.title}>{title}</Text>
      {options?.length && (
        <View style={styles.pickerContainer}>
          <DropdownComponent id="period" value={period} setValue={setPeriod} data={options} />
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
