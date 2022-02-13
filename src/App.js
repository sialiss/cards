import { useState } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';
import ListOfCards from './ListOfCards.js';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
	const [cards, setCards] = useState([])
	const [listLater, setListLater] = useState([])
	const [listInProcess, setListInProcess] = useState([])
	const [listCompleted, setListCompleted] = useState([])
	const lists = {later : listLater, inProcess : listInProcess,  completed : listCompleted }
  
  	function getCard(card) {
		setCards([card, ...cards])
		if (card.list === "later") {
			setListLater([card, ...listLater])
		}
		else if (card.list === "in process") {
			setListInProcess([card, ...listInProcess])
		}
		else if (card.list === "completed") {
			setListCompleted([card, ...listCompleted])
		}
  	}

	function deleteCard(removedCard) {
		setCards(cards.filter(card => card.id !== removedCard.id))
		if (removedCard.list === "later") {
			setListLater(cards.filter(card => card.id !== removedCard.id))
		}
		else if (removedCard.list === "in process") {
			setListInProcess(cards.filter(card => card.id !== removedCard.id))
		}
		else if (removedCard.list === "completed") {
			setListCompleted(cards.filter(card => card.id !== removedCard.id))
		}
	}
	
	function editCard(newCard) {
		cards[cards.findIndex(card => card.id === newCard.id)] = newCard
		setCards(cards)
	}

	function moveCard(card, listName) {
		deleteCard(card)
		card.list = listName
		getCard(card)
	}

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="App main-wrapper">
				
				<div className="form-wrapper">
					{/* форма создания карточки, обновляет состояние со всеми карточками */}
					<div className='form'>
						<CreateCards addCard={getCard}></CreateCards>
					</div>
				</div>
				{/* список карточек, получается состояние со всеми карточками, функции удаления и редактирования карточек */}
				<div className='lists-wrapper'>
					<div className='lists'>

								<ListOfCards title={ "later" } cards={lists.later} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
								<ListOfCards title={ "in process" } cards={lists.inProcess} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
								<ListOfCards title={ "completed" } cards={lists.completed} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
					</div>
				</div>
			</div>
      	</DndProvider>
	);
}

export default App;
