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
    if (value && setValue) {
      setValue({ ...value, [id]: text });
    } else {
      return;
    }
  };
  if (control) {
    return (
      <Controller
        control={control}
        name={id}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              secureTextEntry={id.includes("password")}
              style={styles.input(multiline)}
              id={id}
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              autoCapitalize="none"
              keyboardType={type || "default"}
              multiline={multiline}
              numberOfLines={lines}
            />
            {error && error?.message && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />
    );
  } else if (value && setValue) {
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
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          secureTextEntry={id.includes("password")}
          style={styles.input(multiline)}
          id={id}
          value={"None"}
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
  error: {
    margin: 0,
    marginTop: -10,
    marginBottom: 10,
    paddingLeft: 10,
    color: "#d00000",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "300",
  },
});
