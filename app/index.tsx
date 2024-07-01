import useGetAuthSession from "@/hooks/auth/useGetAuthSession";
import { useRootNavigationState, Redirect } from "expo-router";

export default function InitalRouting() {
  const rootNavigationState = useRootNavigationState();
  const session = useGetAuthSession();

  if (!rootNavigationState?.key) return null;

  if (session && session.user) {
    return <Redirect href={"/(tabs)/Home"} />;
  } else {
    return <Redirect href={"/(auth)/Login"} />;
  }
}
