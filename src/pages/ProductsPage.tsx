import { useEffect } from "react";
import { supabase } from "../api/supabase";

export default function ProductsPage() {
  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase.from("Products").select("*");

      console.log(data);
    }

    getProducts();
  }, []);

  return <div className="h-screen">ProductsPage</div>;
}
