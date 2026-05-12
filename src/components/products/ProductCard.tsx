import type { IProduct } from "../../types/product.types";

interface ProductCardProps {
  product: IProduct;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-contain"
      />

      <h2 className="font-bold mt-4 line-clamp-1">{product.title}</h2>

      <p className="text-blue-500 font-semibold mt-2">${product.price}</p>

      <p className="text-sm text-gray-500 mt-2">{product.category}</p>
    </div>
  );
};

export default ProductCard;
