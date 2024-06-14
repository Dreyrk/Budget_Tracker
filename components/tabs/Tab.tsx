import { TabProps } from "@/constants/types/props";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Tab: React.FC<TabProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
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
});

export default Tab;
