import { ReactNode } from "react";
import { Expense, Option, Tab } from "../items";
import { KeyboardTypeOptions, StyleProp } from "react-native";
import { Control, FieldValues } from "react-hook-form";

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
  selected: string;
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
  id: string;
  value: InputControlValue | any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  customRenderItem?: (item: Option, selected?: boolean) => JSX.Element;
  customStyles?: any;
  control?: Control<FieldValues>;
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
  value?: InputControlValue;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  multiline?: boolean;
  lines?: number;
  control?: Control<FieldValues>;
};

export type CustomButtonProps = {
  text?: string;
  variant?: "primary" | "destructive" | "success" | "warning";
  classes?: { [key: string]: string };
  children?: ReactNode;
  onPress: () => void;
};

export type CreateExpenseModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
