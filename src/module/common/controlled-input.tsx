import { useToggle } from "@src/utils";
import React, { InputHTMLAttributes } from "react";
import { Control, FieldPath, useController } from "react-hook-form";
import { Icon } from "./icon";

type ControlledInputProps<TFieldValues extends object = object> = {
  control: Control<TFieldValues, any>;
  name: FieldPath<TFieldValues>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
export function ControlledTextInput<TFieldValues extends object>({
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: ControlledInputProps<TFieldValues>) {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
  });
  return (
    <label className="input input-bordered flex items-center gap-2">
      {!!leftElement && leftElement}
      <input className="grow" {...props} {...field} />
      {!!rightElement && rightElement}
    </label>
  );
}

export function ControlledPasswordInput<TFieldValues extends object>({
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: ControlledInputProps<TFieldValues>) {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
  });
  return (
    <label className="input input-bordered flex items-center gap-2">
      <Icon icon="key" />
      <input
        type={showPassword ? "text" : "password"}
        className="grow"
        {...props}
        {...field}
      />
      {showPassword ? (
        <button type="button" onClick={() => toggleShowPassword()}>
          <Icon icon="eye-open" />
        </button>
      ) : (
        <button type="button" onClick={() => toggleShowPassword()}>
          <Icon icon="eye-closed" />
        </button>
      )}
    </label>
  );
}
