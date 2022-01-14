import Card from './Card';
import './ListOfCards.css'

function ListOfCards({ cards, deleteCard }) {
    
    	return (
      		<div className="ListOfCards">
            	{cards.map(card => <Card key = { card.id } data = {card} deleteCard = {deleteCard}></Card>) }
      		</div>
    );
}

export default ListOfCards;

