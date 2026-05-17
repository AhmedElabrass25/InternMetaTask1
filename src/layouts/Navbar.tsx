import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] border-b border-[#ffffff] transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-tr from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-linear-to-br from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Fake Store
          </h1>
        </div>

        <button className="relative p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-200 group">
          <FiShoppingCart
            size={24}
            className="text-gray-700 group-hover:text-brand-primary transition-colors"
          />
          <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm transform translate-x-1 -translate-y-1">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
