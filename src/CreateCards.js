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
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const card = { id: cardId, title: cardTitle, description: cardDescription }
		props.addCard(card)
		cardId += 1
		clearInput()
	}
	
	return (		
		<form className='CreateCards' onSubmit={ handleSubmit }>
			<div className='wrapper'>
				<label className='labels'>Title: </label>
				<input className='cardTitle' value={cardTitle} onChange={e => setCardTitle(e.target.value)} />

				<label className='labels'>Description: </label>
				<input className='cardDescription' value={cardDescription} onChange={e => setCardDescription(e.target.value)} />
					
				<div className='buttons'>
				<input type="submit" className="confirm" value="✓"/>

				<input type="button" className="delete" value="☓" onClick={ clearInput } />
				</div>
			</div>
		</form>
	);
}
export default CreateCards;