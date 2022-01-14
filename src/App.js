import { useState } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';
import ListOfCards from './ListOfCards';

function App() {
  const [cards, setCards] = useState([])
  
  function getCard(card) {
    setCards([card, ...cards])
  }

    return (
      <div className="App main-wrapper">
        <div className="sub-wrapper">
          <CreateCards addCard={getCard}></CreateCards>
          <ListOfCards cards={cards}></ListOfCards>
        </div>
      </div>
    );
}

export default App;
