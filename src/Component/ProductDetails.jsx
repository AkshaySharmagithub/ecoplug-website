import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./Product";

const ProductDetails = () => {
  const { id } = useParams();
  const [showCheckout, setShowCheckout] = useState(false);
  
  const product = ProductList.find((item) => item.id == id);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-2">Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <a href="/" className="text-green-600 underline mt-4 block">
          Go back to Home
        </a>
      </div>
    );
  }

  return (
    <>
    
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
        
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center border border-gray-100 sticky top-24">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          <div className="space-y-6">
            
          
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                SKU: {product.sku || "PROD-AC-EV"}
              </p>
              
              <p className="mt-4 text-4xl font-bold text-green-600">
                ₹{product.price}
              </p>

          
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                <p><b>Category:</b> {product.category}</p>
                <p><b>Max Output:</b> {product.power}</p>
                <p><b>Availability:</b> <span className={product.available ? "text-green-600 font-medium" : "text-red-500"}>{typeof product.available === "string" ? product.available : (product.available ? "In Stock" : "Out of Stock")}</span></p>
        
                <p><b>Colors:</b> {product.color || "White"}</p>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="mt-8 w-full bg-white text-[#6A1B9A] border-2 border-[#6A1B9A] py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:bg-gradient-to-r hover:from-[#6A1B9A] hover:via-[#9C27B0] hover:to-[#EC407A] hover:text-white hover:border-transparent hover:shadow-xl"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {product.description || `The ${product.name} is designed for residential and commercial use, offering a reliable and safe charging experience.`}
          </p>
        </div>

      
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
           Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(product.specs || [product.type, product.power, product.category]).map((spec, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-green-600 mt-1">✔</span>
                <span className="text-gray-700 text-sm font-medium">
                  {spec.includes(":") ? (
                    <>
                      <span className="font-bold text-gray-900">{spec.split(":")[0]}:</span>
                      {spec.split(":").slice(1).join(":")}
                    </>
                  ) : spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-md rounded-lg shadow-xl relative">

            <div className="flex justify-between items-center border-b px-5 py-3">
              <h3 className="font-semibold text-gray-900">
                Complete Your Order
              </h3>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-5 space-y-4 text-sm">

              <div className="grid grid-cols-2 gap-3">
                <input className="border rounded px-3 py-2" placeholder="Full Name *" />
                <input className="border rounded px-3 py-2" placeholder="Mobile Number *" />
                <input className="border rounded px-3 py-2" placeholder="Email *" />
                <input className="border rounded px-3 py-2" placeholder="Shipping Charges *" />
                <input className="border rounded px-3 py-2" placeholder="City *" />
                <input className="border rounded px-3 py-2" placeholder="Pincode *" />
              </div>

              <textarea
                rows="3"
                className="border rounded px-3 py-2 w-full"
                placeholder="Full Address *"
              />

              <div className="border rounded-md p-4">
                <h4 className="font-semibold mb-2">Order Summary</h4>

                <div className="flex justify-between">
                  <span>Product</span>
                  <span>{product.name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹{product.price}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹0</span>
                </div>

                <div className="flex justify-between font-semibold text-green-600 mt-2">
                  <span>Total Amount</span>
                  <span>₹{product.price}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 px-5 py-4 border-t">
              <button
                onClick={() => setShowCheckout(false)}
                className="w-1/2 bg-gray-100 py-2 rounded"
              >
                Cancel
              </button>
              <button className="w-1/2 bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition-colors">
                Place Order
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
