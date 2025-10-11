"use client";
import { useCallback, useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { apiFetch } from '@/lib/api';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const data = await apiFetch('/products', { method: 'GET' });
            setProducts(data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const createProduct = async (payload: Partial<Product>) => {
        await apiFetch('/products', { method: 'POST', body: JSON.stringify(payload) });
        await fetchProducts();
    };

    const updateProduct = async (id: number, payload: Partial<Product>) => {
        await apiFetch(`/products/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
        await fetchProducts();
    };

    const deleteProduct = async (id: number) => {
        await apiFetch(`/products/${id}`, { method: 'DELETE' });
        await fetchProducts();
    };

    return { products, loading, fetchProducts, createProduct, updateProduct, deleteProduct };
}
