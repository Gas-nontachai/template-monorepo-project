"use client";
import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "warning" | "success" | "secondary";
  href?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className = "",
  variant = "warning",
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const router = useRouter();

  const variantClasses =
    {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      warning: "bg-yellow-500 text-black hover:bg-yellow-600",
      success: "bg-green-600 text-white hover:bg-green-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
    }[variant] || "bg-slate-900 text-white";

  const combinedClasses = `px-6 py-3 rounded-xl transition ${variantClasses} ${className}`;

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button {...rest} onClick={handleClick} className={combinedClasses}>
      {children}
    </button>
  );
}
