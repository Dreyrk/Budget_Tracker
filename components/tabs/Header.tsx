import { ScrollView, StyleSheet, View } from "react-native";
import { TabsHeaderProps } from "@/constants/types/props";
import Tab from "./Tab";

export default function TabsHeader({ tabs }: TabsHeaderProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        {tabs.map((tab) => (
          <Tab key={tab.title} title={tab.title} onPress={() => {}} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  contentContainer: {
    flexDirection: "row",
    flexBasis: "auto",
  },
});
