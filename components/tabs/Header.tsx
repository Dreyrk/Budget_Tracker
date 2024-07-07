import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TabsHeaderProps } from "@/constants/types/props";
import Tab from "./Tab";
import CustomButton from "../ui/CustomButton";
import CreateModal from "../expenses/CreateModal";

export default function TabsHeader({ tabs }: TabsHeaderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleFilter = () => {
    //TO DO: set filter selected and apply selected style to the tab
    setSelected("");
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          {tabs.map((tab) => (
            <Tab key={tab.title} selected={selected} title={tab.title} onPress={handleFilter} />
          ))}
        </ScrollView>
      </View>
      <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "center" }}>
        <CustomButton onPress={handleOpen} text="New" variant="primary">
          <AntDesign name="plus" size={20} color="#fff" />
        </CustomButton>
      </View>
      <CreateModal open={open} setOpen={setOpen} />
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
