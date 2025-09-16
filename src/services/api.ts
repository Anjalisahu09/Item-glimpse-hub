import { Product, ProductsResponse } from '@/types/product';

const BASE_URL = 'https://dummyjson.com';

export const api = {
  // Fetch products with pagination
  async getProducts(limit = 30, skip = 0): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  // Fetch single product
  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },

  // Fetch products by category
  async getProductsByCategory(category: string): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) throw new Error('Failed to fetch products by category');
    return response.json();
  },

  // Fetch all categories
  async getCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },

  // Search products
  async searchProducts(query: string): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to search products');
    return response.json();
  }
};