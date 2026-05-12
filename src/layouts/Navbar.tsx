import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Fake Store</h1>

        <button className="relative">
          <FiShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
