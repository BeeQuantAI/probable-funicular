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
import { AuthRoute } from "./route";
import Link from "next/link";

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
    <div className="card mx-auto w-full max-w-5xl shadow-slate-500 dark:shadow-sky-400  shadow-2xl min-h-96 py-4 flex justify-center items-center">
      <div className=" mx-auto h-full">
        <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <ControlledTextInput
              name="email"
              control={control}
              leftElement={<Icon icon="person" />}
              autoComplete="username"
            />

            <ControlledPasswordInput
              name="password"
              control={control}
              autoComplete="current-password"
            />
          </div>

          <div className="text-right text-primary">
            <Link href="/forgot-password">
              <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                Forgot Password?
              </span>
            </Link>
          </div>

          {/* <ErrorText styleClass="mt-8">{errorMessage}</ErrorText> */}
          <button type="submit" className={"btn mt-2 w-full btn-primary"}>
            Login
          </button>

          <div className="text-center mt-4">
            Don&apos;t have an account yet?{" "}
            <Link href="/register">
              <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                Register
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
