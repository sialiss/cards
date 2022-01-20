import { useState } from 'react';
import './CreateCards.css'

let cardId = 1
function CreateCards(props) {
	const [cardTitle, setCardTitle] = useState("")
	const [cardDescription, setCardDescription] = useState("")
	const [cardList, setCardList] = useState("later")
	
	const clearInput = () => {
		// делает инпуты пустыми
		setCardTitle("")
		setCardDescription("")
	}
	
	const handleSubmit = (e) => {
		// предотвращает обновление страницы (поведение по умолчанию)
		// создаёт карточку, добавляет карточку в пропс, очищает инпуты
		e.preventDefault()
		const card = { id: cardId, title: cardTitle, description: cardDescription, list: cardList }
		// console.log(card)
		props.addCard(card)
		cardId += 1
		clearInput()
		// сделать перевод фокуса на инпут названия карточки
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

				{/* выбор списка, в котором будет отображаться карточка */}
				<label className='labels'>List: </label>
				<select className='cardList' value={cardList} onChange={e => setCardList(e.target.value)}>
					<option value={"later"}>Later</option>
					<option value={"in process"}>In process</option>
					<option value={"completed"}>Completed</option>
				</select>

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