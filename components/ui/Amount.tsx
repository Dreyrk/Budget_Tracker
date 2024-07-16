import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Amount({ amount, type }: { amount: number; type?: "income" | "expense" }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4 }}>
      {type === "income" ? (
        <AntDesign name="plus" size={16} color="black" />
      ) : (
        <AntDesign name="minus" size={16} color="black" />
      )}
      <Text>{amount}</Text>
      <Text>€</Text>
    </View>
  );
}
