import { Text } from "react-native";

export default function Amount({ amount }: { amount: number }) {
  return <Text>{amount}€</Text>;
}
