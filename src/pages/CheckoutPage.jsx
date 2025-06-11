import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const CheckoutPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cart: cartItems }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Order submitted successfully!");
        clearCart();
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-screen max-w-3xl bg-white shadow-xl rounded-lg p-10 overflow-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Checkout
        </h2>
        {cartItems.length > 0 ? (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Your Cart
            </h3>
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-gray-50 p-2 rounded-md shadow-sm"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-md text-gray-600">{item.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 text-center mb-8">Your cart is empty.</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="input col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP / Postal Code"
              value={formData.zip}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Payment Info */}
          <h3 className="text-lg font-semibold text-gray-700">Payment Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="input md:col-span-2"
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
