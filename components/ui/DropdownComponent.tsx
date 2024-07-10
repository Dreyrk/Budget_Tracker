import { Option } from "@/constants/types/items";
import { DropdownComponentProps } from "@/constants/types/props";
import { Controller } from "react-hook-form";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownComponent = ({
  data,
  search,
  placeholder,
  searchPlaceholder,
  onChange,
  value,
  setValue,
  id,
  customRenderItem,
  customStyles,
  control,
}: DropdownComponentProps) => {
  const renderItem = (item: Option) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const defaultOnChange = (item: Option) => {
    if (value[id]) {
      const selectedValue = Array.isArray(value[id]) ? [...new Set([...value[id], item.value])] : item.value;
      setValue({ ...value, [id]: selectedValue });
    } else {
      setValue(item.value);
    }
  };

  if (control) {
    return (
      <Controller
        name={id}
        render={({ field: { value } }) => (
          <Dropdown
            style={[styles.dropdown, customStyles]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search={search}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder || "Select Item"}
            searchPlaceholder={searchPlaceholder || "Search..."}
            value={value}
            onChange={onChange ? onChange : defaultOnChange}
            renderItem={customRenderItem || renderItem}
          />
        )}
      />
    );
  }

  return (
    <Dropdown
      style={[styles.dropdown, customStyles]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={search}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder || "Select Item"}
      searchPlaceholder={searchPlaceholder || "Search..."}
      value={value[id] || value}
      onChange={onChange ? onChange : defaultOnChange}
      renderItem={customRenderItem || renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    width: "100%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
