import { Message, NewExpense } from "@/constants/types/items";
import { db } from "@/lib/db";
import { getObjectData } from "@/services/asyncstorage";

async function create(newExpense: NewExpense): Promise<Message> {
  try {
    const { user } = await getObjectData("session");
    if (!user || !user.id) {
      throw new Error("User session not found");
    }

    const { error } = await db.from("expenses").insert({
      ...newExpense,
      user_id: user.id,
    });

    if (error) {
      console.error("Error inserting expense:", error);
      return { success: false, message: error };
    }

    return { success: true, message: "Created" };
  } catch (e) {
    console.error("Unexpected error:", e);
    return { success: false, message: (e as Error).message };
  }
}

export default create;
