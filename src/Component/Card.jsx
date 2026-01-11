import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  if (!item) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 group">
      
      
      <div className="relative bg-gray-50 rounded-xl p-6 overflow-hidden">
      
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow-md">
          Available
        </span>

        <img
          src={item.src}
          alt={item.name}
          className="h-56 mx-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

  
      <h3 className="mt-5 font-semibold text-lg text-gray-900">
        {item.name}
      </h3>

    
      <div className="flex gap-6 text-sm text-gray-600 mt-2">
        <span className="flex items-center gap-1 text-blue-600">
          ⚡ <span className="text-gray-700">{item.power}</span>
        </span>
        <span className="flex items-center gap-1 text-blue-600">
          🔌 <span className="text-gray-700">{item.type}</span>
        </span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-gray-900">
          ₹{item.price}
        </p>

        <button
          onClick={() => navigate(`/product/${item.id}`)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
