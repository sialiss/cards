import { useState } from 'react';
import './CreateCards.css'

let cardId = 1
function CreateCards(props) {
	const [cardTitle, setCardTitle] = useState("")
	const [cardDescription, setCardDescription] = useState("")
	
	const clearInput = () => {
		// делает инпуты пустыми
		setCardTitle("")
		setCardDescription("")
	}
	
	const handleSubmit = (e) => {
		// предотвращает обновление страницы (поведение по умолчанию)
		// создаёт карточку, добавляет карточку в пропс, очищает инпуты
		e.preventDefault()
		const card = { id: cardId, title: cardTitle, description: cardDescription }
		props.addCard(card)
		cardId += 1
		clearInput()
	}

	const handleTitleSubmit = (e) => {
		// переключение на следующий инпут по нажатию на энтер вместо сабмита формы
		if (e.code === "Enter") {
			e.preventDefault()
			// это плохо, лучше переделать, пока не знаю как
			// посмотреть как работает переключение по tab
			e.currentTarget.nextElementSibling.nextElementSibling.focus()
		}	
	}
	
	return (		
		<form className='CreateCards' onSubmit={ handleSubmit }>
			<div className='wrapper'>

				{/* инпут ввода названия */}
				<label className='labels'>Title: </label>
				<input className='cardTitle' value={cardTitle} onChange={e => setCardTitle(e.target.value)} onKeyDown={e => handleTitleSubmit(e)}/>

				{/* инпут ввода описания */}
				<label className='labels'>Description: </label>
				<input className='cardDescription' value={cardDescription} onChange={e => setCardDescription(e.target.value)} />

				<div className='buttons'>
					{/* кнопка сабмит по нажатию сабмитит форму (энтер в инпуте описания тоже) */}
					<input type="submit" className="confirm" value="✓"/>
					
					{/* просто чистит инпуты */}
					<input type="button" className="delete" value="☓" onClick={ clearInput } />
				</div>
			</div>
		</form>
	);
}
export default CreateCards;