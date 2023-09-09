import React, { useState } from 'react';

const SmileysList = () => {

  const [smileys, setSmileys] = useState([
    { id: 1, name: '😀', count: 0 },
    { id: 2, name: '😍', count: 0 },
    { id: 3, name: '😎', count: 0 }
  ]);

  const [winner, setWinner] = useState(null);   

  const handleSmileyClick = (id) => {
    const updatedSmileys = smileys.map((smiley) =>
      smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
    );
    setSmileys(updatedSmileys);
  };

  const handleShowResults = () => {
    let maxCount = -1;
    let winningSmiley = null;

    smileys.forEach((smiley) => {
      if (smiley.count > maxCount) {
        maxCount = smiley.count;
        winningSmiley = smiley;
      }
    });

    setWinner(winningSmiley);
  };

  return (
    <div>
      <h1>Список смайликів</h1>
      <ul>
        {smileys.map((smiley) => (
          <li key={smiley.id} onClick={() => handleSmileyClick(smiley.id)}>
            {smiley.name} - {smiley.count} кліків
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Show Results</button>
      {winner && (
        <div>
          <h2>Переміг смайл: {winner.name}</h2>
          <p>Загальна кількість голосів: {winner.count}</p>
        </div>
      )}
    </div>
  );
};

export default SmileysList;
