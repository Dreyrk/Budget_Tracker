import { ReactNode } from "react";
import { Expense, Option, Tab } from "../items";

export type TabBarLabelProps = {
  focused: boolean;
  activeColor: string;
  label: string;
};

export type TabsHeaderProps = {
  tabs: Tab[];
};

export type TabProps = {
  title: string;
  onPress: () => void;
};

export type ExpensesListProps = {
  expenses: Expense[];
  loading: boolean;
};

export type ExpenseItemProps = {
  expense: Expense;
};

export type DropdownComponentProps = {
  data: Option[];
  search?: boolean;
  searchPlaceholder?: string;
  placeholder?: string;
  onChange?: () => void;
};

export type SectionHeaderProps = {
  title: string;
  options?: Option[];
};

export type InputControlValue = {
  [key: string]: any;
};

export type FormFieldProps = {
  id: string;
  value: InputControlValue;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  placeholder?: string;
};

export type CustomButtonProps = {
  text: string;
  variant?: "primary" | "destructive" | "success" | "warning";
  classes?: { [key: string]: string };
  children?: ReactNode;
  onPress: () => void;
};
