import React from 'react'
import Hero from '../components/Hero';
import GameCard from '../components/GameCard';
import GamesListed from '../components/GamesListed';
import ViewAllGames from '../components/ViewAllGames';

const HomePage = () => {
  return (
    <>
    <Hero title="Become a Gamer" subtitle="Find the Games that fits your style and skills"/>
    <GameCard />
    <GamesListed isHome = {true}/>
    <ViewAllGames />
    </>
  )
}

export default HomePage