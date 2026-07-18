import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder = "Search donations..." }) => {
  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
      />
    </div>
  );
};

export default SearchBar;