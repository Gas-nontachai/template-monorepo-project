"use client";
import React from "react";
import { Product } from "@/types/product";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

type Props = {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: number) => void;
};

export default function ProductList({ products, onEdit, onDelete }: Props) {
  return (
    <ul className="max-w-2xl mx-auto mt-6 rounded-2xl shadow-lg space-y-6 list-none m-0">
      {products.map((p) => (
        <li
          key={p.id}
          className="w-full bg-white rounded-2xl shadow-md flex justify-between items-center p-4 transition-shadow hover:shadow-lg"
        >
          <div className="flex-1">
            <Label className="font-semibold text-gray-800">
              {p.name} - ${(p.priceCents / 100).toFixed(2)}
            </Label>
            <Label className="text-sm text-gray-700 mt-1">
              {p.description}
            </Label>
          </div>
          <div className="flex gap-2 ml-4">
            <Button onClick={() => onEdit(p)} variant="warning">
              Edit
            </Button>
            <Button onClick={() => onDelete(p.id)} variant="secondary">
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
