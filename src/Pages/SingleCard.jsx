import React from 'react';
import { useParams } from 'react-router-dom';


const SingleCard = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Single Card - ID: {id}</h2>
    </div>
  );
};

export default SingleCard;
