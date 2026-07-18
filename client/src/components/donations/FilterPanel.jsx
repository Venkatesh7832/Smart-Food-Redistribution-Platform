const FilterPanel = ({
  category,
  setCategory,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  return (
      <div className="flex flex-wrap gap-4 mt-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="min-w-[180px] rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm 
                    focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
      >
        <option value="">All Categories</option>
        <option value="Cooked Food">Cooked Food</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Beverages">Beverages</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="min-w-[180px] rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm 
                    focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
      >
        <option value="">All Status</option>
        <option value="available">Available</option>
        <option value="reserved">Reserved</option>
        <option value="claimed">Claimed</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="min-w-[180px] rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm 
                    focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="expiry">Expiry Time</option>
      </select>
    </div>
  );
};

export default FilterPanel;