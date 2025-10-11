"use client";
import React from 'react';

export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={(props.className || '') + ' border rounded px-3 py-2 w-full min-h-[120px]'} />
  );
}
