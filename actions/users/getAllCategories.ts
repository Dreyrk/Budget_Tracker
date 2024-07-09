import { Category } from "@/constants/types/items";
import { db } from "@/lib/db";

async function getAllCategories(userId?: string): Promise<Category[]> {
  try {
    const { data, error } = await db.from("category").select("*");
    if (!error) {
      return (data as Category[]) || [];
    } else {
      console.error(error);
      return [];
    }
  } catch (e) {
    throw new Error(`Cannot get all categories: ${(e as Error).message}`);
  }
}

export default getAllCategories;
