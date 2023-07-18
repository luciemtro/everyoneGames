import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="card">
      {/* Affichage de l'image du jeu */}
      <div className="containerImageCard">
        <img src={game.background_image} alt={game.name} className="imageCard" />
      </div>
      {/* Affichage du nom du jeu */}
      <h3 className="nameGame">{game.name}</h3>
      {/* Affichage des plateformes du jeu */}
      <div className="platforms">
        {game.parent_platforms.map((platform) => (
          <span key={platform.platform.id}>{platform.platform.name}</span>
        ))}
      </div>
      {/* Affichage des genres du jeu */}
      <div className="genres">
        {game.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>
      {/* Affichage de la date de sortie du jeu */}
      <div>{game.released}</div>
      {/* Affichage du nombre d'ajouts */}
      <div className="rating">{game.rating}/5</div>
      <div className="added">+{game.added} Downloads</div>
      <Link to={`/game/${game.id}`} className="readmore-button">
        Readmore
      </Link>
    </div>
  );
};

export default GameCard;
