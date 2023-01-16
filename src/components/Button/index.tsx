import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

interface Props
  extends VariantProps<typeof ButtonStyles>,
    React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}
const ButtonStyles = cva(
  "block rounded-full shadow-lg px-8 pt-4 pb-3 font-bold",
  {
    variants: {
      intent: {
        primary:
          "bg-brightRed text-white shadow-brightRedLight hover:bg-brightRedLight",
        secondary: "bg-white text-brightRed hover:text-brightRedLight",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export default function Button({
  title,
  href,
  className,
  intent,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={ButtonStyles({ className, intent })}
      {...props}
    >
      {title}
    </Link>
  );
}
