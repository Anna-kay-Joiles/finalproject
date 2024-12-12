/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const MainContent = () => {
  const [quantities, setQuantities] = useState({}); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Function to increment the quantity for a specific product
  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1
    }));
  };

  // Function to decrement the quantity for a specific product
  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1)
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product'); 
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const itemIndex = cart.findIndex(item => item.id === product.id);
    const quantity = quantities[product.id] || 1; 

    if (itemIndex >= 0) {
      cart[itemIndex].quantity += quantity;
    } else {
      const newProduct = { ...product, quantity };
      cart.push(newProduct);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added "${product.title}" to the cart!`);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center bg-[#ffffff]">
        <section className="mb-8 text-center">
          <h1 className="text-6xl font-bold mb-4 text-black">FIND YOUR NEXT RC CAR OR TRUCK</h1>
          <p className="mb-4 text-black text-2xl">
            Shop our selection of RC cars, trucks, and motorcycles by making your selection below. We’ve got fast RC cars for
            radio control racing, RC monster trucks for stunts and backyard bashing, plus a great selection of other remote
            control vehicles like RC rock crawlers, RC dirt bikes, and mini RC vehicles for indoor and outdoor adventures.
          </p>
          <ul className="flex space-x-4 justify-center">
            {products.map(product => (
              <li key={product.id} className="flex flex-col items-center">
                <a href={`#${product.id}`} className="text-black hover:underline">
                  <div className="border-4 border-yellow-500 p-4 mb-4 rounded">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full max-w-xs rounded" />
                  </div>
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Render product details and other sections similarly */}
        {products.map(product => (
          <section key={product.id} id={product.id} className="mb-8 flex items-center justify-center border-b-2 border-gray-500 pb-8 relative">
            <div className="flex flex-row items-center justify-between w-full max-w-screen-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-2/3 max-w-screen-sm mb-4 rounded m-5" />
              <div className="flex flex-col items-start text-black ml-5 w-1/2">
                <h1 className="font-bold text-black text-[36px] leading-tight max-w-full truncate">
                  {product.title}
                </h1>
                <div className="bg-gray-100 p-4 mt-4 rounded w-full">
                  <p className="text-[16px]">
                    <br />
                    <span className="bg-yellow-500 text-blue-900 px-2 py-1 rounded">{product.rating}</span>
                    <br />
                    <strong>${product.price}</strong>
                  </p>
                  <p className="mt-2 text-lg">RC Club points earned on this item shown at checkout.</p>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart Buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => decrementQuantity(product.id)} 
                  className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-400 focus:outline-none"
                >
                  -
                </button>
                <span className="text-black text-2xl">{quantities[product.id] || 1}</span>
                <button
                  onClick={() => incrementQuantity(product.id)} 
                  className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-400 focus:outline-none"
                >
                  +
                </button>
              </div>
              <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

const FirstCar = () => (
  <div className="bg-[#1f1e1e] h-screen">
    <MainContent />
  </div>
);

export default FirstCar;
