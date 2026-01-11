import React, { useState } from 'react';
import products from './Product';
import Card from './Card';
import FilterBar from './Filterbar';

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = products.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category.toLowerCase() === activeFilter;
  });

  return (
    <div>
      <FilterBar
        totalProducts={filteredProducts.length}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {filteredProducts.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
        ))}
      </div>
    </div>
  );
};

export default ProductList;