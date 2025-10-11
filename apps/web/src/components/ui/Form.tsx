"use client";
import React from 'react';

export function Form({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props}>{children}</form>;
}

export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1">{children}</div>;
}

export function FormLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium">{children}</label>;
}

export function FormMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-red-600">{children}</p>;
}
