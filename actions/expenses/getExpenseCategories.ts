import { Category } from "@/constants/types/items";
import { db } from "@/lib/db";

async function getExpenseCategories(id: number): Promise<Category[] | []> {
  const { data, error } = await db.from("category_expense").select("category_id").eq("expense_id", id);
  if (!error) {
    console.log(data);
    return data as Category[];
  } else {
    console.error(`Error while getting expense categories: ${error.message}`);
    return [];
  }
}

export default getExpenseCategories;
