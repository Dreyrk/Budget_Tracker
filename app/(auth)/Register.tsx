import { router } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, StyleSheet, Alert } from "react-native";
import FormField from "@/components/ui/FormField";
import { Colors } from "@/constants/Colors";
import { InputControlValue } from "@/constants/types/props";
import { db } from "@/lib/supabase";

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
  {
    label: "Confirm Password",
    id: "confirm_password",
    placeholder: "Confirm your password",
  },
];

export default function Register() {
  const [user, setUser] = useState<InputControlValue>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const register = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await db.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  };
  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        {formFields.map(({ id, label, placeholder }) => (
          <FormField key={id} id={id} label={label} placeholder={placeholder} value={user} setValue={setUser} />
        ))}
        <TouchableOpacity disabled={loading} style={styles.submitBtn} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => router.push("/Login")} style={styles.linkContainer}>
        <Text style={styles.link}>Already registered ? Login now.</Text>
      </Pressable>
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
  linkContainer: {
    marginHorizontal: "auto",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  link: {
    color: Colors.global.button,
    textDecorationLine: "underline",
  },
  dividerContainer: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    height: 1,
    flexBasis: 140,
    borderBottomWidth: 1,
    borderBottomColor: "#202020",
  },
  dividerText: {
    flexBasis: 40,
    fontSize: 15,
    fontWeight: "600",
    color: "#202020",
    textAlign: "center",
  },
});
