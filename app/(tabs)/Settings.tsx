import { db } from "@/lib/db";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Logout"
        onPress={() => {
          db.auth.signOut();
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
