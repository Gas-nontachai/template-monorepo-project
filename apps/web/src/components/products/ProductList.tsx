"use client";
import React from 'react';
import { Product } from '@/types/product';

type Props = { products: Product[]; onEdit: (p: Product) => void; onDelete: (id: number) => void };

export default function ProductList({ products, onEdit, onDelete }: Props) {
  return (
    <ul className="mt-6 space-y-4">
      {products.map((p) => (
        <li key={p.id} className="border p-4 rounded flex justify-between items-center">
          <div>
            <div className="font-semibold">{p.name} - ${(p.priceCents / 100).toFixed(2)}</div>
            <div className="text-sm text-gray-600">{p.description}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(p)} className="px-3 py-1 bg-blue-600 text-white rounded">Edit</button>
            <button onClick={() => onDelete(p.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
