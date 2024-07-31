import { LoginForm } from "@src/module/auth/login-form";
import { ThemeSwitcher } from "@src/module/system";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ThemeSwitcher />
      </div>

      <LoginForm />
    </main>
  );
}
