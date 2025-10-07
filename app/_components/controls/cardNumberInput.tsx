import { ChangeEvent } from "react";

import { Control, Path, useController } from "react-hook-form";
import Input, { InputProps } from "./input";

interface FormInputProps<T extends object>
  extends Omit<InputProps, "name" | "error"> {
  name: Path<T>;
  control: Control<T>;
}

function parse(value: string) {
  let rawValue = value.replaceAll(/\D+/g, "");
  if (rawValue.length > 16) rawValue = rawValue.substring(0, 16);

  return rawValue;
}

function format(value: string | undefined) {
  return value?.match(/.{1,4}/g)?.join(" ") ?? "";
}

export default function CardNumberInput<T extends object>({
  name,
  control,
  ...rest
}: FormInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    field.onChange(parse(event.target.value));
    rest.onChange?.(event);
  }

  return (
    <Input
      {...rest}
      {...field}
      onChange={onChange}
      value={format(field.value)}
      error={error}
    />
  );
}
