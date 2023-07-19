import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCard = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${id}?token&key=fd4fe01def1f461ab24d08167b2b29f5`)
      .then(res => {
        setGameData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{gameData.name}</h1>
      <p>Release Date: {gameData.released}</p>
    </div>
  );
};

export default SingleCard;
