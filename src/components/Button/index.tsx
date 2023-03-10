import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

interface LinkProps
  extends VariantProps<typeof ButtonStyles>,
    React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}
interface ButtonProps
  extends VariantProps<typeof ButtonStyles>,
    React.HTMLAttributes<HTMLButtonElement> {
  title: string;
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

export default function Link({
  title,
  href,
  className,
  intent,
  showShadow,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={ButtonStyles({ className, intent, showShadow })}
      {...props}
    >
      {title}
    </NextLink>
  );
}

export function Button({
  title,
  className,
  intent,
  showShadow,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonStyles({ className, intent, showShadow })}
      {...props}
    >
      {title}
    </button>
  );
}
