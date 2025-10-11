"use client";
import React from 'react';

export default function Button({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={"inline-flex items-center gap-2 rounded px-4 py-2 bg-slate-900 text-white " + className}>
      {children}
    </button>
  );
}
