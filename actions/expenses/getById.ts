import { Expense } from "@/constants/types/items";
import { db } from "@/lib/db";
import { getObjectData } from "@/services/asyncstorage";

async function getExpenseById(id: number): Promise<Expense | null> {
  const { user } = await getObjectData("session");
  if (user.id) {
    try {
      const { data, error } = await db.from("expenses").select("*").eq("id", id);
      if (!error) {
        if (data[0].user_id === user.id) {
          return data[0] as Expense;
        } else {
          console.error("Unauthorized");
          return null;
        }
      } else {
        console.error(error);
        return null;
      }
    } catch (e) {
      throw new Error(`Failed to get expense ${id}: ${(e as Error).message}`);
    }
  } else {
    throw new Error("No user id");
  }
}

export default getExpenseById;
