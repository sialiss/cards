import Card from './Card.js';
import './ListOfCards.css';

function ListOfCards({ cards, deleteCard, editCard }) {
    
    	return (
			<div className="ListOfCards">
				{/* Выводит каждую карточку из стейта со всеми карточками по очереди */}
            	{cards.map(card => <Card key = { card.id } data = {card} deleteCard = {deleteCard} editCard = {editCard}></Card>) }
      		</div>
    );
}

export default ListOfCards;

