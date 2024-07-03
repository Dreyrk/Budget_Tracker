import { NewExpense } from "@/constants/types/items";
import { db } from "@/lib/db";
import { getObjectData } from "@/services/asyncstorage";

async function create(newExpense: NewExpense) {
  const { user } = await getObjectData("session");
  console.log(user.id);
  const { data, error } = await db.from("expenses").insert({
    ...newExpense,
    user_id: user.id,
  });

  console.log(data);

  if (!error) {
    return false;
  } else {
    return true;
  }
}

export default create;
