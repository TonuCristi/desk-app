export default function Sort() {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="font-semibold">
        Sort:
      </label>
      <select
        id="sort"
        className="rounded-full border-2 border-primary px-2 py-1"
      >
        <option value="priceAsc">Price Ascending</option>
        <option value="priceDesc">Price Descending</option>
      </select>
    </div>
  );
}
