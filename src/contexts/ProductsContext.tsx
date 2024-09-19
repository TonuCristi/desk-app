import { createContext, Dispatch, SetStateAction, useState } from "react";

import { Product } from "../types/Products.types";

type ProductsContext = {
  products: Product[];
  isLoading: boolean;
  error: string;
  setProducts: Dispatch<SetStateAction<Product[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  isLoading: true,
  error: "",
  setProducts: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

export default function ProductsProvider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        setProducts,
        setIsLoading,
        setError,
      }}
    >
      ProductsContext
    </ProductsContext.Provider>
  );
}
