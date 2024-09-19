import Loader from "../common/Loader";
import { useFetchProducts } from "./hooks/useFetchProducts";

export default function Products() {
  const { products, isLoading, error } = useFetchProducts();

  //   if (isLoading) return <Loader />;

  return (
    <div className="">
      {products.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
}
