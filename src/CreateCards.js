import { useState } from 'react';
import './CreateCards.css'



let cardId = 1
function CreateCards(props) {
	const [cardTitle, setCardTitle] = useState("")
	const [cardDescription, setCardDescription] = useState("")
	
	const clearInput = () => {
	setCardTitle("")
	setCardDescription("")
}
	
	return (
	  <div className="CreateCards">
		<input className='cardTitle' value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
		<input className='cardDescription' value={cardDescription} onChange={e => setCardDescription(e.target.value)}/>
		
		<div className='buttons'>
				<button className="confirm" onClick={() => {
					const card = { id: cardId, title: cardTitle, description: cardDescription }
					props.addCard(card)
					cardId += 1
					clearInput()
				}}>
			✓
		  </button>
				<button className="delete" onClick={() => {
					clearInput()
				} }>
			☓
		  </button>
		</div>
	  </div>
	);
}

export default CreateCards;