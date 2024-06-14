import { Colors } from "@/constants/Colors";
import { TabBarLabelProps } from "@/constants/types/props";
import { StyleSheet, Text } from "react-native";

export default function TabBarLabel({ focused, activeColor, label }: TabBarLabelProps) {
  if (focused) {
    return <Text style={[styles.active, { color: activeColor }]}>{label}</Text>;
  } else {
    return <Text style={styles.inactive}>{label}</Text>;
  }
}

const styles = StyleSheet.create({
  active: {
    fontSize: 10,
    fontWeight: "600",
  },
  inactive: {
    fontSize: 10,
    color: "#8E8E8F",
  },
});
