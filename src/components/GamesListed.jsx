import React from "react";
import games from "../games.json";
import GameList from "./GameList";

const GamesListed = ({ isHome = false }) => {
  console.log(games);
  const gameListings = isHome ? games.slice(0, 3) : games;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Games" : "Browse Games"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gameListings.map((game) => (
            <GameList key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesListed;
