import React, { useState } from 'react'
// Cart Component
    const Cart = ({ cart, removeFromCart, clearCart }) => {
        console.log(cart);
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
     
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                <button
                  onClick={clearCart}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      );
    };
export default Cart;