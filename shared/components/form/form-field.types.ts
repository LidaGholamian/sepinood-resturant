import type { HTMLInputTypeAttribute } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  dir?: "rtl" | "ltr" | "auto";
  className?: string;
};
