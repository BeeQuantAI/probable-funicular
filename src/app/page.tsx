import { ThemeSwitcher } from "@src/module/system";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ThemeSwitcher />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <button className="btn">What</button>
      </div>
    </main>
  );
}
