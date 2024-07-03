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
};

export type NewExpense = {
  title: string;
  amount: number;
  description?: string;
  categories?: string[];
  date?: string;
};

export type Option = { label: string; value: any };
