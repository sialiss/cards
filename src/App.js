import { useState } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';
import ListOfCards from './ListOfCards.js';

// обновление в gh - npm run deploy


function App() {
  	const [cards, setCards] = useState([])
  
  	function getCard(card) {
		setCards([card, ...cards])
  	}

  	function deleteCard(id) {
		setCards(cards.filter(card => card.id !== id))
	}
	
	function editCard(newCard) {
		cards[cards.findIndex(card => card.id === newCard.id)] = newCard
		setCards(cards)
	}

	return (
	  <div className="App main-wrapper">
			<div className="sub-wrapper">
				
				{/* форма создания карточки, обновляет состояние со всеми карточками */}
				<CreateCards addCard={getCard}></CreateCards>
				{/* список карточек, получается состояние со всеми карточками, функции удаления и редактирования карточек */}
				<ListOfCards cards={cards} deleteCard={deleteCard} editCard={editCard}></ListOfCards>
				
		</div>
	  </div>
	);
}

export default App;
