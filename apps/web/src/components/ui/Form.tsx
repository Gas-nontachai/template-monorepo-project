"use client";
import React from "react";

export function Form({
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props}>{children}</form>;
}

export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1">{children}</div>;
}

export function FormLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`text-sm font-medium ${className}`}>{children}</label>
  );
}

export function FormMessage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-xs text-red-600 ${className}`}>{children}</p>;
}
