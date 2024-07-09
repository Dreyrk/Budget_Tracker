import { Expense, Message, NewExpense } from "@/constants/types/items";
import { db } from "@/lib/db";
import { getObjectData } from "@/services/asyncstorage";

async function create(newExpense: NewExpense): Promise<Message> {
  try {
    const { user } = await getObjectData("session");
    if (!user || !user.id) {
      throw new Error("User session not found");
    }
    console.log(newExpense);
    const categoryIds = newExpense.categories;
    delete newExpense.categories;

    const { error, data } = await db.from("expenses").insert({
      ...newExpense,
      user_id: user.id,
    });

    if (categoryIds?.length && data) {
      const insertData = categoryIds.map((categoryId) => ({
        category_id: categoryId,
        expense_id: (data[0] as Expense).id,
      }));

      const { error: categoryInsertError } = await db.from("category_expense").insert(insertData);
      if (categoryInsertError) {
        console.error(`Error linking categories to expense: ${categoryInsertError}`);
        return { success: false, message: categoryInsertError };
      } else {
        return { success: true, message: "Created" };
      }
    }

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
