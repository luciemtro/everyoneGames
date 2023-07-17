import React, { useEffect, useState } from 'react';
import Card from './components/homePage/Card'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/creators/{id}')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
      console.log(data)
  }, []);

  return (
    <div>
      {/* Afficher les cartes */}
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default App
