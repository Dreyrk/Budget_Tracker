import FormField from "@/components/ui/FormField";
import { Colors } from "@/constants/Colors";
import { InputControlValue } from "@/constants/types/props";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const formFields: InputControlValue[] = [
  {
    label: "Email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    id: "password",
    placeholder: "Enter your password",
  },
];

export default function Login() {
  const [user, setUser] = useState<InputControlValue>({ email: "", password: "" });
  const login = () => {};
  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        {formFields.map(({ id, label, placeholder }) => (
          <FormField key={id} id={id} label={label} placeholder={placeholder} value={user} setValue={setUser} />
        ))}
        <TouchableOpacity style={styles.submitBtn} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  titleContainer: {
    marginTop: 60,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: "auto",
  },
  formContainer: {
    padding: 5,
  },
  submitBtn: {
    backgroundColor: Colors.global.button,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
