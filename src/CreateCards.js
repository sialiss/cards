import { useState } from 'react';
import './CreateCards.css'

let cardId = 1
function CreateCards(props) {
    const [cardTitle, setCardTitle] = useState("")
    const [cardDescription, setCardDescription] = useState("")
    
    return (
      <div className="CreateCards">
        <input className='cardTitle' value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
        <input className='cardDescription' value={cardDescription} onChange={e => setCardDescription(e.target.value)}/>
        
        <div className='buttons'>
                <button className="confirm" onClick={() => {
                    const card = { id: cardId, title: cardTitle, description: cardDescription }
                    props.addCard(card)
                    cardId += 1
                }}>
            ✓
          </button>
                <button className="delete" onClick={() => {
                    setCardTitle("")
                    setCardDescription("")
                } }>
            ☓
          </button>
        </div>
      </div>
    );
}

export default CreateCards;