import { useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { type IProduct } from "../types/product.types";
import ProductCard from "../components/products/ProductCard";
import SearchInput from "../components/products/SearchInput";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [count, setCount] = useState(0);
  const filteredProducts: IProduct[] = useMemo(() => {
    console.log("FILTERING RUNNING");
    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch),
    );
  }, [products, debouncedSearch]);
  async function getProducts() {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="container mx-auto px-4 py-10">
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      <h1 className="text-4xl font-bold mb-10 text-center">Fake Store</h1>
      <div className="mb-8">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      {filteredProducts.length === 0 && !loading && (
        <h2 className="text-center text-2xl font-semibold">
          No products found
        </h2>
      )}
      {loading && (
        <h2 className="text-center text-2xl font-semibold">Loading...</h2>
      )}
      {error && <h2 className="text-center text-red-500 text-2xl">{error}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
