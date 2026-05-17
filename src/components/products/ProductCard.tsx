import type { IProduct } from "../../types/product.types";
import { FiArrowRight } from "react-icons/fi";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100/50">
      <div className="relative h-64 w-full p-6 bg-gray-50/50 group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gray-500 rounded-full border border-gray-100 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-bold text-gray-800 text-lg line-clamp-1 group-hover:text-brand-primary transition-colors duration-300">
          {product.title}
        </h2>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-medium">Price</span>
            <p className="text-xl font-black text-gray-900">${product.price}</p>
          </div>
          
          <button className="w-12 h-12 bg-gray-900 group-hover:bg-brand-primary text-white rounded-xl flex items-center justify-center transition-all duration-300">
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
