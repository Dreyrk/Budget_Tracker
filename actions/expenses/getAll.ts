import { Expense } from "@/constants/types/items";
import { db } from "@/lib/db";
import { getObjectData } from "@/services/asyncstorage";

async function getAllExpenses(): Promise<Expense[] | []> {
  const { user } = await getObjectData("session");
  if (user.id) {
    const { data, error } = await db.from("expenses").select("*").eq("user_id", user.id);
    if (!error) {
      return (data as Expense[]) || [];
    } else {
      console.error(error);
      return [];
    }
  } else {
    throw new Error("No user id");
  }
}

export default getAllExpenses;
