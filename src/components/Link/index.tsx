import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

interface Props
  extends VariantProps<typeof ButtonStyles>,
    React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}
const ButtonStyles = cva("block rounded-full px-8 pt-4 pb-3 font-bold", {
  variants: {
    intent: {
      primary:
        "bg-brightRed text-white shadow-brightRedLight hover:bg-brightRedLight",
      secondary: "bg-white text-brightRed hover:text-brightRedLight",
    },
    showShadow: {
      true: "shadow-lg",
      false: "shadow-none",
    },
  },
  defaultVariants: {
    intent: "primary",
    showShadow: true,
  },
});

export default function Button({
  title,
  href,
  className,
  intent,
  showShadow,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={ButtonStyles({ className, intent, showShadow })}
      {...props}
    >
      {title}
    </Link>
  );
}
