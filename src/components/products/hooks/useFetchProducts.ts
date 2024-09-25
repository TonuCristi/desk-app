import { useContext, useEffect } from "react";

import { ProductsContext } from "../../../contexts/ProductsContext";

export function useFetchProducts() {
  const { products, isLoading, error, setProducts, setIsLoading, setError } =
    useContext(ProductsContext);

  console.log(isLoading);

  useEffect(() => {
    async function getProducts() {}

    getProducts();
  }, [setProducts, setIsLoading, setError]);

  return { products, isLoading, error };
}
