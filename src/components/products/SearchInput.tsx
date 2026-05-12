interface SearchInputProps {
  search: string;
  setSearch: (val: string) => void;
}
const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchInput;
