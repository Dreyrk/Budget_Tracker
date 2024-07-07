import { PostgrestError } from "@supabase/supabase-js";

export type Tab = {
  title: string;
  href: string;
};

export type Expense = {
  id: number;
  title: string;
  amount: number;
  description?: string;
  categories?: string[];
  user_id: string;
  date: string;
  period?: number;
};

export type NewExpense = {
  title: string;
  amount: number;
  color?: string;
  description?: string;
  categories?: string[];
  date?: string;
  period?: number;
};

export interface Message {
  success: boolean;
  message: PostgrestError | null | string;
}

export type Option = { label: string; value: any };
