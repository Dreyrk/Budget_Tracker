import useGetAuthSession from "@/hooks/auth/useGetAuthSession";
import { db } from "@/lib/db";
import { router } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SettingsScreen() {
  const session = useGetAuthSession();
  return (
    <View style={styles.container}>
      <Button
        title="Profile"
        onPress={() => {
          router.push(`/(user)/${session?.user.id}/Profile`);
        }}
      />
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Logout"
        onPress={() => {
          db.auth.signOut();
          router.push("/(auth)/Login");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
  },
});
