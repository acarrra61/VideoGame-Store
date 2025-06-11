import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

const SellGamesPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [randomPrices, setRandomPrices] = useState({});

  useEffect(() => {
    const prices = {};
    cartItems.forEach((item) => {
      if (!prices[item.id]) {
        prices[item.id] = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
      }
    });
    setRandomPrices((prev) => ({ ...prev, ...prices }));
  }, [cartItems]);

  const handleSellAll = () => {
    alert("All games sold!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl min-h-[80vh] bg-white/90 backdrop-blur-sm shadow-2xl rounded-xl p-10 md:p-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 drop-shadow">
          Sell Your Games
        </h2>

        {cartItems.length > 0 ? (
          <>
            <ul className="grid md:grid-cols-2 gap-6">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg flex justify-between items-center hover:shadow-xl transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      ${randomPrices[item.id] ?? "—"}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:text-red-800 font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-center mt-10">
              <button
                onClick={handleSellAll}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition"
              >
                Sell All Games
              </button>
            </div>
          </>
        ) : (
          <p className="text-lg text-center font-medium">No games to sell.</p>
        )}
      </div>
    </div>
  );
};

export default SellGamesPage;
