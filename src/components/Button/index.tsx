import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  className?: string;
}
export default function Button({ title, href, className }: Props) {
  return (
    <Link
      href={href}
      className={`bg-brightRed rounded-full px-8 pt-4 pb-3 text-white shadow-lg shadow-brightRedLight hover:bg-brightRedLight ${className}`}
    >
      {title}
    </Link>
  );
}
