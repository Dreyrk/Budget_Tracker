import { Category } from "@/constants/types/items";
import { Controller, Control, FieldValues, useFormContext } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

const CategoriesDropdown = ({
  categories = [],
  control,
}: {
  categories: Category[];
  control: Control<FieldValues>;
}) => {
  const { setValue } = useFormContext();

  const handleSelect = (selectedItems: string[]) => {
    const selected = [...new Set(selectedItems.map(Number))];
    setValue("categories", selected);
  };

  return (
    <Controller
      control={control}
      name="categories"
      render={({ field: { value } }) => (
        <MultiSelect
          data={categories.map((el) => ({ ...el, id: el.id.toString() }))}
          search={true}
          labelField="title"
          valueField="id"
          placeholder="Select Categories"
          searchPlaceholder="Search..."
          value={value}
          onChange={handleSelect}
          renderItem={(item, selected) => (
            <View style={[styles.item, selected && styles.selectedItem]}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
          selectedStyle={styles.selected}
          selectedTextStyle={styles.selectedText}
          style={styles.dropdown}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  dropdown: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
  },
  selectedItem: {
    backgroundColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  selectedContainer: {
    marginTop: 20,
  },
  selectedText: {
    fontSize: 16,
    color: "#202020",
  },
});

export default CategoriesDropdown;
