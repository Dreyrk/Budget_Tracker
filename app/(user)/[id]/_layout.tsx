import { Stack } from "expo-router";

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen name="Profile" options={{ headerShown: false }} />
      <Stack.Screen name="Tab 2" options={{ headerShown: false }} />
    </Stack>
  );
}
