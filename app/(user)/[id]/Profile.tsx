import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Hello user {id}</Text>
    </View>
  );
}
