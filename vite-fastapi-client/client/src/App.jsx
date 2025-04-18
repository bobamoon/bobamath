import { useEffect, useState } from 'react';

function App() {
  const [player, setPlayer] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/char/list/lisa')
      .then(async (res) => {
        const contentType = res.headers.get('content-type');
        if (!res.ok) {
          throw new Error(`Server responded with ${res.status}`);
        }
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid JSON response');
        }
        const data = await res.json();
        setPlayer(data.playerId);
        setCharacters(data.characterId);
      })
      .catch((err) => {
        console.error('Error fetching character list:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;
  }

  if (!player) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Player: {player}</h1>
      <h2>Characters:</h2>
      <ul>
        {characters.map((charId) => (
          <li key={charId}>{charId}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
