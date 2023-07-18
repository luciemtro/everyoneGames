import axios from 'axios';

export const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games?key=fd4fe01def1f461ab24d08167b2b29f5&genres=1&page_size=50');
    const gameList = response.data.results;
    return gameList;
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
    return [];
  }
};
