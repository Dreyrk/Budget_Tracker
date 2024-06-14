import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GlobalBudget() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.line}>
        <View>
          <Text style={styles.cardTitle}>$2500</Text>
          <Text style={styles.cardGhostText}>1er mai - 1er juin</Text>
        </View>
        <Pressable>
          <Text>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  cardText: {},
  cardButton: {
    color: Colors.global.button,
  },
  cardGhostText: {
    fontWeight: "600",
    fontSize: 14,
    color: Colors.global.ghostText,
  },
});
