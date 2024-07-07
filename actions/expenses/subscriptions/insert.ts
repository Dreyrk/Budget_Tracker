import { Expense } from "@/constants/types/items";
import { db } from "@/lib/db";

function onInsert(setExpenses: React.Dispatch<React.SetStateAction<any>>) {
  try {
    const onInsertSubscription = db
      .channel("db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "expenses",
        },
        (payload) => setExpenses((prevExpenses: Expense[]) => [payload.new, ...prevExpenses])
      )
      .subscribe();
    return onInsertSubscription;
  } catch (e) {
    throw new Error(`Something wrong with insert subscription: ${(e as Error).message}`);
  }
}

export default onInsert;
