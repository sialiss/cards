import Card from './Card.js';
import './ListOfCards.css';

function ListOfCards({ cards, deleteCard, editCard }) {
    
    	return (
      		<div className="ListOfCards">
            	{cards.map(card => <Card key = { card.id } data = {card} deleteCard = {deleteCard} editCard = {editCard}></Card>) }
      		</div>
    );
}

export default ListOfCards;

