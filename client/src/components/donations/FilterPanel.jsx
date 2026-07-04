const FilterPanel = ({
  category,
  setCategory,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg p-2"
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
        className="border rounded-lg p-2"
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
        className="border rounded-lg p-2"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="expiry">Expiry Time</option>
      </select>
    </div>
  );
};

export default FilterPanel;