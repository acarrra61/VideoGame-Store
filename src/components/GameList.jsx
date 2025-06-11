import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

const GameList = ({ game }) => {
  const images = import.meta.glob("../assets/images/*", { eager: true });

  const getImage = (filename) => {
    const match = Object.entries(images).find(([path]) =>
      path.endsWith(filename)
    );
    return match ? match[1].default : null;
  };

  const [fullDescription, setFullDescription] = useState(false);

  let description = game.description;
  if (!fullDescription) {
    description = description.substring(0, 100) + "...";
  }

  const { addToCart } = useCart();

  const handleAddToCart = async (game) => {
    try {
      const response = await fetch("http://localhost:5000/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game),
      });

      const addedGame = await response.json();
      console.log("Added game:", addedGame);
      addToCart(addedGame); // This updates the global cart
    } catch (err) {
      console.error("Error adding game:", err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{game.type}</div>
          <h3 className="text-xl font-bold">{game.title}</h3>
        </div>
        <div className="mb-5">
          {/*game.description*/}
          {description}
        </div>
        <button
          onClick={() => setFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {fullDescription ? "Read Less" : "Read More"}
        </button>
        <h3 className="text-indigo-500 mb-2">{game.price}</h3>
        <button
          onClick={() => handleAddToCart(game)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm"
        >
          Add to Cart
        </button>
        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={getImage(game.image)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
