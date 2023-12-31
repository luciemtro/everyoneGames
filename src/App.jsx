import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Filter from './Filter';
import GameCardList from './GameCardList';
import SingleCard from './Pages/SingleCardPage';
import NavTop from './NavTop'
import { fetchGames } from './API';

const App = () => {
  // État pour les filtres
  const [filteredPlatform, setFilteredPlatform] = useState('');
  const [filteredGenre, setFilteredGenre] = useState('');
  const [filteredDate, setFilteredDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // État pour stocker la liste des jeux
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Appel à l'API pour récupérer la liste des jeux
      const gameList = await fetchGames();
      setGames(gameList);

    };

    fetchData();
  }, []);

  const handlePlatformFilter = (platform) => {
    // Mise à jour du filtre de plateforme
    setFilteredPlatform(platform);
  };

  const handleGenreFilter = (genre) => {
    // Mise à jour du filtre de genre
    setFilteredGenre(genre);
  };

  const handleDateFilter = (date) => {
    // Mise à jour du filtre de date
    setFilteredDate(date);
  };

  const handleSearchFilter = (term) => {
    // Mise à jour du filtre de recherche
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="contain">
        <NavTop />
        <Filter
          onPlatformFilter={handlePlatformFilter}
          onGenreFilter={handleGenreFilter}
          onDateFilter={handleDateFilter}
          onSearchFilter={handleSearchFilter}
        />
        <Switch>
          <Route exact path="/">
            <GameCardList
              games={games}
              filteredPlatform={filteredPlatform}
              filteredGenre={filteredGenre}
              filteredDate={filteredDate}
              searchTerm={searchTerm}
            />
          </Route>
          <Route path="/game/:id">
            <SingleCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
