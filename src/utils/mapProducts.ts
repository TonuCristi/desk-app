import { ProductResponse } from "../types/Products.types";

export function mapProducts(products: ProductResponse[]) {
  return products.map(({ created_at, ...products }) => ({
    createdAt: created_at,
    ...products,
  }));
}
