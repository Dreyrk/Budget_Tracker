import { TabProps } from "@/constants/types/props";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Tab: React.FC<TabProps> = ({ title, onPress, selected }) => {
  return (
    <TouchableOpacity style={title === selected ? styles.selected : styles.tabItem} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    marginHorizontal: 4,
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  selected: {
    marginHorizontal: 4,
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: "#d00000",
  },
});

export default Tab;
