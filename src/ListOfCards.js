import Card from './Card.js';
import './ListOfCards.css';
import { useDrop } from 'react-dnd'
import { moveCard } from './functions.js'

function ListOfCards({ title, cards, deleteCard, editCard }) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		// The type (or types) to accept - strings or symbols
		accept: 'card',
		drop: () => moveCard(title),
		// Props to collect
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
    }))

	return (
		<div className="ListOfCards"
			ref={drop}
			role={'Dustbin'}
			style={{ backgroundColor: isOver ? 'red' : 'white' }}
		>
			{canDrop ? 'Release to drop' : 'Drag a box here'}
			
			{/* Выводит каждую карточку из стейта со всеми карточками по очереди */}
			<div className='listTitle'>
				<p>{title}</p>
			</div>
			{cards.map(card => <Card className={card.list} key={card.id}
				data={card} deleteCard={deleteCard} editCard={editCard}></Card>)}
		</div>
		// <div className="ListOfCards">
		// 	{/* Выводит каждую карточку из стейта со всеми карточками по очереди */}

		// 	<div className='listTitle'>
		// 		<p>{title}</p>
		// 	</div>
		// 	{cards.map(card => <Card className={card.list} key={card.id}
		// 		data={card} deleteCard={deleteCard} editCard={editCard}></Card>)}
		// </div>
    );
}

export default ListOfCards;

