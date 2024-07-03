import { ScrollView, StyleSheet, View } from "react-native";
import { TabsHeaderProps } from "@/constants/types/props";
import Tab from "./Tab";
import CustomButton from "../ui/CustomButton";
import { useState } from "react";

export default function TabsHeader({ tabs }: TabsHeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          {tabs.map((tab) => (
            <Tab key={tab.title} title={tab.title} onPress={() => {}} />
          ))}
        </ScrollView>
      </View>
      <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "center" }}>
        <CustomButton onPress={handleOpen} text="New +" variant="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    flexBasis: "auto",
  },
});
