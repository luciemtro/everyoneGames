
import React, { useState } from 'react';

const Filter = ({ onPlatformFilter, onGenreFilter, onDateFilter, onSearchFilter}) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlatformChange = (event) => {
    const platform = event.target.value;
    // Mise à jour de la sélection de la plateforme et appel de la fonction de filtrage correspondante
    setSelectedPlatform(platform);
    onPlatformFilter(platform);
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    // Mise à jour de la sélection du genre et appel de la fonction de filtrage correspondante
    setSelectedGenre(genre);
    onGenreFilter(genre);
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    // Mise à jour de la sélection de la date et appel de la fonction de filtrage correspondante
    setSelectedDate(date);
    onDateFilter(date);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    // Mise à jour du terme de recherche et appel de la fonction de filtrage correspondante
    setSearchTerm(term);
    onSearchFilter(term);
  };



  return (
    <div className="filter">
        <input
        type="text"
        placeholder="Rechercher un jeu..."
        value={searchTerm}
        onChange={handleSearchChange}
        />
      <select name="Genre" id="filter1" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Tous les genres</option>
        <option value="Racing">Racing</option>
        <option value="Indie">Indie</option>
        <option value="Sports">Sports</option>
        <option value="Arcade">Arcade</option>
        <option value="Action">Action</option>
        <option value="Casual">Casual</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Simulation">Simulation</option>
        <option value="Adventure">Adventure</option>
        <option value="Family">Family</option>
        <option value="Shooter">Shooter</option>
        <option value="RPG">RPG</option>
      </select>
      <select name="Platforms" id="filter2" value={selectedPlatform} onChange={handlePlatformChange}>
        <option value="">Toutes les plateformes</option>
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Linux">Linux</option>
        <option value="iOS">iOS</option>
        <option value="Android">Android</option>
        <option value="Nintendo">Nintendo</option>
        <option value="Apple Macintosh">Apple Macintosh</option>
        <option value="Web">Web</option>
      </select>
      <select name="Date" id="filter3" value={selectedDate} onChange={handleDateChange}>
        <option value="">Toutes les dates</option>
        <option value="asc">Plus ancienne</option>
        <option value="desc">Plus récente</option>
      </select>
    </div>
  );
};

export default Filter;
