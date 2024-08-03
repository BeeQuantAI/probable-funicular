import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "btn-blue":"rgb(112, 187, 253)",
        "login-hover":"#3ea3fc"
      },
      width:{
        "btn-w-cover":"255%",
        "400":"400px"
      },
      height:{
        "btn-h-cover":"500%"
      }
    },
  },
};
export default config;
