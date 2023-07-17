import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {/* Afficher d'autres données selon la structure de votre objet */}
    </div>
  );
}

export default Card;
