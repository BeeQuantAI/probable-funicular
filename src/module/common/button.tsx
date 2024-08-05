import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "relative overflow-hidden rounded border transition-all duration-500",
  {
    variants: {
      variant: {
        primary: "bg-primary-300",
        secondary: "transparent",
      },
      size: {
        medium: "mb-5 w-400 px-6 py-2.5",
      },
      animation: {
        "growing-bubble-tl-primary":
          "before:transition-width before:transition-height relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-500 before:duration-500 before:ease-in-out hover:before:-z-50 hover:before:h-btn-h-cover hover:before:w-btn-w-cover",
        "growing-bubble-tl-secondary":
          "before:transition-width before:transition-height relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-500 before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50 hover:before:h-btn-h-cover hover:before:w-btn-w-cover",
      },
      intent: {
        default: "",
        outline: "",
      },
      textColor: {
        white: "text-white",
        blue: "primary-300",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  },
);

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Button({
  children,
  variant,
  animation,
  size,
  intent,
  textColor,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={buttonVariants({
        variant,
        intent,
        size,
        animation,
        textColor,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
