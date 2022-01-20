import Card from './Card.js';
import './ListOfCards.css';

function ListOfCards({ title, cards, deleteCard, editCard }) {
    	return (
			<div className="ListOfCards">
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

