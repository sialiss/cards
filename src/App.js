import { useReducer } from 'react';
import './App.css';
import CreateCards from './CreateCards.js';
import ListOfCards from './ListOfCards.js';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
	const exampleCard = {
		description: "description",
		id: 1,
		list: "later",
		title: "do something"
	}
	const initialState = {
		cards: [exampleCard],
		later: [exampleCard],
		inProcess: [],
		completed: []
	};
	const [state, dispatch] = useReducer(reducer, initialState)

	function reducer(state, action) {
		// это надо переделать
		switch (action.type) {
			case 'add':
				switch (action.card.list) {
					case 'later':
						return { ...state, cards: [action.card, ...state.cards], later: [action.card, ...state.later]};
					case 'in process':
						return { ...state, cards: [action.card, ...state.cards], inProcess: [action.card, ...state.inProcess]};
					case 'completed':
						return { ...state, cards: [action.card, ...state.cards], completed: [action.card, ...state.completed]};
					default:
						throw new Error();
				}
			case 'delete':
				switch (action.card.list) {
					case 'later':
						return {
							...state, cards: state.cards.filter(card => card.id !== action.card.id),
							later: state.later.filter(card => card.id !== action.card.id)
						};
					case 'in process':
						return {
							...state, cards: state.cards.filter(card => card.id !== action.card.id),
							inProcess: state.inProcess.filter(card => card.id !== action.card.id)
						};
					case 'completed':
						return {
							...state, cards: state.cards.filter(card => card.id !== action.card.id),
							completed: state.completed.filter(card => card.id !== action.card.id)
						};
					default:
						throw new Error();
				}
			case 'edit':
				switch (action.card.list) {
					case 'later':
						return {
							...state, cards: state.cards.sort(card => { if (card.id == action.card.id) card = action.card}),
							later: state.later.sort(card => { if (card.id == action.card.id) card = action.card})
						};
					case 'in process':
						return {
							...state, cards: state.cards.sort(card => { if (card.id == action.card.id) card = action.card}),
							inProcess: state.inProcess.sort(card => { if (card.id == action.card.id) card = action.card})
						};
					case 'completed':
						return {
							...state, cards: state.cards.sort(card => { if (card.id == action.card.id) card = action.card}),
							completed: state.completed.sort(card => { if (card.id == action.card.id) card = action.card})
						};
					default:
						throw new Error();
				}
			default:
      			throw new Error();
		}
	}

	function getCard(card) {
		dispatch({type: 'add', card: card})
		// setCards([card, ...cards])
		// if (card.list === "later") {
		// 	setListLater([card, ...listLater])
		// }
		// else if (card.list === "in process") {
		// 	setListInProcess([card, ...listInProcess])
		// }
		// else if (card.list === "completed") {
		// 	setListCompleted([card, ...listCompleted])
		// }
  	}

	function deleteCard(removedCard) {
		dispatch({type: 'delete', card: removedCard})
		// setCards(cards.filter(card => card.id !== removedCard.id))
		// if (removedCard.list === "later") {
		// 	setListLater(listLater.filter(card => card.id !== removedCard.id))
		// }
		// else if (removedCard.list === "in process") {
		// 	setListInProcess(listInProcess.filter(card => card.id !== removedCard.id))
		// }
		// else if (removedCard.list === "completed") {
		// 	setListCompleted(listCompleted.filter(card => card.id !== removedCard.id))
		// }
	}

	function editCard(newCard) {
		dispatch({type: 'edit', card: newCard})
		// cards[cards.findIndex(card => card.id === newCard.id)] = newCard
		// setCards(cards)
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
								<ListOfCards title={ "later" } cards={state.later} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
								<ListOfCards title={ "in process" } cards={state.inProcess} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
								<ListOfCards title={ "completed" } cards={state.completed} deleteCard={deleteCard} editCard={editCard} moveCard={moveCard}></ListOfCards>
					</div>
				</div>
			</div>
      	</DndProvider>
	);
}

export default App;
