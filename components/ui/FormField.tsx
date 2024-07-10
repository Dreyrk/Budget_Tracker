import { FormFieldProps } from "@/constants/types/props";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export default function FormField({
  label,
  id,
  value,
  setValue,
  placeholder,
  type,
  multiline,
  lines,
  control,
}: FormFieldProps) {
  const handleChange = (text: string) => {
    setValue({ ...value, [id]: text });
  };
  if (control) {
    return (
      <Controller
        control={control}
        name={id}
        render={({ field: { value } }) => (
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              secureTextEntry={id.includes("password")}
              style={styles.input(multiline)}
              id={id}
              value={value[id]}
              onChangeText={handleChange}
              placeholder={placeholder}
              autoCapitalize="none"
              keyboardType={type || "default"}
              multiline={multiline}
              numberOfLines={lines}
            />
          </View>
        )}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          secureTextEntry={id.includes("password")}
          style={styles.input(multiline)}
          id={id}
          value={value[id]}
          onChangeText={handleChange}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={type || "default"}
          multiline={multiline}
          numberOfLines={lines}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: (multiline: boolean) => ({
    height: multiline ? 200 : 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: "top",
  }),
});
