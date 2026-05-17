import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  search: string;
  setSearch: (val: string) => void;
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors">
        <FiSearch size={20} />
      </div>
      <input
        type="text"
        placeholder="Search for items, categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 bg-white border border-gray-200 rounded-2xl pl-12 pr-4 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all duration-300 placeholder:text-gray-400 font-medium"
      />
    </div>
  );
};

export default SearchInput;
