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
import { login, LoginPayload } from "./auth-service";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

async function action(payload: LoginPayload) {
  const res = await login(payload);
}

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

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  return (
    <form className="card card-body bg-neutral" onSubmit={onSubmit}>
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
