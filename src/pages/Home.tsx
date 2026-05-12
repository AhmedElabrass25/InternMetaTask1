import { useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { type IProduct } from "../types/product.types";
import ProductCard from "../components/products/ProductCard";
import SearchInput from "../components/products/SearchInput";
import CategorySelect from "../components/products/CategorySelect";
import ProductCardSkeleton from "../components/products/ProductCardSkeleton";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("all");
  // Get categories without
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);
  // Filter products (search & categories)
  const filteredProducts: IProduct[] = useMemo(() => {
    return products.filter((product) => {
      const searchResults = product.title
        .toLowerCase()
        .includes(debouncedSearch);
      const categoryResults =
        category === "all" || product.category === category;
      return searchResults && categoryResults;
    });
  }, [products, debouncedSearch, category]);
  //  Get all products
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
  // Debouncing
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
      <h1 className="text-4xl font-bold mb-10 text-center">Fake Store</h1>
      <div className="flex items-center flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchInput search={search} setSearch={setSearch} />
        </div>
        <div className="w-full md:w-72">
          <CategorySelect
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
      {filteredProducts.length === 0 && !loading && (
        <h2 className="text-center text-2xl font-semibold">
          No products found
        </h2>
      )}
      {loading && <ProductCardSkeleton />}
      {error && <h2 className="text-center text-red-500 text-2xl">{error}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
