import { FormFieldProps } from "@/constants/types/props";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function FormField({ label, id, value, setValue, placeholder }: FormFieldProps) {
  const handleChange = (text: string) => {
    setValue({ ...value, [id]: text });
  };
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        id={id}
        value={value[id]}
        onChangeText={handleChange}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
