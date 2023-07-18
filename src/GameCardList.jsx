import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';


const GameCardList = ({ filteredPlatform, filteredGenre, filteredDate, searchTerm }) => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedGames, setDisplayedGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games?key=fd4fe01def1f461ab24d08167b2b29f5&genres=1&page_size=50');
        const gameList = response.data.results;
        setGames(gameList);
      } catch (error) {
        console.error('Erreur lors de la requête API :', error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const filteredGames = games.filter((game) => {
      if (
        // Vérification des filtres pour chaque jeu
        (filteredPlatform === '' || game.parent_platforms.some((platform) => platform.platform.name === filteredPlatform)) &&
        (filteredGenre === '' || game.genres.some((genre) => genre.name === filteredGenre)) &&
        (searchTerm === '' || game.name.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });

    setFilteredGames(filteredGames);
  }, [games, filteredPlatform, filteredGenre, searchTerm]);
  
  useEffect(() => {
    let displayedGames = [];

    if (selectedCategory === 'all') {
      displayedGames = filteredGames;
    } else if (selectedCategory === 'top-rated') {
      displayedGames = filteredGames.filter((game) => game.rating >= 4);
    } else if (selectedCategory === 'most-popular') {
      displayedGames = filteredGames.filter((game) => game.added >= 5000);
    } else if (selectedCategory === 'recent') {
      displayedGames = filteredGames.filter((game) => {
        const releasedDate = new Date(game.released);
        const currentDate = new Date();
        const oneYearAgo = new Date().setFullYear(currentDate.getFullYear() - 4);
        return releasedDate >= oneYearAgo;
      });
    }

    if (filteredDate === 'asc') {
      displayedGames.sort((a, b) => new Date(a.released) - new Date(b.released));
    } else if (filteredDate === 'desc') {
      displayedGames.sort((a, b) => new Date(b.released) - new Date(a.released));
    }

    setDisplayedGames(displayedGames);
  }, [filteredGames, selectedCategory, filteredDate]);

  const handleSortByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
 
    <section>
      <div className="category-buttons">
        <button onClick={() => handleSortByCategory('all')}>Tout les jeux</button>
        <button onClick={() => handleSortByCategory('top-rated')}>Les mieux notés</button>
        <button onClick={() => handleSortByCategory('most-popular')}>Les plus populaires</button>
        <button onClick={() => handleSortByCategory('recent')}>Les nouveautés</button>
      </div>
        
      <div className="game-card-list">
        {/* Affichage des cartes de jeux filtrées */}
        {displayedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameCardList;
