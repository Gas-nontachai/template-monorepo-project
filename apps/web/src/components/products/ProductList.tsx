"use client";
import React from "react";
import { Product } from "@/types/product";

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
            <div className="font-semibold text-gray-800">
              {p.name} - ${(p.priceCents / 100).toFixed(2)}
            </div>
            <div className="text-sm text-gray-700 mt-1">{p.description}</div>
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onEdit(p)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(p.id)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
