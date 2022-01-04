import { useState } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';

function App() {
  const [cards, setCards] = useState("")
  
  function getCard(card) {
    setCards([card, ...cards])
  }

    return (
      <div className="App">
        <CreateCards addCard={getCard}></CreateCards>
      </div>
    );
}

export default App;
