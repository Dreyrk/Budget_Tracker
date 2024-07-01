import FormField from "@/components/ui/FormField";
import { Colors } from "@/constants/Colors";
import { InputControlValue } from "@/constants/types/props";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Alert } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";
import { db } from "@/lib/db";
import { storeObjectData } from "@/services/asyncstorage";

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

// GoogleSignin.configure({
//   webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
//   iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
// });

export default function Login() {
  const [user, setUser] = useState<InputControlValue>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const login = async () => {
    setLoading(true);
    const {
      error,
      data: { session },
    } = await db.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (session) {
      storeObjectData("user", session);
    }
    if (error) {
      Alert.alert(error.message);
    } else {
      router.push("/(tabs)/Home");
    }
    setLoading(false);
  };

  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        {formFields.map(({ id, label, placeholder }) => (
          <FormField key={id} id={id} label={label} placeholder={placeholder} value={user} setValue={setUser} />
        ))}
        <TouchableOpacity disabled={loading} style={styles.submitBtn} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => router.push("/Register")} style={styles.linkContainer}>
        <Text style={styles.link}>No account yet ? Register now.</Text>
      </Pressable>
      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => {
          // initiate sign in
        }}
        disabled={false}
      /> */}
      <TouchableOpacity onPress={() => {}}>
        <Text>Continue with Google</Text>
      </TouchableOpacity>
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
