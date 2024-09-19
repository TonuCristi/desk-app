import { useContext, useEffect } from "react";

import { ProductsContext } from "../../../contexts/ProductsContext";
import { mapProducts } from "../../../utils/mapProducts";
import { supabase } from "../../../api/supabase";

export function useFetchProducts() {
  const { products, isLoading, error, setProducts, setIsLoading, setError } =
    useContext(ProductsContext);

  console.log(isLoading);

  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase.from("Products").select("*");

      if (data) {
        const products = mapProducts(data);
        setProducts(products);
        setIsLoading(false);
        console.log("Am primit data");
        // console.log(data);
      }

      if (error) {
        setError(error.message);
        setIsLoading(false);
        // console.log(error);
      }
    }

    getProducts();
  }, [setProducts, setIsLoading, setError]);

  return { products, isLoading, error };
}
