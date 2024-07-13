import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1, { message: "Name your expense" }),
  amount: z.number().min(0.1, { message: "Enter expense amount" }),
  description: z.string().optional(),
  categories: z.array(z.number()).optional(),
  date: z.string().optional(),
  period: z.number().optional(),
});

export type ExpenseSchema = z.infer<typeof expenseSchema>;
