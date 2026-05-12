import { useEffect, useMemo, useState } from "react";
import { type IProduct } from "../types/product.types";
import ProductCard from "../components/products/ProductCard";
import SearchInput from "../components/products/SearchInput";
import CategorySelect from "../components/products/CategorySelect";
import ProductCardSkeleton from "../components/products/ProductCardSkeleton";
import EmptyState from "../components/ui/EmptyState";
import ErrorState from "../components/ui/ErrorState";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { products, loading, error } = useProducts();
  // ================================
  // Get categories without duplicates
  // =================================
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);
  // ====================================
  // Filter products (search & categories)
  // =====================================
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
  // =================
  // Debouncing search
  // =================
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <section className="mt-16">
      <div className="container mx-auto px-4 py-10">
        {/*==================
        Search & Category 
        =====================*/}
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
        {!loading && !error && filteredProducts.length === 0 && (
          <EmptyState message="No products found" />
        )}
        {loading && <ProductCardSkeleton />}
        {error && <ErrorState message={error} />}
        {/*=================
        Display all Products
        ==================== */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
