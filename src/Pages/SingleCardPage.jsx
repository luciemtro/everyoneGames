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
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerCardSingle">
      <div className="containerCardSingle2">
        <h1>{gameData.name}</h1>
        <p>Release Date: {gameData.released}</p>
        <div className="containerImageCardSingle">
          <img src={gameData.background_image} alt={gameData.name} className="imageCardSingle" />
        </div>
        <p>Youtube {gameData.youtube_count}</p>
        <p>Website {gameData.website}</p>
        <p>updated {gameData.updated}</p>
        <p>twitch_count {gameData.twitch_count}</p>
        <p>suggestions_count {gameData.suggestions_count}</p>
      </div>
    </div>
  );
};

export default SingleCard;
