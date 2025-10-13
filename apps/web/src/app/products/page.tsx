"use client";
import React, { useState } from "react";
import ProductForm from "@/components/products/ProductForm";
import ProductList from "@/components/products/ProductList";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

export default function ProductsPage() {
  const { products, loading, createProduct, updateProduct, deleteProduct } =
    useProducts();
  const [editing, setEditing] = useState<Product | null>(null);

  return (
    <div className="p-8">
      <Label className="text-2xl font-bold">Products</Label>

      <Button variant="warning" href="/">
        back
      </Button>

      <div>
        <ProductForm
          editing={editing}
          createProduct={async (payload) => await createProduct(payload)}
          updateProduct={async (id, payload) =>
            await updateProduct(id, payload)
          }
          onSaved={async () => {
            setEditing(null);
          }}
        />
        <ProductList
          products={products}
          onEdit={(p) => setEditing(p)}
          onDelete={deleteProduct}
        />
      </div>
      {loading && <div className="mt-4">Loading...</div>}
    </div>
  );
}
