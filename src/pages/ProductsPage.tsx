import Sort from "../components/common/Sort";
import Filter from "../components/common/Filter";
import Products from "../components/products/Products";

export default function ProductsPage() {
  return (
    <div className="grid h-screen grid-cols-[15fr_85fr] flex-col items-start gap-8">
      <Filter />

      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Products</h2>
          <Sort />
        </div>

        <Products />
      </div>
    </div>
  );
}
