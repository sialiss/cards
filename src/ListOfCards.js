import Card from './Card';
import './ListOfCards.css'

function ListOfCards({ cards }) {

    return (
      <div className="ListOfCards">
            {cards.map(card => <Card key = { card.id } data = {card} ></Card>) }
      </div>
    );
}

export default ListOfCards;

