"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  priceCents: z.number().min(0),
  sku: z.string().optional(),
  stock: z.number().int().min(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Editing = Partial<FormValues & { id: number }> & { sku?: string };

type Props = {
  onSaved?: () => void;
  editing?: Editing | null;
  createProduct?: (payload: Partial<FormValues>) => Promise<void>;
  updateProduct?: (id: number, payload: Partial<FormValues>) => Promise<void>;
};

export default function ProductForm({
  onSaved,
  editing,
  createProduct,
  updateProduct,
}: Props) {
  const form = useForm<FormValues>({
    // @ts-expect-error resolver typing mismatch
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      priceCents: 0,
      sku: "",
      stock: 0,
    },
  });

  useEffect(() => {
    if (editing) {
      form.reset({
        name: editing.name || "",
        description: editing.description || "",
        priceCents: editing.priceCents ?? 0,
        sku: editing.sku || "",
        stock: editing.stock ?? 0,
      });
    }
  }, [editing, form]);

  const onSubmit = async (values: FormValues) => {
    if (editing && updateProduct && editing.id) {
      await updateProduct(editing.id, values);
    } else if (!editing && createProduct) {
      await createProduct(values);
    }

    form.reset();
    onSaved?.();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="max-w-2xl mx-auto p-7 bg-white rounded-2xl shadow-lg space-y-6">
        <h2 className="text-5xl font-semibold flex justify-center text-gray-800">
          {editing ? "Edit Product" : "Create Product"}
        </h2>

        {/* Name */}
        <FormField>
          <FormLabel className="font-medium text-gray-700">Name</FormLabel>
          <Input
            {...form.register("name" as const)}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 "
            placeholder="Enter product name"
          />
          {form.formState.errors.name && (
            <FormMessage className="text-red-500 text-sm mt-1">
              {form.formState.errors.name.message}
            </FormMessage>
          )}
        </FormField>

        {/* Description */}
        <FormField>
          <FormLabel className="font-medium text-gray-700">
            Description
          </FormLabel>
          <Textarea
            {...form.register("description" as const)}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Enter product description"
            rows={4}
          />
          {form.formState.errors.description && (
            <FormMessage className="text-red-500 text-sm mt-1">
              {form.formState.errors.description.message}
            </FormMessage>
          )}
        </FormField>

        {/* Price */}
        <FormField>
          <FormLabel className="font-medium text-gray-700">
            Price (cents)
          </FormLabel>
          <Input
            type="number"
            {...form.register("priceCents" as const, { valueAsNumber: true })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="e.g., 1000"
          />
          {form.formState.errors.priceCents && (
            <FormMessage className="text-red-500 text-sm mt-1">
              {form.formState.errors.priceCents.message}
            </FormMessage>
          )}
        </FormField>

        {/* SKU */}
        <FormField>
          <FormLabel className="font-medium text-gray-700">SKU</FormLabel>
          <Input
            {...form.register("sku" as const)}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Enter SKU code"
          />
        </FormField>

        {/* Stock */}
        <FormField>
          <FormLabel className="font-medium text-gray-700">Stock</FormLabel>
          <Input
            type="number"
            {...form.register("stock" as const, { valueAsNumber: true })}
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="e.g., 50"
          />
          {form.formState.errors.stock && (
            <FormMessage className="text-red-500 text-sm mt-1">
              {form.formState.errors.stock.message}
            </FormMessage>
          )}
        </FormField>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {editing ? "Update Product" : "Create Product"}
        </Button>
      </div>
    </Form>
  );
}
