"use client";

import {
  Controller,
  type FieldValues,
} from "react-hook-form";

import type { FormFieldProps } from "@/shared/components/form/form-field.types";
import { Input } from "@/shared/components/ui/input/input";
import { Label } from "@/shared/components/ui/lable/label";
import { cn } from "@/shared/lib/utils";

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  dir,
  className,
}: FormFieldProps<T>) {
  const fieldId = String(name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className={cn("space-y-1.5", className)}>
          <Label htmlFor={fieldId}>{label}</Label>
          <Input
            {...field}
            id={fieldId}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            inputMode={inputMode}
            dir={dir}
            aria-invalid={fieldState.invalid}
            aria-describedby={
              fieldState.error ? `${fieldId}-error` : undefined
            }
          />
          {fieldState.error?.message ? (
            <p
              id={`${fieldId}-error`}
              role="alert"
              className="text-sm text-destructive"
            >
              {fieldState.error.message}
            </p>
          ) : null}
        </div>
      )}
    />
  );
}
