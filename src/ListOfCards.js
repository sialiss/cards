import Card from './Card.js';
import './ListOfCards.css';
import { useDrop } from 'react-dnd'

function ListOfCards({ title, cards, deleteCard, editCard, moveCard }) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: 'card',
		drop: (item) => moveCard(item.data, title),
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
			// почему-то не убирает цвет после перемещения карточки
			// style={{ backgroundColor: isOver ? 'white' : 'none' }}
		>
			{canDrop ? 'Release to drop' : 'Drag a card here'}

			{/* Выводит каждую карточку из стейта со всеми карточками по очереди */}
			<div className='listTitle'>
				<p>{title}</p>
			</div>
			{cards.map(card => <Card className={card.list} key={card.id}
				data={card} deleteCard={deleteCard} editCard={editCard}></Card>)}
		</div>
    );
}

export default ListOfCards;

