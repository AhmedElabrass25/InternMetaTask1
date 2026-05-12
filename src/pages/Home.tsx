import { useEffect, useState } from "react";
import { api } from "../services/api";
import { type IProduct } from "../types/product.types";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Fake Store</h1>
      {loading && (
        <h2 className="text-center text-2xl font-semibold">Loading...</h2>
      )}
      {error && <h2 className="text-center text-red-500 text-2xl">{error}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
