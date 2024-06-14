import useCheckUserAuth from "@/hooks/auth/useCheckUserAuth";
import { useRootNavigationState, Redirect } from "expo-router";

export default function InitalRouting() {
  const rootNavigationState = useRootNavigationState();
  const isLogged = useCheckUserAuth();

  if (!rootNavigationState?.key) return null;

  console.log(isLogged);

  if (isLogged) {
    return <Redirect href={"/(tabs)/Home"} />;
  } else {
    return <Redirect href={"/(auth)/Login"} />;
  }
}
