'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };


  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Items in Cart:</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded shadow">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <p className="mx-2">Quantity: {item.quantity || 1}</p>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
       
          <div className="flex justify-between mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => router.push("/")}
              className="text-blue-500 mt-4"
            >
              Go back to shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <button
            onClick={() => router.push("/")}
            className="text-blue-500 mt-4"
          >
            Go back to shopping
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
