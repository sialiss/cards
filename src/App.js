import { render } from '@testing-library/react';
import { useState } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';
import ListOfCards from './ListOfCards';

function App() {
  const [cards, setCards] = useState([])
  
  function getCard(card) {
	setCards([card, ...cards])
  }

  function deleteCard(id) {
	setCards(cards.filter(card => card.id !== id))
  }

	return (
	  <div className="App main-wrapper">
		<div className="sub-wrapper">
		  <CreateCards addCard={getCard}></CreateCards>
		  <ListOfCards cards={cards} deleteCard={deleteCard}></ListOfCards>
		</div>
	  </div>
	);
}

export default App;
