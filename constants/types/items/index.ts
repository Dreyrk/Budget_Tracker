export type Tab = {
  title: string;
  href: string;
};

export type Expense = {
  id: number;
  title: string;
  amount: number;
  description: string;
  categories: string[];
};

export type Option = { label: string; value: any };
