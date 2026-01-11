import React from "react";

const FilterBar = ({ totalProducts, activeFilter, setActiveFilter }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
      
        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">
            Filter by:
          </span>

          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition
              ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            All Products
          </button>

          <button
            onClick={() => setActiveFilter("ac")}
            className={`px-6 py-2 rounded-lg font-semibold transition
              ${
                activeFilter === "ac"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            AC Chargers
          </button>
        </div>


        {/* Right Section */}
        <div className="text-gray-600 font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
            {totalProducts}
          </span>{" "}
          products available
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
