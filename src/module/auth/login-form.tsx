"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log({ data, errors });
  };

  return (
    <form
      className="card card-body bg-neutral"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ControlledTextInput
        name="email"
        control={control}
        leftElement={<Icon icon="person" />}
      />
      <ControlledPasswordInput name="password" control={control} />

      <Button>Sign In</Button>
      <Button intent="outline">Create Account</Button>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </form>
  );
}
