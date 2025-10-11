"use client";
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormField, FormLabel, FormMessage } from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
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

export default function ProductForm({ onSaved, editing, createProduct, updateProduct }: Props) {
  const form = useForm<FormValues>({
    // @ts-expect-error resolver typing mismatch
    resolver: zodResolver(schema),
    defaultValues: { name: '', description: '', priceCents: 0, sku: '', stock: 0 },
  });

  useEffect(() => {
    if (editing) {
      form.reset({
        name: editing.name || '',
        description: editing.description || '',
        priceCents: editing.priceCents ?? 0,
        sku: editing.sku || '',
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
      <div className="space-y-2 max-w-xl">
        <FormField>
          <FormLabel>Name</FormLabel>
          <Input {...form.register('name' as const)} />
          {form.formState.errors.name && <FormMessage>{form.formState.errors.name.message}</FormMessage>}
        </FormField>

        <FormField>
          <FormLabel>Description</FormLabel>
          <Textarea {...form.register('description' as const)} />
          {form.formState.errors.description && <FormMessage>{form.formState.errors.description.message}</FormMessage>}
        </FormField>

        <FormField>
          <FormLabel>Price (cents)</FormLabel>
          <Input type="number" {...form.register('priceCents' as const, { valueAsNumber: true })} />
          {form.formState.errors.priceCents && <FormMessage>{form.formState.errors.priceCents.message}</FormMessage>}
        </FormField>

        <FormField>
          <FormLabel>SKU</FormLabel>
          <Input {...form.register('sku' as const)} />
        </FormField>

        <FormField>
          <FormLabel>Stock</FormLabel>
          <Input type="number" {...form.register('stock' as const, { valueAsNumber: true })} />
          {form.formState.errors.stock && <FormMessage>{form.formState.errors.stock.message}</FormMessage>}
        </FormField>

        <Button type="submit">{editing ? 'Update' : 'Create'}</Button>
      </div>
    </Form>
  );
}
