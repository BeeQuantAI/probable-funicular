import { LoginForm } from "@src/module/auth/login-form";
import { ThemeSwitcher } from "@src/module/system";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4">
      <div>
        <ThemeSwitcher />
      </div>

      <LoginForm />
    </main>
  );
}
