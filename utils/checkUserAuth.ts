import { db } from "@/lib/supabase";
import { getData } from "@/services/asyncstorage";
import { AppState } from "react-native";

const checkUserAuth = async (): Promise<boolean> => {
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      db.auth.startAutoRefresh();
    } else {
      db.auth.stopAutoRefresh();
    }
  });
  const result = getData("login");
  return false;
};

export default checkUserAuth;
