import { db } from "@/lib/supabase";
import { getObjectData } from "@/services/asyncstorage";
import { AppState } from "react-native";

const checkUserAuth = async (): Promise<boolean> => {
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      db.auth.startAutoRefresh();
    } else {
      db.auth.stopAutoRefresh();
    }
  });
  const isAuth = getObjectData("user") !== null;
  return isAuth;
};

export default checkUserAuth;
