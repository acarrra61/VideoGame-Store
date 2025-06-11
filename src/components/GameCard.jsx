import React from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Game>
            <h2 className="text-2xl font-bold">Buy Games</h2>
            <p className="mt-2 mb-4">
              Browse the game store and start playing today.
            </p>
            <Link
              to="/games"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Games
            </Link>
          </Game>
          <Game>
            <h2 className="text-2xl font-bold">Sell Games</h2>
            <p className="mt-2 mb-4">
              List your games to sell for the perfect gamer today.
            </p>
            <Link
              to="/sell-games"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Sell Games
            </Link>
          </Game>
        </div>
      </div>
    </section>
  );
};

export default GameCard;
